import { defineUserConfig } from 'vuepress'

import { defaultTheme } from '@vuepress/theme-default'

export default defineUserConfig({
  lang: 'en-US',
  title: 'Hello DMSI',
  description: 'Just playing around',
  base: '/vuepress-next-learning/',
  plugins: [ 

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