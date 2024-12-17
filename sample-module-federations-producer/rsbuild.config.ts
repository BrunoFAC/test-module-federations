import { defineConfig } from "@rsbuild/core";
import { pluginReact } from "@rsbuild/plugin-react";
import { pluginModuleFederation } from "@module-federation/rsbuild-plugin";

export default defineConfig({
  plugins: [
    pluginReact(),
    pluginModuleFederation({
      name: "producer",

      exposes: {
        "./button": "./src/button.tsx",
      },
      remotes: {
        consumer_two: "consumer_two@http://localhost:3002/mf-manifest.json",
      },

      shared: ["react", "react-dom"],
    }),
  ],
  server: {
    port: 3000,
  },
});
