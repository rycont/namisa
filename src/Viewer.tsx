import "./config.css"
import { useState, useMemo, lazy, Suspense, useEffect } from "react"
import { Namisa } from "./Namisa"
import { Sidebar } from "./Sidebar"
import { ComponentMap, DirectoryTree } from "./types"
import { ErrorCatcher } from "./ErrorCatcher"

function directoryMapToTree(map: string[]) {
    const convertedTree: DirectoryTree = {
        key: "ROOT",
        name: "Components",
        child: [],
        meta: {
            isDirectory: true,
            rawPath: "/",
        },
    }

    for (const path of map) {
        const segments = path.split("/")

        let visiter = convertedTree

        for (const dir of segments.slice(0, -1)) {
            let nextVisit: DirectoryTree | undefined = visiter.child?.find(
                (item) => item.key === dir
            )

            if (!nextVisit) {
                nextVisit = {
                    key: dir,
                    child: [],
                    meta: {
                        isDirectory: true,
                        rawPath: path,
                    },
                } as DirectoryTree

                visiter.child.push(nextVisit)
            }

            visiter = nextVisit
        }

        const item: DirectoryTree = {
            key: segments[segments.length - 1],
            child: [],
            meta: {
                rawPath: path,
            },
        }

        visiter.child = [...visiter.child, item]
    }

    return convertedTree
}

export function Viewer({ components }: { components: ComponentMap }) {
    const dirTree = directoryMapToTree(Object.keys(components))

    const [currentPath, setCurrentPath] = useState<string>(
        location.hash.slice(1)
    )

    useEffect(() => {
        location.hash = currentPath
    }, [currentPath])

    const MDXDocument = useMemo(() => {
        if (!currentPath) return () => <></>
        return lazy(() => import(/* @vite-ignore */ currentPath))
    }, [currentPath])

    return (
        <div
            style={{
                display: "flex",
                height: "100vh",
            }}
        >
            <Sidebar
                items={dirTree.child[0].child[0]}
                onClick={setCurrentPath}
            />
            <div
                style={{
                    flex: 1,
                    display: "flex",
                    flexDirection: "column",
                    padding: "16px",
                    height: "100vh",
                    overflowY: "scroll",
                    boxSizing: "border-box",
                    fontFamily: "SUIT",
                    fontSize: "16px",
                }}
            >
                <ErrorCatcher>
                    <Suspense fallback={<></>}>
                        <MDXDocument
                            components={{
                                Namisa,
                            }}
                        />
                    </Suspense>
                </ErrorCatcher>
            </div>
        </div>
    )
}
