import { navbar } from "vuepress-theme-hope";

export const enNavbarConfig = navbar([
  "/",
  {
    text: "About Me",
    children: [{ text: "About Me", icon: "info", link: "/en/about-me" }],
  },
]);
