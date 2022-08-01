import { defineConfig } from "tsup";

export default defineConfig({
  entryPoints: ["src/index.tsx"],
  format: ["cjs", "esm"],
  dts: true,
  external: ["react", "react-dom"],
  clean: true,
  inject: ["./react-shim.ts"],
  sourcemap: true,
});
