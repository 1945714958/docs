import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "My Awesome Project",
  description: "A VitePress Site",
  base: "/docs/",
  outDir:"docs",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '我的', link: '/' },
      { text: '测试', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        text: 'SEO',
        items: [
          { text: 'SEO', link: '/web/seo' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
