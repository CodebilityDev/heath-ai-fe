import UploadBox from "@/components/core/UploadBox"

interface ImagePackProps {
    images: string[]
    title: string
    onChange?: any
}

function ImagePack(props: ImagePackProps) {
    return (
        <div className="w-full">
            <p className="form-label">{props.title}</p>
            <div className="w-full flex flex-wrap gap-[36px] rounded-[12px] border border-dashed border-primary p-8">
                {
                    props.images.map((imageUrl: string, idx: number) => {
                        return (
                            <UploadBox
                                title=""
                                url={imageUrl}
                                mode="circle"
                                key={idx}
                            />
                        )
                    })
                }
                <UploadBox
                    title=""
                    url=""
                    mode="circle"
                    id=""
                    key={-1}
                />
            </div>
        </div>
    )
}

export default ImagePack;