import { sidebar } from "vuepress-theme-hope";

export const enSidebarConfig = sidebar({
  "/en/note/": [""],

  "/en/code/": [""],

  "/en/about/": ["", "site"],

  // fallback
  "/en/": ["", "code/", "about/"],
});
