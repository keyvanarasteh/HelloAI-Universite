import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

function resolveBase(targetUrl = "") {
  if (!targetUrl) return "/";
  try {
    const pathname = new URL(targetUrl).pathname;
    if (!pathname || pathname === "/") return "/";
    return pathname.endsWith("/") ? pathname : `${pathname}/`;
  } catch {
    return "/";
  }
}

export default defineConfig({
  plugins: [react()],
  base: resolveBase(process.env.VITE_TARGET_WEBSITE_URL || process.env.TARGET_WEBSITE_URL),
});
