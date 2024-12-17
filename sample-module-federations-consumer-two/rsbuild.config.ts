import { defineConfig } from "@rsbuild/core";
import { pluginReact } from "@rsbuild/plugin-react";
import { pluginModuleFederation } from "@module-federation/rsbuild-plugin";

export default defineConfig({
  plugins: [
    pluginReact(),
    pluginModuleFederation({
      name: "consumer_two",
      exposes: {
        "./consumer-two-screens": "./src/screens/index.ts",
      },
      remotes: {
        federation_provider:
          "federation_provider@http://localhost:3000/mf-manifest.json",
      },
      shared: ["react", "react-dom"],
    }),
  ],
  server: {
    port: 3002,
  },
});
