// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  content: {
    highlight: {
      theme: 'material-theme-palenight'
    },
  },
  modules: ['@nuxt/content', "@nuxt/image", "@nuxtjs/tailwindcss", "nuxt-icon"]
})