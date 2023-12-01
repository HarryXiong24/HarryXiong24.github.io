import { hopeTheme } from "vuepress-theme-hope";

import { enNavbarConfig } from "./navbar/en.js";
import { zhNavbarConfig } from "./navbar/zh.js";
import { enSidebarConfig } from "./sidebar/en/index.js";
import { zhSidebarConfig } from "./sidebar/zh/index.js";

export default hopeTheme(
  {
    hostname: "https://harryxiong24.github.io",
    author: {
      name: "Harry Xiong",
      url: "https://harryxiong24.github.io",
    },

    favicon: "/favicon.ico",
    iconAssets: "//at.alicdn.com/t/font_2410206_vuzkjonf4s9.css",
    logo: "/logo.png",

    repo: "https://github.com/HarryXiong24/HarryXiong24.github.io",
    repoDisplay: true,
    docsDir: "src",

    navbarLayout: {
      start: ["Brand"],
      center: ["Links"],
      end: [
        // "Search",
        "Language",
        "Outlook",
        "Repo",
      ],
    },

    locales: {
      "/": {
        navbar: enNavbarConfig,
        sidebar: enSidebarConfig,

        footer: "",
        copyright: "",

        blog: {
          description: "A piano player playing on the keyboard",
          intro: "/en/about-me/info",
          medias: {
            GitHub: "https://github.com/HarryXiong24",
            Gmail: "mailto:harryxiong24@gmail.com",
            Instagram: "https://www.instagram.com/harryxiong24",
            // Twitter: "https://twitter.com/HarryXiong24",
            // Weibo: "https://weibo.com/harryxiong24",
            BiliBili: "https://space.bilibili.com/381730331",
            Linkedin: "https://www.linkedin.com/in/haoweixiong/",
          },
        },
      },

      "/zh/": {
        navbar: zhNavbarConfig,
        sidebar: zhSidebarConfig,

        footer: "",
        copyright: "",

        blog: {
          description: "A piano player playing on the keyboard",
          intro: "/zh/about-me/info",
          medias: {
            GitHub: "https://github.com/HarryXiong24",
            Gmail: "mailto:harryxiong24@gmail.com",
            Instagram: "https://www.instagram.com/harryxiong24",
            // Twitter: "https://twitter.com/HarryXiong24",
            // Weibo: "https://weibo.com/harryxiong24",
            BiliBili: "https://space.bilibili.com/381730331",
            Linkedin: "https://www.linkedin.com/in/haoweixiong/",
          },
        },
      },
    },

    displayFooter: true,
    copyright: "Copyright © 2021-present Harry Xiong",
    fullscreen: true,

    plugins: {
      blog: {
        excerptLength: 0,
      },

      comment: {},

      feed: {
        atom: true,
        json: true,
        rss: true,
      },

      mdEnhance: {
        align: true,
        codetabs: true,
        demo: true,
        flowchart: true,
        footnote: true,
        imgLazyload: true,
        imgMark: true,
        imgSize: true,
        mathjax: true,
        mermaid: true,
        presentation: true,
        sub: true,
        sup: true,
        vPre: true,
      },

      // pwa: {
      //   themeColor: "#5c92d1",
      //   cacheHTML: false,
      //   maxSize: 3072,
      //   apple: {
      //     icon: "/assets/icon/apple-touch-icon.png",
      //     statusBarColor: "white",
      //   },
      //   msTile: {
      //     image: "/assets/icon/ms-icon-144.png",
      //     color: "#ffffff",
      //   },
      //   manifest: {
      //     name: "Harry Xiong 个人博客",
      //     short_name: "Harry Xiong Blog",
      //     description: "Harry Xiong 的个人博客",
      //     theme_color: "#5c92d1",
      //     icons: [
      //       {
      //         src: "/assets/icon/chrome-192.png",
      //         sizes: "192x192",
      //         type: "image/png",
      //       },
      //       {
      //         src: "/assets/icon/chrome-512.png",
      //         sizes: "512x512",
      //         type: "image/png",
      //       },
      //       {
      //         src: "/assets/icon/chrome-mask-192.png",
      //         sizes: "192x192",
      //         purpose: "maskable",
      //         type: "image/png",
      //       },
      //       {
      //         src: "/assets/icon/chrome-mask-512.png",
      //         sizes: "512x512",
      //         purpose: "maskable",
      //         type: "image/png",
      //       },
      //     ],
      //     shortcuts: [
      //       {
      //         name: "分类",
      //         short_name: "分类",
      //         icons: [
      //           {
      //             src: "/assets/icon/category-maskable.png",
      //             sizes: "192x192",
      //             purpose: "maskable",
      //             type: "image/png",
      //           },
      //         ],
      //         url: "/category/",
      //         description: "文章分类分组",
      //       },
      //       {
      //         name: "标签",
      //         short_name: "标签",
      //         icons: [
      //           {
      //             src: "/assets/icon/tag-maskable.png",
      //             sizes: "192x192",
      //             purpose: "maskable",
      //             type: "image/png",
      //           },
      //         ],
      //         url: "/tag/",
      //         description: "文章标签分组",
      //       },
      //       {
      //         name: "时间线",
      //         short_name: "时间线",
      //         icons: [
      //           {
      //             src: "/assets/icon/timeline-maskable.png",
      //             sizes: "192x192",
      //             purpose: "maskable",
      //             type: "image/png",
      //           },
      //         ],
      //         url: "/timeline/",
      //         description: "时间线文章列表",
      //       },
      //       {
      //         name: "个人介绍",
      //         short_name: "个人介绍",
      //         icons: [
      //           {
      //             src: "/assets/icon/about-maskable.png",
      //             sizes: "192x192",
      //             purpose: "maskable",
      //             type: "image/png",
      //           },
      //         ],
      //         url: "/about/",
      //         description: "个人介绍",
      //       },
      //     ],
      //   },
      // },
    },
  },
  false
);
