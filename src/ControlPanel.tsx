import {
    Control,
    NumberControl,
    NumberSliderControl,
    OptionControl,
    TypedControl,
} from "./types"

const is = {
    option(control: Control): control is OptionControl {
        return "options" in control
    },
    numberSlider(control: TypedControl<any>): control is NumberSliderControl {
        return "min" in control && "max" in control
    },
    number(control: TypedControl<any>): control is NumberControl {
        return typeof control.default === "number" || control.type === "number"
    },
    boolean(control: TypedControl<any>): control is TypedControl<boolean> {
        return (
            typeof control.default === "boolean" || control.type === "boolean"
        )
    },
}

const InputByControl = ({
    itemKey,
    control,
    onChange,
}: {
    control: Control
    itemKey: string
    onChange: (args: { key: string; value: unknown }) => void
}) => {
    const commonField = {
        id: itemKey,
        defaultValue: control.default,
    }

    const changeHandler = (value: unknown) =>
        onChange({
            key: itemKey,
            value,
        })

    if (is.option(control)) {
        return (
            <select
                {...commonField}
                onChange={(e) => changeHandler(e.currentTarget.value)}
            >
                {control.options.map((option) => (
                    <option key={option}>{option}</option>
                ))}
            </select>
        )
    }

    if (is.numberSlider(control))
        return (
            <input
                type="range"
                step={control.step}
                min={control.min}
                max={control.max}
                onChange={(e) => {
                    changeHandler(e.currentTarget.value)
                }}
                {...commonField}
                defaultValue={control.default}
            />
        )

    if (is.number(control)) {
        return (
            <input
                type="number"
                step={control.step}
                min={control.min}
                max={control.max}
                onChange={(e) => {
                    changeHandler(e.currentTarget.value)
                }}
                {...commonField}
                defaultValue={control.default}
            />
        )
    }

    if (is.boolean(control)) {
        return (
            <input
                type="checkbox"
                {...commonField}
                onChange={(e) => {
                    changeHandler(e.currentTarget.checked)
                }}
            />
        )
    }

    return (
        <input
            {...commonField}
            defaultValue={control.default?.toString()}
            onChange={(e) => changeHandler(e.currentTarget.value)}
        />
    )
}

export const ControlPanel: React.FC<{
    controls: Record<string, Control>
    onChange({ key, value }: { key: string; value: unknown }): void
}> = (props) => {
    return (
        <div
            style={{
                display: "grid",
                gap: "4px",
                gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
                border: "solid rgba(0, 0, 0, 0.1)",
                padding: "16px",
            }}
        >
            {Object.entries(props.controls).map(([key, value]) => (
                <div
                    style={{
                        display: "flex",
                        flexDirection: "column",
                    }}
                    key={key}
                >
                    <label htmlFor={key}>{key}</label>
                    <InputByControl
                        itemKey={key}
                        control={value}
                        onChange={props.onChange}
                    />
                </div>
            ))}
        </div>
    )
}
