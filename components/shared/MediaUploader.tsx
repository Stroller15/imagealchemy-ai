"use client";

import { Upload } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import { dataUrl, getImageSize } from "@/lib/utils";
import { CldImage, CldUploadWidget } from "next-cloudinary";
import { PlaceholderValue } from "next/dist/shared/lib/get-img-props";
import CropFrame from "./CropFrame";

type MeadiaUploaderProps = {
  onValueChange: (value: string) => void;
  setImage: React.Dispatch<any>;
  image: any;
  publicId: string;
  type: string;
};

const MediaUploader = ({
  onValueChange,
  setImage,
  image,
  publicId,
  type,
}: MeadiaUploaderProps) => {
  const { toast } = useToast();

  const onUploadSuccessHandler = (result: any) => {
    setImage((prevState: any) => ({
      ...prevState,
      publicId: result?.info?.public_id,
      width: result?.info?.width,
      height: result?.info?.height,
      secureURL: result?.info?.secure_url,
    }));

    onValueChange(result?.info?.public_id);

    toast({
      title: "Image uploaded",
      description: "Choose your settings, then apply the transformation",
      duration: 5000,
      className: "success-toast",
    });
  };

  const onUploadErrorHandler = () => {
    toast({
      title: "Upload failed",
      description: "Check your connection and try again",
      duration: 5000,
      className: "error-toast",
    });
  };

  return (
    <CldUploadWidget
      uploadPreset="shubh_imagealchemy"
      options={{
        multiple: false,
        resourceType: "image",
      }}
      onSuccess={onUploadSuccessHandler}
      onError={onUploadErrorHandler}
    >
      {({ open }) => (
        <div className="flex flex-col gap-3">
          <div className="flex h-8 items-center justify-between">
            <h3 className="text-sm font-medium text-fg">Original</h3>
            {publicId && image?.width && (
              <span className="font-mono text-2xs text-fg-3 tabular">
                {image.width} × {image.height}
              </span>
            )}
          </div>
          {publicId ? (
            <CropFrame inset={6}>
              <div className="overflow-hidden rounded-[8px] bg-surface">
                <CldImage
                  width={getImageSize(type, image, "width")}
                  height={getImageSize(type, image, "height")}
                  src={publicId}
                  alt="Original image"
                  sizes={"(max-width: 767px) 100vw, 50vw"}
                  placeholder={dataUrl as PlaceholderValue}
                  className="h-fit min-h-72 w-full object-cover"
                />
              </div>
            </CropFrame>
          ) : (
            <button
              type="button"
              onClick={() => open()}
              className="group flex min-h-72 flex-1 flex-col items-center justify-center gap-3 rounded-[10px] border border-dashed border-fg/20 bg-surface/60 text-center transition-colors duration-150 ease-out hover:border-fg/35 hover:bg-surface"
            >
              <span className="flex size-10 items-center justify-center rounded-full bg-surface text-fg-2 hairline">
                <Upload className="size-4" strokeWidth={1.5} />
              </span>
              <span className="text-sm font-medium text-fg">
                Upload an image
              </span>
              <span className="text-xs text-fg-3">Click to choose a file</span>
            </button>
          )}
        </div>
      )}
    </CldUploadWidget>
  );
};

export default MediaUploader;
