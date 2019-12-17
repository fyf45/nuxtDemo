module.exports = {
  /*
   ** Headers of the page
   */
  head: {
    title: 'web-nuxt',
    meta: [{
        charset: 'utf-8'
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1'
      },
      {
        hid: 'description',
        name: 'description',
        content: 'Nuxt.js project'
      }
    ],
    link: [{
      rel: 'icon',
      type: 'image/x-icon',
      href: '/favicon.ico'
    }],
    script: [{
      src: "/js/flexible.js",
      type: "text/javascript",
      charset: "utf-8"
    }],
    css: ["~assets/style/common.css"]
  },

  /*
   ** Customize the progress bar color
   */
  loading: {
    color: '#3B8070'
  },
  router: {
    middleware: 'middleware'
  },
  /*
   ** Build configuration
   */
  build: {
    /*
     ** Run ESLint on save
     */
    extend(config, {
      isDev,
      isClient
    }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    },
    postcss: [
      require("postcss-pxtorem")({
        rootValue: 100,
        replace: true,
        propList: ['*','!font-size']
      })
    ],
    verdor: ["axios"]
  }
}
