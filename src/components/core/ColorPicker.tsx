interface ColorPickerProps {
    color: string,
    title: string
}

function ColorPicker(props: ColorPickerProps) {
    return (
        <div className="inline-form-element">
            <p className="mb-2">{props.title}</p>
            <div className="relative">
                <input
                    type="text"
                    placeholder="#000000"
                    className="pl-[50px] form-input"
                    value={props.color}
                />
                <div className={`absolute w-[24px] h-[24px] top-[16px] left-[16px] bg-[${props.color}] rounded-[2px]`}>
                </div>
            </div>
        </div>
    )
}

export default ColorPicker;