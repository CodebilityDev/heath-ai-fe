import UploadBox from "@/components/core/UploadBox"
import { Proportions } from "lucide-react"

interface ImagePackProps {
    images: string[]
    title: string
    onImagePackChange?: any
}


function ImagePack(props: ImagePackProps) {

    const addImageToLifestyleBox = (url: string) => {
        props.onImagePackChange([...props.images, url]);
    }

    const removeImage = (url: string) => {
        let images = props.images
        let idx = images.findIndex((image) => image === url)
        console.log('url log', url, props.images, idx)
        if (idx != -1) {
            images.splice(idx, 1)
            props.onImagePackChange([...images])
        }
    }

    return (
        <div className="w-full">
            <p className="form-label">{props.title}</p>
            <div className="w-full flex flex-wrap gap-[36px] rounded-[12px] border border-dashed border-primary p-8">
                {
                    props.images.map((imageUrl: string, idx: number) => {
                        return (
                            <UploadBox
                                id={`-${String(idx)}`}
                                title=""
                                url={imageUrl}
                                mode="circle"
                                key={idx}
                                onFileUpload={(url: string) => { }}
                                onImageRemove={(url: string) => removeImage(url)}
                            />
                        )
                    })
                }
                <UploadBox
                    id={`-default-${props.images.length}`}
                    title=""
                    url=""
                    mode="circle"
                    onFileUpload={(url: string) => addImageToLifestyleBox(url)}
                    onImageRemove={(url: string) => { }}
                />
            </div>
        </div>
    )
}

export default ImagePack;