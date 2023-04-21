import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// const proxy = httpProxy.createProxyServer();

// const proxyServer = (): PluginOption => ({
//   name: "configure-server",
//   apply: "serve",
//   configureServer(server) {
//     server.middlewares.use((req, res, next) => {
//       next();
//       // if (req.url && req.url.indexOf("/vue-app") > -1) {
//       //   req.url = req.url.replace("/vue-app", "");
//       //   proxy.web(req, res, { target: "http://localhost:8003" });
//       // }
//       // //req.url = req.url.replace("/vue-app", "");
//       // else next();
//     });
//   },
// });

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
