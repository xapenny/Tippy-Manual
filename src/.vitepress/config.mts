import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: 'zh-CN',
  title: "ティピィTippy Bot",
  description: "TippyBot",
  lastUpdated: true,
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }]
  ],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: '/logo.png',
    nav: [
      { text: '主页', link: '/' },
      { text: '文档', link: '/docs/manual' }
    ],

    sidebar: [
      {
        text: 'Tippy Bot 文档',
        items: [
          { text: '使用说明', link: '/docs/manual' },
          { text: '更新日志', link: '/docs/changelog' },
          { text: '关于', link: '/docs/about' }
        ]
      },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/xapenny/Tippy-Manual' }
    ],

    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2021-present xapenny'
    },

    lastUpdated: {
      text: '最后更新于',
      formatOptions: {
        dateStyle: 'full',
        timeStyle: 'medium'
      }
    },

    search: {
      provider: 'local'
    },

    docFooter: {
      prev: '上一篇',
      next: '下一篇'
    },

    darkModeSwitchLabel: '外观',

    returnToTopLabel: '返回顶部',

    sidebarMenuLabel: '菜单',

    outline: {
      label: '本页目录'
    }

  }
})
