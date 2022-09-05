import { defineUserConfig } from 'vuepress'
import { defaultTheme } from '@vuepress/theme-default'
import { searchPlugin } from '@vuepress/plugin-search'

export default defineUserConfig({
  lang: 'en-US',
  title: 'Hello DMSI',
  description: 'Just playing around',
  base: '/vuepress-next-learning/',
  plugins: [ 
    searchPlugin({
      // options
    }),
  ],
  theme: defaultTheme({
    // set config here
    logo: 'https://vuejs.org/images/logo.png',
    colorMode: 'light',
    navbar: [
      // NavbarItem
      {
        text: 'Foo',
        link: '/foo/',
      },
      // NavbarGroup
      {
        text: 'Group',
        children: ['/group/foo.md', '/group/bar.md'],
      },
      // string - page file path
      '/bar/README.md',
    ],
  }),
})