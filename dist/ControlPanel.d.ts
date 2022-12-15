import { Control } from "./types";
export declare const ControlPanel: React.FC<{
    controls: Record<string, Control>;
    onChange({ key, value }: {
        key: string;
        value: unknown;
    }): void;
}>;
