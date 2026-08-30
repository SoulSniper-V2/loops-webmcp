import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

const headers = {
  "Origin-Agent-Cluster": "?1",
  "Permissions-Policy": "tools=(self)",
};

export default defineConfig({
  plugins: [react()],
  server: { headers, host: true, port: 5173 },
  preview: { headers, host: true, port: 4173 },
});
