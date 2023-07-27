// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  app: {
    head: {
      title: "Nuxt3 Realworld Example App",
      meta: [
        {
          name: "description",
          content: "Realworld Conduit was built by Nuxt3, Vue3, Quasar and etc",
        },
        {
          name: "keywords",
          content: "vuejs,nuxt,quasar,realworld,realworld-frontend,vue3,nuxt3",
        },
      ],
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
      link: [
        {
          rel: "stylesheet",
          href: "https://code.ionicframework.com/ionicons/2.0.1/css/ionicons.min.css",
        },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css?family=Titillium+Web:700|Source+Serif+Pro:400,700|Merriweather+Sans:400,700|Source+Sans+Pro:400,300,600,700,300italic,400italic,600italic,700italic ",
        },
      ],
    },
  },
  runtimeConfig: {
    public: {
      baseUrl: process.env.BASE_URL,
    },
  },
  css: ["@/assets/main.css"],
  components: {
    dirs: ["@/components/article"],
  },
});
