import { useState } from "react"
import { ControlPanel } from "./ControlPanel"
import { NamisaProps } from "./types"

export const Namisa = (props: NamisaProps) => {
    const [args, setArgs] = useState(
        props.controls
            ? (Object.fromEntries(
                  Object.entries(props.controls)
                      .filter(([key, control]) => "default" in control)
                      .map(([key, control]) => [key, control.default])
              ) as Record<string, unknown>)
            : {}
    )

    return (
        <>
            <div
                style={{
                    fontFamily: "revert",
                }}
            >
                <props.children args={args} />
            </div>
            {props.controls && (
                <ControlPanel
                    controls={props.controls}
                    onChange={(e) => {
                        setArgs((prev) => ({
                            ...prev,
                            [e.key]: e.value,
                        }))
                    }}
                />
            )}
        </>
    )
}
