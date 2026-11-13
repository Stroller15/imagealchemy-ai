import "server-only";
import { auth } from "@clerk/nextjs";
import User from "../database/models/user.model";
import { connectToDatabase } from "../database/mongoose";

/**
 * The signed-in user's database record, resolved on the server from the
 * Clerk session. Server actions use this instead of trusting a user id
 * sent by the browser.
 */
export async function requireCurrentUser() {
  const { userId: clerkId } = auth();
  if (!clerkId) throw new Error("Not signed in");

  await connectToDatabase();
  const user = await User.findOne({ clerkId });
  if (!user) throw new Error("User not found");

  return user;
}
