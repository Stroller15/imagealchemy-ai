"use client";

import { Download, Loader2 } from "lucide-react";
import { dataUrl, debounce, download, getImageSize } from "@/lib/utils";
import { CldImage, getCldImageUrl } from "next-cloudinary";
import { PlaceholderValue } from "next/dist/shared/lib/get-img-props";
import { Button } from "../ui/button";
import CropFrame from "./CropFrame";

const TransformedImage = ({
  image,
  type,
  title,
  transformationConfig,
  isTransforming,
  setIsTransforming,
  hasDownload = false,
}: TransformedImageProps) => {
  const downloadHandler = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();

    download(
      getCldImageUrl({
        width: image?.width,
        height: image?.height,
        src: image?.publicId,
        ...transformationConfig,
      }),
      title
    );
  };

  return (
    <div className="flex flex-col gap-3">
      <div className="flex h-8 items-center justify-between">
        <h3 className="text-xs font-medium text-fg-2">Result</h3>
        {hasDownload && (
          <Button variant="ghost" size="sm" onClick={downloadHandler}>
            <Download strokeWidth={1.5} />
            Download
          </Button>
        )}
      </div>
      {image?.publicId && transformationConfig ? (
        <CropFrame inset={6}>
          <div className="relative overflow-hidden rounded-[8px] bg-surface">
            <CldImage
              width={getImageSize(type, image, "width")}
              height={getImageSize(type, image, "height")}
              src={image?.publicId}
              alt={image.title || "Transformed image"}
              sizes={"(max-width: 767px) 100vw, 50vw"}
              placeholder={dataUrl as PlaceholderValue}
              className="h-fit min-h-72 w-full object-cover"
              onLoad={() => {
                setIsTransforming && setIsTransforming(false);
              }}
              onError={() => {
                debounce(() => {
                  setIsTransforming && setIsTransforming(false);
                }, 8000)();
              }}
              {...transformationConfig}
            />
            {isTransforming && (
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-[#171717]/75 backdrop-blur-[2px]">
                <Loader2 className="size-5 animate-spin text-white/90" strokeWidth={1.5} />
                <p className="text-xs text-white/80">Transforming</p>
              </div>
            )}
          </div>
        </CropFrame>
      ) : (
        <div className="flex min-h-72 flex-1 flex-col items-center justify-center gap-1 rounded-[10px] border border-dashed border-fg/15 px-6 text-center">
          <p className="text-sm font-medium text-fg-2">No result yet</p>
          <p className="text-xs text-fg-3">
            Upload an image and apply the transformation to see it here
          </p>
        </div>
      )}
    </div>
  );
};

export default TransformedImage;
