// vite.config.ts
import { resolve } from "path";
import { defineConfig } from "file:///C:/dev/namisa/node_modules/.pnpm/vite@3.2.4_@types+node@18.11.9/node_modules/vite/dist/node/index.js";
import mdx from "file:///C:/dev/namisa/node_modules/.pnpm/@mdx-js+rollup@2.1.5/node_modules/@mdx-js/rollup/index.js";
import react from "file:///C:/dev/namisa/node_modules/.pnpm/@vitejs+plugin-react@2.2.0_vite@3.2.4/node_modules/@vitejs/plugin-react/dist/index.mjs";
import dts from "file:///C:/dev/namisa/node_modules/.pnpm/vite-plugin-dts@1.7.1_vite@3.2.4/node_modules/vite-plugin-dts/dist/index.mjs";
var __vite_injected_original_dirname = "C:\\dev\\namisa";
var vite_config_default = defineConfig({
  plugins: [dts(), react(), mdx()],
  build: {
    lib: {
      entry: resolve(__vite_injected_original_dirname, "src/lib.ts"),
      name: "Namisa",
      fileName: "namisa",
      formats: ["es"]
    },
    rollupOptions: {
      external: ["react"]
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxkZXZcXFxcbmFtaXNhXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJDOlxcXFxkZXZcXFxcbmFtaXNhXFxcXHZpdGUuY29uZmlnLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9DOi9kZXYvbmFtaXNhL3ZpdGUuY29uZmlnLnRzXCI7aW1wb3J0IHsgcmVzb2x2ZSB9IGZyb20gXCJwYXRoXCJcbmltcG9ydCB7IGRlZmluZUNvbmZpZyB9IGZyb20gXCJ2aXRlXCJcbmltcG9ydCBtZHggZnJvbSBcIkBtZHgtanMvcm9sbHVwXCJcbmltcG9ydCByZWFjdCBmcm9tIFwiQHZpdGVqcy9wbHVnaW4tcmVhY3RcIlxuaW1wb3J0IGR0cyBmcm9tIFwidml0ZS1wbHVnaW4tZHRzXCJcblxuLy8gaHR0cHM6Ly92aXRlanMuZGV2L2NvbmZpZy9cbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZyh7XG4gICAgcGx1Z2luczogW2R0cygpLCByZWFjdCgpLCBtZHgoKV0sXG4gICAgYnVpbGQ6IHtcbiAgICAgICAgbGliOiB7XG4gICAgICAgICAgICBlbnRyeTogcmVzb2x2ZShfX2Rpcm5hbWUsIFwic3JjL2xpYi50c1wiKSxcbiAgICAgICAgICAgIG5hbWU6IFwiTmFtaXNhXCIsXG4gICAgICAgICAgICBmaWxlTmFtZTogXCJuYW1pc2FcIixcbiAgICAgICAgICAgIGZvcm1hdHM6IFtcImVzXCJdLFxuICAgICAgICB9LFxuICAgICAgICByb2xsdXBPcHRpb25zOiB7XG4gICAgICAgICAgICBleHRlcm5hbDogW1wicmVhY3RcIl0sXG4gICAgICAgIH0sXG4gICAgfSxcbn0pXG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQStOLFNBQVMsZUFBZTtBQUN2UCxTQUFTLG9CQUFvQjtBQUM3QixPQUFPLFNBQVM7QUFDaEIsT0FBTyxXQUFXO0FBQ2xCLE9BQU8sU0FBUztBQUpoQixJQUFNLG1DQUFtQztBQU96QyxJQUFPLHNCQUFRLGFBQWE7QUFBQSxFQUN4QixTQUFTLENBQUMsSUFBSSxHQUFHLE1BQU0sR0FBRyxJQUFJLENBQUM7QUFBQSxFQUMvQixPQUFPO0FBQUEsSUFDSCxLQUFLO0FBQUEsTUFDRCxPQUFPLFFBQVEsa0NBQVcsWUFBWTtBQUFBLE1BQ3RDLE1BQU07QUFBQSxNQUNOLFVBQVU7QUFBQSxNQUNWLFNBQVMsQ0FBQyxJQUFJO0FBQUEsSUFDbEI7QUFBQSxJQUNBLGVBQWU7QUFBQSxNQUNYLFVBQVUsQ0FBQyxPQUFPO0FBQUEsSUFDdEI7QUFBQSxFQUNKO0FBQ0osQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K
