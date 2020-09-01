module.exports = {
  publicPath: process.env.NODE_ENV === "production" ? "/mvuecss/" : "/",
  css: {
    loaderOptions: {
      sass: {
        prependData: `@import "@/mvuecss/styles/_breakpoints.scss";`,
      },
    },
  },
};
