module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      [
        "module-resolver",
        {
          extensions: [".ts", ".tsx", ".jsx", ".js", ".json"],
          root: ["."],
          alias: {
            assets: "./src/assets",
            components: "./src/components",
            contexts: "./src/contexts",
            data: "./src/data",
            hooks: "./src/hooks",
            navigation: "./src/navigation",
            screens: "./src/screens",
            providers: "./src/providers",
            supabase: "./src/supabase",
            services: "./src/services",
            config: "./src/config",
          },
        },
      ],
      ["nativewind/babel"],
    ],
  };
};
