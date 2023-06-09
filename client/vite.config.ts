import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import electronPlugin from "vite-plugin-electron-renderer";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), electronPlugin()],
});
