// https://nuxt.com/docs/api/configuration/nuxt-config
import type { NuxtConfig } from 'nuxt/schema'
import Aura from '@primevue/themes/aura'

export default defineNuxtConfig({
  modules: [
    "nuxt-security",
    "@nuxtjs/tailwindcss",
    [
      '@pinia/nuxt',
      {
        autoImports: ['defineStore', 'acceptHMRUpdate'],
      }
    ],
    '@primevue/nuxt-module',
    // [
    //   // 'nuxt-sass-resources-loader',
    //   {
    //     resources: ['@/assets/scss/theme.scss']
    //   }
    // ]
  ],
  vite: {
    server: {
      hmr: {
        protocol: "ws",
        host: "localhost",
        port: 3100,
      },
    },
    build: {
      rollupOptions: {
        // external: ['js-cookie']
      }
    }
  },

  // meta: {
  //   style: [
  //     '@/assets/scss/theme.scss',
  //   ]
  // },


  app: {
    head: {
      link: [
        { rel: "icon", type: "image/webp", href: "/logo.png" },
        { rel: "apple-touch-icon", type: "image/webp", href: "/logo.png" },
      ],
    },
    // pageTransition: {
    //   name: "fade",
    //   mode: "out-in"
    // },
    // layoutTransition: {
    //   name: "slide",
    //   mode: "out-in",
    // },
  },

  routeRules: {
    "/admin": { redirect: "/" },
  },

  imports: {
    dirs: ['stores']
  },

  runtimeConfig: {
    public: {
      apiURL: '' as string,
      port: 3000 as number,
    },
  },

  build: {
    transpile: ['vue-sonner']
  },

  // @ts-ignore - nuxt-security module types
  security: {
    enabled: false,
    headers: {
      referrerPolicy: 'strict-origin-when-cross-origin',
      xFrameOptions: 'SAMEORIGIN',
    },
  },

  primevue: {
    options: {
      theme: {
        preset: Aura,
        options: {
          prefix: 'p',
          darkModeSelector: '.p-dark',
          cssLayer: false
        }
      },
      ripple: true,
    },
    components: {
      prefix: '',
      exclude: []
    }
  },

  tailwindcss: {
    cssPath: [
      '@/assets/css/tailwind.css',
      { injectPosition: 'first' }
    ],
    configPath: 'tailwind.config',
    exposeConfig: {
      level: 2,
    },
    config: {},
    viewer: true,
  },

  css: [
    "@/assets/fonts/font-awesome/all.css",
    "@/assets/fonts/mdi/materialdesignicons.scss",
    "@/assets/scss/theme.scss",
    "primeicons/primeicons.css",
    "@/assets/css/fonts.css",
  ],

  ssr: false,
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true }
})