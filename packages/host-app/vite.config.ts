import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
  server: {
    host: process.env.VITE_HOST,
    proxy: {
      "/react-app": {
        target: "http://localhost:8001",
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace("/react-app", ""),
      },
      "/ce-app": {
        target: "http://localhost:8002",
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace("/ce-app", ""),
      },
      "/vue-app": {
        target: "http://localhost:8003",
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace("/vue-app", ""),
      },
    },
  },
  plugins: [react()],
  build: {
    minify: false,
  },
});
