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
      {
        text: "Sort Algorithm",
        link: "/en/article/sort-algorithm",
      },
      {
        text: "Stack and Queue & DFS and BFS",
        link: "/en/article/dfs-and-bfs",
      },
      {
        text: "Graph",
        link: "/en/article/graph",
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
