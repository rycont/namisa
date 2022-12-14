import { resolve } from "path"
import { defineConfig } from "vite"
import mdx from "@mdx-js/rollup"
import react from "@vitejs/plugin-react"
import dts from "vite-plugin-dts"

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [dts(), react(), mdx()],
    build: {
        lib: {
            entry: resolve(__dirname, "src/lib.ts"),
            name: "Namisa",
            fileName: "namisa",
            formats: ["es"],
        },
        rollupOptions: {
            external: ["react"],
        },
    },
    server: {
        hmr: {
            overlay: false,
        },
    },
})
