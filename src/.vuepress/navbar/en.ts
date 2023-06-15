import { navbar } from "vuepress-theme-hope";

export const enNavbarConfig = navbar([
  "/en",
  {
    text: "About Me",
    children: [{ text: "About Me", icon: "info", link: "/en/about-me" }],
  },
]);
