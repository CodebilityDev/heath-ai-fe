import { useState } from 'react'
import { PiUploadSimple } from "react-icons/pi";
import { IoIosRemoveCircleOutline } from "react-icons/io";
import { useMutation } from '@apollo/client';
import { FileUpload as FILE_UPLOAD } from '@/graphql/declarations/fileUpload'
import axios from 'axios'
interface UploadBoxProps {
    title: string,
    url?: string | null,
    mode: 'square' | 'circle'
    id?: string
    onFileUpload: any
    onImageRemove: any
}

function UploadBox(props: UploadBoxProps) {

    const [showRemoveIcon, setShowRemoveIcon] = useState(false)
    const [FileUpload, { data, loading, error }] = useMutation(FILE_UPLOAD)

    const toggleRemoveIcon = (e: any, toggle: boolean) => {
        setShowRemoveIcon(toggle)
    }

    const removeImage = (e: any, url: string) => {
        e.preventDefault()
        props.onImageRemove(url)
    }

    const uploadFile = (e: any) => {
        if (e.target.files) {
            FileUpload({
                variables: {
                    input: {
                        fileID: e.target.files[0].name + e.target.files[0].lastModified
                    }
                }
            }).then(({ data }: any) => {
                axios.put(data.file_generateUploadURL.putURL, e.target.files[0], {
                    headers: {
                        'Content-Type': 'image/jpeg'
                    }
                }).then((res: any) => {
                    props.onFileUpload(data.file_generateUploadURL.getURL)
                }).catch((error: any) => {
                    console.log('err', error)
                })
            })
        }
    }

    return (
        <div className='flex items-center'>
            <p className="mr-4">{props.title}</p>
            <div className={`flex flex-col ${props.mode === 'circle' ? '' : 'w-full'} items-center justify-center cusor-pointer`}>
                <label htmlFor={`${props.url === "" ? `dropzone-file${props.id}` : ""}`} className={`flex flex-col items-center justify-center bg-[#E6ECFF] border border-primary border-dashed  ${props.mode === 'circle' ? 'w-[100px] h-[100px] rounded-full' : 'w-full h-[100px] rounded-[12px]'}  cursor-pointer`}>
                    {props.url === "" ?
                        <>
                            <PiUploadSimple
                                size={20}
                                className="transition text-primary group-hover:text-red-400"
                            />
                            <input id={`dropzone-file${props.id}`} multiple type="file" className="hidden" onChange={uploadFile} />
                        </>
                        :
                        <>
                            <div className="relative w-full h-full rounded-full" onMouseEnter={(e: any) => toggleRemoveIcon(e, true)} onMouseLeave={(e: any) => toggleRemoveIcon(e, false)}>
                                <img src={props.url || ''} alt="no image" className={`${props.mode === 'circle' ? 'rounded-full w-full h-full' : 'h-full w-auto'}`} />
                                {showRemoveIcon && <div className="flex items-center justify-center w-full h-full absolute top-0 left-0 rounded-full hover:bg-[#202020] hover:opacity-50 hover:z-100" onClick={(e: any) => removeImage(e, props.url || '')}>
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