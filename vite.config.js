import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import commonjs from "vite-plugin-commonjs";
import viteImagemin from "@vheemstra/vite-plugin-imagemin";
import imageminGifsicle from "imagemin-gifsicle";
import imageminMozjpeg from "imagemin-mozjpeg";
import imageminOptipng from "imagemin-optipng";
import imageminWebp from "imagemin-webp";

export default defineConfig({
  plugins: [
    react(),
    commonjs(),
    viteImagemin({
      verbose: true,
      onlyAssets: true,
      plugins: {
        jpg: imageminMozjpeg({ quality: 95 }),
        png: imageminOptipng({
          optimizationLevel: 7,
          bitDepthReduction: false,
          colorTypeReduction: true,
          paletteReduction: false,
        }),
      },
      makeWebp: {
        skipIfLargerThan: "optimized",
        plugins: {
          jpg: imageminWebp({ preset: "photo", quality: 95, method: 6 }),
          png: imageminWebp(),
        },
      },
    }),
  ],
  base: "/",
  define: {
    global: {},
  },
});
