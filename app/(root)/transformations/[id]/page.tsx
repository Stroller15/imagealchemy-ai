import { auth } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { PencilLine } from "lucide-react";
import Header from "@/components/shared/Header";
import TransformedImage from "@/components/shared/TransformedImage";
import CropFrame from "@/components/shared/CropFrame";
import { Button } from "@/components/ui/button";
import { getImageById } from "@/lib/actions/image.actions";
import { getImageSize } from "@/lib/utils";
import { transformationTypes } from "@/constants";
import { DeleteConfirmation } from "@/components/shared/DeleteConfirmation";

const ImageDetails = async ({ params: { id } }: SearchParamProps) => {
  const { userId } = auth();

  const image = await getImageById(id);
  const isOwner = userId === image.author.clerkId;

  const meta = [
    {
      label: "Transformation",
      value:
        transformationTypes[image.transformationType as TransformationTypeKey]
          ?.title ?? image.transformationType,
    },
    image.prompt && { label: "Prompt", value: image.prompt },
    image.color && { label: "Color", value: image.color },
    image.aspectRatio && { label: "Aspect ratio", value: image.aspectRatio },
  ].filter(Boolean) as { label: string; value: string }[];

  return (
    <>
      <Header
        title={image.title || "Untitled edit"}
        actions={
          isOwner && (
            <>
              <Button variant="outline" asChild>
                <Link href={`/transformations/${image._id}/update`}>
                  <PencilLine strokeWidth={1.5} />
                  Edit
                </Link>
              </Button>
              <DeleteConfirmation imageId={image._id} />
            </>
          )
        }
      />

      <dl className="mt-6 flex flex-wrap gap-x-8 gap-y-3">
        {meta.map((item) => (
          <div key={item.label} className="flex items-baseline gap-2">
            <dt className="text-xs text-fg-3">{item.label}</dt>
            <dd className="font-mono text-2xs text-fg">{item.value}</dd>
          </div>
        ))}
      </dl>

      <section className="mt-8 grid gap-6 rounded-[16px] bg-sunken p-5 md:grid-cols-2 md:p-6">
        <div className="flex flex-col gap-3">
          <div className="flex h-8 items-center justify-between">
            <h3 className="text-xs font-medium text-fg-2">Original</h3>
            <span className="font-mono text-2xs text-fg-3 tabular">
              {image.width} × {image.height}
            </span>
          </div>
          <CropFrame inset={6}>
            <div className="overflow-hidden rounded-[8px] bg-surface">
              <Image
                width={getImageSize(image.transformationType, image, "width")}
                height={getImageSize(image.transformationType, image, "height")}
                src={image.secureURL}
                alt={`${image.title}, original`}
                className="h-fit min-h-72 w-full object-cover"
              />
            </div>
          </CropFrame>
        </div>

        <TransformedImage
          image={image}
          type={image.transformationType}
          title={image.title}
          isTransforming={false}
          transformationConfig={image.config}
          hasDownload={true}
        />
      </section>
    </>
  );
};

export default ImageDetails;
