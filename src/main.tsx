import { StrictMode } from "react"
import ReactDOM from "react-dom/client"
import { Viewer } from "./lib"

const components = import.meta.glob("/src/namisa/**/*.mdx")

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <StrictMode>
        <Viewer components={components} />
    </StrictMode>
)
