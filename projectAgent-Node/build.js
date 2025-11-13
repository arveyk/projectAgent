import { build } from "esbuild";

build({
    entryPoints: ["src/lambda.ts"],
    bundle: true,
    minify: true,
    treeShaking: true,
    platform: 'node',
    outfile: "dist/lambda.cjs",
});
