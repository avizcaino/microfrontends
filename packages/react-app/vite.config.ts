import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
  server: {
    host: process.env.VITE_HOST,
    port: (process.env.VITE_PORT as unknown as number) || 8001,
  },
  plugins: [react()],
});
