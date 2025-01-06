import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import commonjs from "vite-plugin-commonjs";
import viteImagemin from "@vheemstra/vite-plugin-imagemin";
import imageminMozjpeg from "imagemin-mozjpeg";
import imageminWebp from "imagemin-webp";
import imageminPngquant from "imagemin-pngquant";

export default defineConfig({
  plugins: [
    react(),
    commonjs(),
    viteImagemin({
      verbose: true,
      onlyAssets: true,
      plugins: {
        jpg: imageminMozjpeg({ quality: 100 }),
        png: imageminPngquant({ quality: [0.2, 0.8], strip: true, speed: 6 }),
      },
      makeWebp: {
        skipIfLargerThan: "smallest",
        plugins: {
          jpg: imageminWebp({
            preset: "photo",
            quality: 95,
            method: 6,
            lossless: true | 9,
          }),
          png: imageminWebp({
            preset: "photo",
            quality: 95,
            method: 6,
            lossless: true | 9,
          }),
        },
      },
    }),
  ],
  base: "/",
  define: {
    global: {},
  },
});
