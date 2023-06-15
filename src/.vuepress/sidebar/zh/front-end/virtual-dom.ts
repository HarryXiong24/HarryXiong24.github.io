import { arraySidebar } from "vuepress-theme-hope";

export const virtual_dom = arraySidebar([
  {
    text: "虚拟 DOM 与 Diff 算法",
    icon: "tree",
    collapsible: false,
    children: ["", "VirtualDOM", "DOMDiff"],
  },
]);
