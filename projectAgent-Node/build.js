import { build } from "esbuild";

build({
    entryPoints: ["src/index.ts"],
    bundle: true,
    minify: true,
    treeShaking: true,
    platform: 'node',
    outfile: "dist/index.cjs",
});
