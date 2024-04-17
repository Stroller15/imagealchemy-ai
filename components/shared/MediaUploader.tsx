
import { useToast } from '@/components/ui/use-toast';
import {CldUploadWidget} from "next-cloudinary";

type MeadiaUploaderProps = {
  onValueChange: (value: string) => void;
  setImage: React.Dispatch<any>;
  image:any;
  publicId: string;
  type: string;
}

const MediaUploader = ({
  onValueChange,
  setImage,
  image,
  publicId,
  type
}: MeadiaUploaderProps) => {
    const { toast } = useToast()

    const onUploadSuccessHandler = (result: any) => {
      toast({
        title: "Image uploaded successfully",
        description: "1 credit was deducted from your account",
        duration: 5000,
        className:'success-toast'
      })
    }
    const onUploadErrorHandler = () => {
      toast({
        title: "Something went wrong when uploading",
        description: "Please try again",
        duration: 5000,
        className:'error-toast'
      })
    }
    
  return (
    <CldUploadWidget
    uploadPreset="shubh_imagealchemy"
    options={{
      multiple: false,
      resourceType: "image"
    }}
    onSuccess={onUploadSuccessHandler}
    onError={onUploadErrorHandler}
    >
      {({open}) => (
        <div className="flex flex-col gap-4">
          <h3 className="h3-bold text-dark-600">
            Original
          </h3>
        </div>
          
      )}
    </CldUploadWidget>
  )
}

export default MediaUploader