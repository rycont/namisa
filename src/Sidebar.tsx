import { useEffect, useState } from "react"
import { Tree, DirectoryTree } from "./types"

const getNameOfItem = (item: Tree<any>) => item.name || item.key

const ShowTree: React.FC<{
    items: DirectoryTree
    onClick?(path: string): void
}> = (props) => {
    const [opened, setOpened] = useState(true)

    return (
        <div>
            <div onClick={() => setOpened((prev) => !prev)}>
                <span
                    style={{
                        fontWeight: 600,
                    }}
                >
                    {opened ? "↑" : "↓"}
                </span>{" "}
                {getNameOfItem(props.items)}
            </div>
            {opened && (
                <ul
                    style={{
                        margin: "0px",
                    }}
                >
                    {props.items.child.map((item) =>
                        item.meta?.isDirectory ? (
                            <ShowTree
                                items={item}
                                key={item.meta.rawPath}
                                onClick={props.onClick}
                            />
                        ) : (
                            <li
                                key={item.meta?.rawPath}
                                onClick={() => {
                                    if (item.meta?.rawPath)
                                        props.onClick?.(item.meta.rawPath)
                                }}
                            >
                                {getNameOfItem(item)}
                            </li>
                        )
                    )}
                </ul>
            )}
        </div>
    )
}

export const Sidebar: React.FC<{
    items: DirectoryTree
    onClick?(path: string): void
}> = (props) => (
    <div
        style={{
            padding: "16px",
            borderRight: "solid rgba(0, 0, 0, 0.1)",
            fontFamily: "SUIT",
            fontSize: "14px",
            width: "160px",
            overflowX: "auto",
        }}
    >
        <ShowTree items={props.items} onClick={props.onClick} />
    </div>
)
