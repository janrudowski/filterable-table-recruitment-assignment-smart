import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "node:path";
import viteTsconfigPaths from "vite-tsconfig-paths";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), viteTsconfigPaths()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  base: "./",
  server: {
    port: 3000,
  },
  test: {
    globals: true,
    environment: "jsdom",
    exclude: ["**/node_modules/**", "**/e2e/**"],
    coverage: {
      include: ["src/**"],
    },
  },
});
