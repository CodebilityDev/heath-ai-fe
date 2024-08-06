import { PiUploadSimple } from "react-icons/pi";
import { Button } from "@/components/ui/button";

function BrandingPage() {
    return (
        <div className="mx-auto mt-8 flex items-center justify-center p-1">
            <div className="form-content">
                <div className="w-full p-4 rounded-md bg-slate-100">
                    <div className="flex item-center gap-x-2">
                        Branding Setting
                    </div>
                </div>
                <div className='w-full inline-flex items-center'>
                    <p className="mr-4">Upload Company Logo</p>
                    <div className="flex flex-col items-center justify-center cusor-pointer">
                        <label htmlFor="dropzone-file" className="flex flex-col items-center justify-center bg-[#E6ECFF] border border-primary border-dashed rounded-full w-[100px] h-[100px] cursor-pointer">
                            <PiUploadSimple
                                size={20}
                                className="transition text-primary group-hover:text-red-400"
                            />
                            <input id="dropzone-file" type="file" className="hidden" />
                        </label>
                    </div>
                </div>
                <div className="inline-form-container">
                    <div className="inline-form-element">
                        <p className="mb-2">Company Name</p>
                        <input
                            type="text"
                            placeholder="Please input company name"
                            className="form-input"
                        />
                    </div>
                    <div className="inline-form-element">
                        <p className="mb-2">Company Phone</p>
                        <input
                            type="text"
                            placeholder="(916) 800-0000"
                            className="form-input"
                        />
                    </div>
                </div>
                <Button
                    variant="outline"
                    className="w-full py-2 font-bold hover:text-white hover:bg-primary"
                >
                    Update Branding Setting
                </Button>
            </div>
        </div>
    )
}

export default BrandingPage