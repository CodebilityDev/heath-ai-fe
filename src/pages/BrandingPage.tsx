import { Button } from "@/components/ui/button";
import UploadBox from "@/components/core/UploadBox";
import ColorPicker from "@/components/core/ColorPicker";
import ImagePack from "@/components/core/ImagePack";

const images = [
    {
        url: "https://avatars.githubusercontent.com/u/66856556?v=4",
        id: "no"
    }
]

function BrandingPage() {
    return (
        <div className="mx-auto mt-8 flex items-center justify-center p-1">
            <div className="form-content">
                <div className="w-full p-4 rounded-md bg-slate-100">
                    <div className="flex item-center gap-x-2">
                        Branding Setting
                    </div>
                </div>
                <div className="inline-form-container">
                    <div className="inline-form-element">
                        <UploadBox
                            title="Upload Company Logo"
                            mode="circle"
                            url=""
                        />
                    </div>
                    <div className="inline-form-element">
                        <UploadBox
                            title="Upload Company Banner"
                            mode="square"
                            url=""
                        />
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
                <div className="inline-form-container">
                    <div className="inline-form-element">
                        <p className="mb-2">Company Email</p>
                        <input
                            type="text"
                            placeholder="user@example.com"
                            className="form-input"
                        />
                    </div>
                    <div className="inline-form-element">
                        <p className="mb-2">Company Address</p>
                        <input
                            type="text"
                            placeholder="NY, York Shire"
                            className="form-input"
                        />
                    </div>
                </div>
                <div className="inline-form-element">
                    <p className="mb-2">Company Website</p>
                    <input
                        type="text"
                        placeholder="https://federal.org"
                        className="form-input"
                    />
                </div>
                <div className="w-full">
                    <p className="form-label">Company Motto</p>
                    <textarea
                        rows={6}
                        placeholder="Please input company motto"
                        className="form-input"
                    ></textarea>
                </div>
                <div className="w-full">
                    <p className="form-label">Company Description</p>
                    <textarea
                        rows={6}
                        placeholder="Please input company motto"
                        className="form-input"
                    ></textarea>
                </div>
                <div className="inline-form-container">
                    <ColorPicker
                        title="Color Palette1"
                        color="#0970c5"
                    />
                    <ColorPicker
                        title="Color Palette1 Contrast"
                        color="#0970c5"
                    />
                </div>
                <div className="inline-form-container">
                    <ColorPicker
                        title="Color Palette2"
                        color="#0970c5"
                    />
                    <ColorPicker
                        title="Color Palette2 Contrast"
                        color="#0970c5"
                    />
                </div>
                <ImagePack
                    title="Lifestyle Photos"
                    images={images}
                />
                <Button
                    variant="outline"
                    className="w-full sticky bottom-8 py-2 font-bold hover:text-white hover:bg-primary mb-8"
                >
                    Update Branding Setting
                </Button>
            </div>
        </div>
    )
}

export default BrandingPage