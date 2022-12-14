export interface Tree<Meta = undefined> {
    key: string
    name?: string
    child: Tree<Meta>[]
    meta?: Meta
}

export type DirectoryTree = Tree<{
    isDirectory?: boolean
    rawPath: string
}>

export type ComponentMap = Record<string, () => Promise<unknown>>

export interface TypedControl<T = string> {
    default?: T
    comment?: string
    type?: string
}

export interface OptionControl<T = string> extends TypedControl<T> {
    options: T[]
}

export interface NumberSliderControl extends TypedControl<number> {
    type: "slider"
    step: number
    min: number
    max: number
}

export interface NumberControl extends TypedControl<number> {
    type?: "number"
    step: number
    min?: number
    max?: number
}

export type Control =
    | TypedControl
    | OptionControl
    | NumberSliderControl
    | NumberControl

export interface NamisaProps<T = Record<string, Control>> {
    controls?: T
    children: React.FC<{
        args: {
            [key in keyof T]: unknown
        }
    }>
}
