module.exports = {
  lintOnSave: false,
  configureWebpack: {
    resolve: {
      alias: {
        assets: "@/assets",
        network: "@/network",
        common: "@/common",
        components: "@/components",
        views: "@/views",
        data: "@/data",
      },
    },
  },
};
