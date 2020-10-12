module.exports = {
    title: 'Z UI',
    theme: 'reco',
    themeConfig: {
        nav: [
            { text: '主页', link: '/' },
            { text: '文档', link: '/guide/' },
            { text: '交流', link: 'https://www.google.com/' },
        ],
        sidebar: [
            '/install/',
            '/get-started/',
            {
                title: '组件',
                children: ['/components/button']
            }
        ]
    }
}