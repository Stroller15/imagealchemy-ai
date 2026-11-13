"use server";

import { revalidatePath } from "next/cache";
import { connectToDatabase } from "../database/mongoose";
import { handleError } from "../utils";
import User from "../database/models/user.model";
import Image from "../database/models/image.model";
import { notFound, redirect } from "next/navigation";
import { isValidObjectId } from "mongoose";
import { requireCurrentUser } from "../server/current-user";


/** Escape user input so it is matched literally inside a RegExp. */
const escapeRegex = (value: string) =>
  value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

const populateUser = (query: any) => query.populate({
  path: 'author',
  model: User,
  select: '_id firstName lastName clerkId'
})

// ADD IMAGE
export async function addImage({ image, path }: AddImageParams) {
  try {
    const author = await requireCurrentUser();

    const newImage = await Image.create({
      ...image,
      author: author._id,
    })

    revalidatePath(path);

    return JSON.parse(JSON.stringify(newImage));
  } catch (error) {
    handleError(error)
  }
}

// UPDATE IMAGE
export async function updateImage({ image, path }: UpdateImageParams) {
  try {
    const user = await requireCurrentUser();

    const imageToUpdate = isValidObjectId(image._id)
      ? await Image.findOne({ _id: image._id, author: user._id })
      : null;

    if (!imageToUpdate) {
      throw new Error("Unauthorized or image not found");
    }

    // Never let the client move an image to another author.
    const { _id, ...changes } = image;
    const updatedImage = await Image.findByIdAndUpdate(
      imageToUpdate._id,
      { ...changes, author: user._id, updatedAt: new Date() },
      { new: true }
    )

    revalidatePath(path);

    return JSON.parse(JSON.stringify(updatedImage));
  } catch (error) {
    handleError(error)
  }
}

// DELETE IMAGE
export async function deleteImage(imageId: string) {
  const user = await requireCurrentUser();

  const deleted = isValidObjectId(imageId)
    ? await Image.findOneAndDelete({ _id: imageId, author: user._id })
    : null;

  if (!deleted) throw new Error("Unauthorized or image not found");

  revalidatePath("/home");
  revalidatePath("/profile");
  redirect("/home");
}

// GET IMAGE
export async function getImageById(imageId: string) {
  const user = await requireCurrentUser();

  // Someone else's image looks exactly like a missing one.
  if (!isValidObjectId(imageId)) notFound();
  const image = await populateUser(
    Image.findOne({ _id: imageId, author: user._id })
  );
  if (!image) notFound();

  return JSON.parse(JSON.stringify(image));
}

// GET IMAGES
// GET THE SIGNED-IN USER'S IMAGES (Home), with optional search
export async function getAllImages({ limit = 9, page = 1, searchQuery = '' }: {
  limit?: number;
  page: number;
  searchQuery?: string;
}) {
  try {
    const user = await requireCurrentUser();

    // Search the saved edits themselves. The previous version ran a
    // Cloudinary search on file metadata, which never matched the titles
    // people give their edits, and passed raw input into that query.
    const term = searchQuery.trim().slice(0, 100);
    const pattern = new RegExp(escapeRegex(term), "i");
    const query = term
      ? {
          author: user._id,
          $or: [
            { title: pattern },
            { prompt: pattern },
            { color: pattern },
            { transformationType: pattern },
          ],
        }
      : { author: user._id };

    const skipAmount = (Number(page) -1) * limit;

    const images = await populateUser(Image.find(query))
      .sort({ updatedAt: -1 })
      .skip(skipAmount)
      .limit(limit);
    
    const totalImages = await Image.find(query).countDocuments();

    return {
      data: JSON.parse(JSON.stringify(images)),
      totalPage: Math.ceil(totalImages / limit),
    }
  } catch (error) {
    handleError(error)
  }
}

// GET IMAGES BY USER
export async function getUserImages({
  limit = 9,
  page = 1,
}: {
  limit?: number;
  page: number;
}) {
  try {
    const user = await requireCurrentUser();
    const userId = user._id;

    const skipAmount = (Number(page) - 1) * limit;

    const images = await populateUser(Image.find({ author: userId }))
      .sort({ updatedAt: -1 })
      .skip(skipAmount)
      .limit(limit);

    const totalImages = await Image.find({ author: userId }).countDocuments();

    return {
      data: JSON.parse(JSON.stringify(images)),
      totalPages: Math.ceil(totalImages / limit),
      totalImages,
    };
  } catch (error) {
    handleError(error);
  }
}

