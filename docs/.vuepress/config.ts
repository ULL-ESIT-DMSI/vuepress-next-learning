import { defineUserConfig } from 'vuepress'
import { defaultTheme, } from '@vuepress/theme-default'
import { searchPlugin } from '@vuepress/plugin-search'
import { registerComponentsPlugin } from '@vuepress/plugin-register-components'
import * as path from 'path'

/*
const navBar2 = [
  // NavbarItem
  {
    text: 'Resources',
    link: '/pages/resources',
  },
  // NavbarGroup
  {
    text: 'Group',
    children: ['/group/foo.md', '/group/bar.md'],
  },
  // string - page file path
  '/bar/README.md',
]
*/

import { navigationBar } from './navigation-bar'

export default defineUserConfig({
  lang: 'en-US',
  title: 'Hello DMSI',
  description: 'Just playing around',
  base: '/vuepress-next-learning/',
  plugins: [ 
    registerComponentsPlugin({
      componentsDir: path.resolve(__dirname, './components'),
      }),
    searchPlugin({
      // options for @vuepress/plugin-search
    }),
  ],
  theme: defaultTheme({
    // set config here
    logo: 'https://vuejs.org/images/logo.png',
    colorMode: 'light',
    navbar: navigationBar
    })
  })