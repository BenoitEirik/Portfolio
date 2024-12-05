// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxt/content',
    '@nuxt/fonts',
    '@nuxt/icon',
    '@nuxtjs/sitemap',
    '@nuxtjs/robots',
    'nuxt-seo-utils',
    'nuxt-og-image'
  ],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          api: 'modern',
        },
      },
    },
  },
  app: {
    pageTransition: { name: 'page', mode: 'out-in' },
    head: {
      titleTemplate: '%s - olafsergent.fr',
      htmlAttrs: {
        lang: 'fr'
      },
      link: [
        {
          rel: 'preload',
          as: 'image',
          href: '/images/wallpapers/TD1.jpg'
        }
      ]
    }
  },
  css: ['~/assets/scss/main.scss'],
  content: {
    experimental: {
      search: {
        indexed: true
      }
    }
  },
  robots: {
    groups: [
      {
        userAgent: '*',
        allow: '/',
        comment: 'Allow all other user agents to access the site'
      },
      {
        // From https://github.com/ai-robots-txt/ai.robots.txt/blob/main/robots.txt
        userAgent: [
          'AI2Bot', 'Ai2Bot-Dolma', 'Amazonbot', 'anthropic-ai', 'Applebot',
          'Applebot-Extended', 'Bytespider', 'CCBot', 'ChatGPT-User',
          'Claude-Web', 'ClaudeBot', 'cohere-ai', 'Diffbot', 'DuckAssistBot',
          'FacebookBot', 'facebookexternalhit', 'FriendlyCrawler', 'Google-Extended',
          'GoogleOther', 'GoogleOther-Image', 'GoogleOther-Video', 'GPTBot',
          'iaskspider/2.0', 'ICCCrawler', 'ImagesiftBot', 'img2dataset',
          'ISSCyberRiskCrawler', 'Kangaroo Bot', 'Meta-ExternalAgent',
          'Meta-ExternalFetcher', 'OAI-SearchBot', 'omgili', 'omgilibot',
          'PerplexityBot', 'PetalBot', 'Scrapy', 'Sidetrade indexer bot',
          'Timpibot', 'VelenPublicWebCrawler', 'Webzio-Extended', 'YouBot'
        ],
        disallow: ['/'],
        comment: 'Disallow AI bots and web crawlers from accessing the site'
      }
    ]
  },
  site: {
    url: 'https://olafsergent.fr',
    name: 'olafsergent.fr',
    description: 'Portfolio de Olaf-Marie Sergent',
    indexable: true
  }
})