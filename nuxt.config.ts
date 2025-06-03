// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-05-15",
  devtools: { enabled: true },
  build: {
    transpile: ["vuetify"],
  },
  modules: [
    "@nuxtjs/google-fonts",
    "@nuxt/icon",
    "@nuxt/image",
  ],
  css: ["vuetify/styles", "@mdi/font/css/materialdesignicons.min.css"],
});
