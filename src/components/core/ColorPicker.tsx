interface ColorPickerProps {
    color: string,
    title: string,
    onChange?: any
}

function ColorPicker(props: ColorPickerProps) {

    const onColorChange = (color: string) => {
        props.onChange(color)
    }

    const validateHexColor = (color: string) => {
        let regexp = /^#[0-9a-fA-F]{6}$/;
        return regexp.test(color);
    }
    return (
        <div className="inline-form-element">
            <p className="mb-2">{props.title}</p>
            <div className="relative">
                <input
                    type="text"
                    placeholder="#FFFFFF"
                    className="pl-[50px] form-input"
                    value={props.color}
                    onChange={(e: any) => onColorChange(e.target.value)}
                />
                <div className={`absolute w-[24px] h-[24px] top-[16px] left-[16px] rounded-[2px]`} style={{ backgroundColor: validateHexColor(props.color) ? props.color : '#FFFFFF' }}>
                </div>
            </div>
        </div>
    )
}

export default ColorPicker;