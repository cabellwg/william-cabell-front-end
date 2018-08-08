module.exports = {
  configureWebpack: {
    module: {
      rules: [
        {
          test: /\.(pdf)$/,
          use: [
            {
              loader: "file-loader",
              options: {}
            }
          ]
        }
      ]
    }
  },
  outputDir: "../flask-app/templates",
  assetsDir: "../static/client-app"
};
