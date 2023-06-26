import { navbar } from "vuepress-theme-hope";

export const enNavbarConfig = navbar([
  "/",
  {
    text: "Article",
    icon: "article",
    children: [
      {
        text: "Recursion",
        link: "/en/article/recursion",
      },
    ],
  },
  {
    text: "About Me",
    icon: "profile",
    children: [
      { text: "About Me", icon: "info", link: "/en/about-me/intro" },
      {
        text: "Contact Me",
        icon: "community",
        link: "/en/about-me/contact",
      },
      {
        text: "Notice",
        icon: "notice",
        link: "/en/about-me/notice",
      },
    ],
  },
]);
