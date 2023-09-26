module.exports = {
  presets: ["module:metro-react-native-babel-preset"],
  plugins: [
    [
      "module-resolver",
      {
        root: ["./src"],
        alias: [
          { "@shared-components": "./src/shared/components" },
          { "@shared-constants": "./src/shared/constants" },
          { "@hooks": "./src/hooks" },
          { "@colors": "./src/shared/constants/colors" },
          { "@fonts": "./src/shared/theme/fonts" },
          { "@services": "./src/services" },
          { "@screens": "./src/screens" },
          { "@utils": "./src/utils" },
          { "@assets": "./src/assets" },
          { "@lib": "./src/lib" },
          { "@app-theme": "./src/shared/theme" },
          { "@local-storage": "./src/utils/storage" },
          { "@types": "./src/@types" },
          { "@app-navigation": "./src/navigation" },
          { "@app": "./src" },
        ],
        extensions: [".js", ".jsx", ".ts", ".tsx"],
      },
    ],
    "react-native-paper/babel",
    "react-native-reanimated/plugin",
    [
      "module:react-native-dotenv",
      {
        envName: "APP_ENV",
        moduleName: "@env",
        path: ".env",
        allowlist: ["APP_BASE_URL"],
        safe: false,
        blocklist: null,
      },
    ],
  ],
};
