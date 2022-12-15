import { DirectoryTree } from "./types";
export declare const Sidebar: React.FC<{
    items: DirectoryTree;
    onClick?(path: string): void;
}>;
