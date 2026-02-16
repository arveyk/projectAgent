const { build } = require("esbuild");

build({
  entryPoints: ["src/index.ts"],
  bundle: true,
  //minify: true,
  treeShaking: true,
  platform: "node",
  outfile: "dist/index.cjs",
  sourcemap: true,
  //format: "esm",
});
