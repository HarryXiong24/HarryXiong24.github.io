import { arraySidebar } from "vuepress-theme-hope";

export const poem = arraySidebar([
  "",
  {
    text: "诗集",
    icon: "flower",
    collapsible: false,
    prefix: "my-poem/",
    children: ["蒲公", "萤火", "我十七", "收录第一次填词"],
  },
  {
    text: "随写",
    icon: "flower",
    collapsible: false,
    prefix: "essay/",
    children: ["致毕业"],
  },
]);
