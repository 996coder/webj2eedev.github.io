module.exports = {
    // 站点配置
    lang: 'zh-CN',
    title: '鸽王的窝🕊️👑',
    description: '专注技术分享：AI、前端、后端、算法、设计模式、数学等',

    // 主题和它的配置
    theme: '@vuepress/theme-default',
    themeConfig: {
        repo: 'webj2eedev',

        // 添加导航栏
        navbar: [
            { text: '主页', link: '/' },
            { text: '动态', link: '/latest/' },
            { text: 'AI', link: '/ai/' },
            { text: '前端', link: '/frontend/' },
            {
                text: '后端',
                children: [
                    {
                        text: '环境', children: [
                            { text: 'IDEA激活', link: '/backend/envs/LatestActivateIDEA' },
                        ]
                    },]
            },
            { text: '算法', link: '/algorithm/' },
            { text: '架构', link: '/architect/' },
            {
                text: '在线工具',
                children: [
                    { text: '图片转Base64', link: '/onlinetools/image2base64' },
                    { text: 'HTML实体字符转换', link: '/onlinetools/htmlentityconverter' },

                ]
            },
        ],
        sidebar: [
            // SidebarItem
            {
                text: 'AI',
                link: '/ai/',
                children: [
                    // SidebarItem
                    {
                        text: '机器学习',
                        children: [
                            {
                                text: '基础',
                                children: [
                                    {
                                        text: 'CUDA 是什么？',
                                        link: '/ai/machinelearning/cuda',
                                        children: [],
                                    },
                                    {
                                        text: 'cuDNN 是什么？',
                                        link: '/ai/machinelearning/cudnn',
                                        children: [],
                                    },
                                    {
                                        text: 'MNIST数据集',
                                        link: '/ai/machinelearning/mnist',
                                        children: [],
                                    },
                                ],
                            },
                        ],
                    },
                ],
            },
            {
                text: '后端',
                children: [
                    {
                        text: '环境', children: [
                            { text: 'IDEA激活', link: '/backend/envs/LatestActivateIDEA' },
                        ]
                    },
                ]
            },
            {
                text: '在线工具',
                children: [
                    { text: '图片转Base64', link: '/onlinetools/image2base64' },
                    { text: 'HTML实体字符转换', link: '/onlinetools/htmlentityconverter' },
                ]
            },
        ],
    },

    // 通用配置
    dest: `docs`,

    // Dev配置项
    port: 8282
}