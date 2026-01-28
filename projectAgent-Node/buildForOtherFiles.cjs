const { build } = require("esbuild");

build({
  entryPoints: ["src/bin/postMessageSlack.ts"],
  bundle: true,
  //minify: true,
  treeShaking: true,
  platform: "node",
  outfile: "dist/bin/postMessageSlack.cjs",
  sourcemap: true,
  //format: "esm",
});
