module.exports = {
    title: '龙龙的博客',
    description: 'Track my technical growth',
    base: '/blog/',
    head: [
        ['link', { rel: 'icon', href: '/favicon.ico' }]
    ],
    markdown: {
        lineNumbers: true // 代码块显示行号
    },
    plugins: [
        // 这是 VuePress 默认主题使用这个插件的方式
        [
            'vuepress-plugin-container',
            {
                type: 'tip',
                defaultTitle: {
                    '/': 'TIP',
                    '/zh/': '提示',
                },
            },
        ],
    ],
    themeConfig: {
        sidebarDepth: 2, // e'b将同时提取markdown中h2 和 h3 标题，显示在侧边栏上。
        lastUpdated: 'Last Updated', // 文档更新时间：每个文件git最后提交的时间
        nav: [
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
            title: 'HTML',
            path: '/guide/html.md',
        }, {
            title: 'CSS',
            path: '/guide/css.md',
        }, {
            title: 'JavaScript',
            path: '/guide/javascript.md',
        }, {
            title: 'Brower',
            path: '/guide/brower.md',
        }, {
            title: 'Node',
            path: '/guide/node.md',
        }, {
            title: 'HTTP',
            path: '/guide/http.md',
        }, {
            title: '设计模式',
            path: '/guide/设计模式.md',
        }, {
            title: 'Vue',
            path: '/guide/vue.md',
        }, {
            title: '数据结构与算法',
            path: '/guide/数据结构.md',
        }, {
            title: '手写',
            path: '/guide/手写.md',
        }, {
            title: '小程序',
            path: '/guide/小程序.md',
        }, {
            title: '算法',
            path: '/guide/算法.md',
        }, ]
    },

}