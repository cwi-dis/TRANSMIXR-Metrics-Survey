import { defineConfig } from "vite";
import { svelte } from "@sveltejs/vite-plugin-svelte";

// https://vitejs.dev/config/
// export default defineConfig({
//   // base: '/TRANSMIXR-Metrics-Survey/',

//   base: process.env.NODE_ENV === 'production' ? '/TRANSMIXR-Metrics-Survey/' : '/',
//   plugins: [svelte()],
// });


export default defineConfig({
  plugins: [svelte()],
  base: '/TRANSMIXR-Metrics-Survey/'  // <-- set this to your repo name
});

