import { useState } from 'react'
import { PiUploadSimple } from "react-icons/pi";
import { IoIosRemoveCircleOutline } from "react-icons/io";
interface UploadBoxProps {
    title: string,
    url: string,
    mode: 'square' | 'circle'
    id?: string
    key?: number
    onFileChange?: any
}

function UploadBox(props: UploadBoxProps) {

    const [showRemoveIcon, setShowRemoveIcon] = useState(false)

    const toggleRemoveIcon = (e: any, toggle: boolean) => {
        setShowRemoveIcon(toggle)
    }

    const removeImage = (e: any, id: string) => {
        e.stopPropagation()
        console.log('remove image =====>', id);
    }

    return (
        <div className='flex items-center'>
            <p className="mr-4">{props.title}</p>
            <div className={`flex flex-col ${props.mode === 'circle' ? '' : 'w-full'} items-center justify-center cusor-pointer`}>
                <label htmlFor={`${props.url === "" ? "dropzone-file" : ""}`} className={`flex flex-col items-center justify-center bg-[#E6ECFF] border border-primary border-dashed  ${props.mode === 'circle' ? 'w-[100px] h-[100px] rounded-full' : 'w-full h-[100px] rounded-[12px]'}  cursor-pointer`}>
                    {props.url === "" ?
                        <>
                            <PiUploadSimple
                                size={20}
                                className="transition text-primary group-hover:text-red-400"
                            />
                            <input id="dropzone-file" type="file" className="hidden" />
                        </>
                        :
                        <>
                            <div className="relative w-full h-full rounded-full" onMouseEnter={(e: any) => toggleRemoveIcon(e, true)} onMouseLeave={(e: any) => toggleRemoveIcon(e, false)}>
                                <img src={props.url} alt="no image" className="rounded-full" />
                                {showRemoveIcon && <div className="flex items-center justify-center w-full h-full absolute top-0 left-0 rounded-full hover:bg-[#202020] hover:opacity-50 hover:z-100" onClick={(e: any) => removeImage(e, "")}>
                                    <IoIosRemoveCircleOutline
                                        color="#FFFFFF"
                                        size="25"
                                    />
                                </div>}
                            </div>
                        </>
                    }
                </label>
            </div>
        </div>
    )
}

export default UploadBox;