module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      "nativewind/babel",
      "expo-router/babel",
      [
        "module-resolver",
        {
          extensions: [".ts", ".tsx", ".jsx", ".js", ".json"],
          alias: {
            app: "./app/",
            assets: "./assets/",
          },
        },
      ],
      [
        "module:react-native-dotenv",
        {
          moduleName: "env",
          path: ".env",
          blacklist: null,
          whitelist: null,
          safe: true,
          allowUndefined: true,
        },
      ],
      "react-native-reanimated/plugin",
    ],
  };
};
