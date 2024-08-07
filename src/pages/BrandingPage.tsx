import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import UploadBox from "@/components/core/UploadBox";
import ColorPicker from "@/components/core/ColorPicker";
import ImagePack from "@/components/core/ImagePack";
import { useParams } from 'react-router-dom';
import { useQuery } from "@apollo/client";
interface BrandingSettingType {
    id: string
    companyName: string;
    companyPhone: string;
    companyEmail: string;
    companyAddress: string;
    companyWebsite: string;
    companyMotto: string;
    companyDescription: string;
    logoPhotoUrl: string;
    lifestylePhotoUrl: string[];
    bannerLogoPhotoUrl: string;
    colorPalette1: string;
    colorPalette1Contrast: string;
    colorPalette2: string;
    colorPalette2Contrast: string;
}

const images = [
    {
        url: "https://avatars.githubusercontent.com/u/66856556?v=4",
        id: "no"
    }
]

function BrandingPage() {

    const { gid } = useParams();

    const [brandingSetting, setBrandingSetting] = useState<BrandingSettingType>({
        id: '',
        companyName: '',
        companyPhone: '',
        companyEmail: '',
        companyAddress: '',
        companyWebsite: '',
        companyMotto: '',
        companyDescription: '',
        logoPhotoUrl: '',
        lifestylePhotoUrl: [],
        bannerLogoPhotoUrl: '',
        colorPalette1: '',
        colorPalette1Contrast: '',
        colorPalette2: '',
        colorPalette2Contrast: '',
    })

    const handleBrandingSettingChange = (data: string | number | string[], prop: string) => {
        setBrandingSetting((prev: typeof brandingSetting) => ({
            ...prev,
            [prop]: data
        }));
    };

    const updateBrandingSetting = () => {
        //action to update branding setting.
    }

    useEffect(() => {
        //action to get the branding setting.
    }, [])

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
                            url={brandingSetting.logoPhotoUrl}
                            onFileChange={(url: string) => handleBrandingSettingChange(url, 'logoPhotoUrl')}
                        />
                    </div>
                    <div className="inline-form-element">
                        <UploadBox
                            title="Upload Company Banner"
                            mode="square"
                            url={brandingSetting.bannerLogoPhotoUrl}
                            onFileChange={(url: string) => handleBrandingSettingChange(url, 'bannerLogoPhotoUrl')}
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
                            value={brandingSetting.companyName}
                            onChange={(e: any) => handleBrandingSettingChange(e.target.value, 'companyName')}
                        />
                    </div>
                    <div className="inline-form-element">
                        <p className="mb-2">Company Phone</p>
                        <input
                            type="text"
                            placeholder="(916) 800-0000"
                            className="form-input"
                            value={brandingSetting.companyPhone}
                            onChange={(e: any) => handleBrandingSettingChange(e.target.value, 'companyPhone')}
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
                            value={brandingSetting.companyEmail}
                            onChange={(e: any) => handleBrandingSettingChange(e.target.value, 'companyEmail')}
                        />
                    </div>
                    <div className="inline-form-element">
                        <p className="mb-2">Company Address</p>
                        <input
                            type="text"
                            placeholder="NY, York Shire"
                            className="form-input"
                            value={brandingSetting.companyAddress}
                            onChange={(e: any) => handleBrandingSettingChange(e.target.value, 'companyAddress')}
                        />
                    </div>
                </div>
                <div className="inline-form-element">
                    <p className="mb-2">Company Website</p>
                    <input
                        type="text"
                        placeholder="https://federal.org"
                        className="form-input"
                        value={brandingSetting.companyWebsite}
                        onChange={(e: any) => handleBrandingSettingChange(e.target.value, 'companyWebsite')}
                    />
                </div>
                <div className="w-full">
                    <p className="form-label">Company Motto</p>
                    <textarea
                        rows={6}
                        placeholder="Please input company motto"
                        className="form-input"
                        value={brandingSetting.companyMotto}
                        onChange={(e: any) => handleBrandingSettingChange(e.target.value, 'companyMotto')}
                    ></textarea>
                </div>
                <div className="w-full">
                    <p className="form-label">Company Description</p>
                    <textarea
                        rows={6}
                        placeholder="Please input company motto"
                        className="form-input"
                        value={brandingSetting.companyDescription}
                        onChange={(e: any) => handleBrandingSettingChange(e.target.value, 'companyDescription')}
                    ></textarea>
                </div>
                <div className="inline-form-container">
                    <ColorPicker
                        title="Color Palette1"
                        color={brandingSetting.colorPalette1}
                        onChange={(color: string) => handleBrandingSettingChange(color, 'colorPalette1')}
                    />
                    <ColorPicker
                        title="Color Palette1 Contrast"
                        color={brandingSetting.colorPalette1Contrast}
                        onChange={(color: string) => handleBrandingSettingChange(color, 'colorPalette1Contrast')}
                    />
                </div>
                <div className="inline-form-container">
                    <ColorPicker
                        title="Color Palette2"
                        color={brandingSetting.colorPalette2}
                        onChange={(color: string) => handleBrandingSettingChange(color, 'colorPalette2')}
                    />
                    <ColorPicker
                        title="Color Palette2 Contrast"
                        color={brandingSetting.colorPalette2Contrast}
                        onChange={(color: string) => handleBrandingSettingChange(color, 'colorPalette2Contrast')}
                    />
                </div>
                <ImagePack
                    title="Lifestyle Photos"
                    images={brandingSetting.lifestylePhotoUrl}
                    onChange={(images: string[]) => handleBrandingSettingChange(images, 'lifestylePhotoUrl')}
                />
                <Button
                    variant="outline"
                    className="w-full sticky bottom-8 py-2 font-bold hover:text-white hover:bg-primary mb-8"
                    onClick={updateBrandingSetting}
                >
                    Update Branding Setting
                </Button>
            </div>
        </div>
    )
}

export default BrandingPage