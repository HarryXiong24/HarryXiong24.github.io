import { arraySidebar } from "vuepress-theme-hope";

export const windows = arraySidebar([
  {
    text: "Windows",
    icon: "windows",
    collapsible: false,
    children: ["", "shortcutKey", "addPath", "cmd"],
  },
]);
