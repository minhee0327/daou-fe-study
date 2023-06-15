// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({

  // devtools: { enabled: true }
  //   generate: {
  //       fallback: true
  //   }
  app: {
    head: {
      title: '성호&민희',
      meta: [
        { name: 'description', content: 'Everything about Nuxt 3' }
      ],
      link: [
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/icon?family=Material+Icons' }
      ]
    }
  },
  modules: ['@nuxtjs/tailwindcss']
})
