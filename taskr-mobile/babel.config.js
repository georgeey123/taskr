module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      [
        "module-resolver",
        {
          alias: {
            "@": "./src",
          },
          extensions: [".js", ".ts", ".tsx", ".json"],
        },
      ],
      require.resolve("expo-router/babel"),
      "nativewind/babel",
    ],
  };
};
