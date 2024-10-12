import { defineUserConfig } from 'vuepress'
import { viteBundler } from '@vuepress/bundler-vite'
import { defaultTheme } from '@vuepress/theme-default'

export default defineUserConfig({
    bundler: viteBundler(),
    theme: defaultTheme({
        sidebarDepth: 2, // e'b将同时提取markdown中h2 和 h3 标题，显示在侧边栏上。
        lastUpdated: 'Last Updated', // 文档更新时间：每个文件git最后提交的时间
        navbar: [
            { text: 'HTML', link: '/guide/html.md' }, // 内部链接 以docs为根目录
            { text: 'CSS', link: '/guide/css.md' },
            { text: 'JavaScript', link: '/guide/javascript.md' },
            { text: 'Brower', link: '/guide/brower.md' },
            { text: 'Node', link: '/guide/node.md' },
            { text: 'HTTP', link: '/guide/http.md' },
            { text: '设计模式', link: '/guide/设计模式.md' },
            { text: 'Vue', link: '/guide/vue.md' },
            { text: '数据结构', link: '/guide/数据结构.md' },
            { text: '手写', link: '/guide/手写.md' },
            { text: '小程序', link: '/guide/小程序.md' },
            { text: '算法', link: '/guide/算法.md' },
        ],
        sidebar: [{
            text: 'HTML',
            link: '/guide/html.md',
        }, {
            text: 'CSS',
            link: '/guide/css.md',
        }, {
            text: 'JavaScript',
            link: '/guide/javascript.md',
        }, {
            text: 'Brower',
            link: '/guide/brower.md',
        }, {
            text: 'Node',
            link: '/guide/node.md',
        }, {
            text: 'HTTP',
            link: '/guide/http.md',
        }, {
            text: '设计模式',
            link: '/guide/设计模式.md',
        }, {
            text: 'Vue',
            link: '/guide/vue.md',
        }, {
            text: '数据结构与算法',
            link: '/guide/数据结构.md',
        }, {
            text: '手写',
            link: '/guide/手写.md',
        }, {
            text: '小程序',
            link: '/guide/小程序.md',
        }, {
            text: '算法',
            link: '/guide/算法.md',
        },]
    }),
    // 用户配置
    title: '龙龙的博客',
    description: 'Track my technical growth',
    // base: '/blog/',
    head: [
        ['link', { rel: 'icon', href: '/favicon.ico' }]
    ],
    // https://vercel.com/zyls-projects-4cc20fcd/blog/settings/environment-variables
    base:process.env.VERVEL_BASE_PATH || '/blog/'//VERVEL_BASE_PATH 变量为在vercel部署时，vercel后台生成的
    
})
