import UploadBox from "@/components/core/UploadBox"

interface LifeStyleImage {
    url: string
    id: string
}

interface ImagePackProps {
    images: LifeStyleImage[]
    title: string
}

function ImagePack(props: ImagePackProps) {
    return (
        <div className="w-full">
            <p className="form-label">{props.title}</p>
            <div className="w-full flex flex-wrap gap-[36px] rounded-[12px] border border-dashed border-primary p-8">
                {
                    props.images.map((image: LifeStyleImage, idx: number) => {
                        return (
                            <UploadBox
                                title=""
                                url={image.url}
                                id={image.id}
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