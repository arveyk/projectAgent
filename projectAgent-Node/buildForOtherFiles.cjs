const { build } = require("esbuild");

const fileToBuild = "databaseQuery-benchmark";
build({
  entryPoints: [`src/bin/${fileToBuild}.ts`],
  bundle: true,
  //minify: true,
  treeShaking: true,
  platform: "node",
  outfile: `dist/bin/${fileToBuild}.cjs`,
  sourcemap: true,
  //format: "esm",
});
