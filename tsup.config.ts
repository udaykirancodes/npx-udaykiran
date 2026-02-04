import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/index.ts"],
  outDir: "dist",
  format: ["esm"],
  platform: "node",
  target: "node18",
  dts: false, // CLIs don’t need types
  clean: true,
  sourcemap: false,
});
