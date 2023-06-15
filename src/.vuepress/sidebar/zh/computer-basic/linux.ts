import { arraySidebar } from "vuepress-theme-hope";

export const linux = arraySidebar([
  "",
  {
    text: "简介",
    icon: "infofill",
    collapsible: false,
    prefix: "intro/",
    children: ["intro", "history", "language", "advantage", "desktop"],
  },
  {
    text: "文件结构",
    icon: "file",
    collapsible: false,
    prefix: "file/",
    children: ["file", "dir", "mount"],
  },
  {
    text: "命令",
    icon: "program",
    collapsible: false,
    prefix: "command/",
    children: ["command", "dir", "file", "other", "add", "excu", "path"],
  },
  {
    text: "ubuntu",
    icon: "ubuntu",
    collapsible: false,
    prefix: "ubuntu/",
    children: ["manage", "debug", "webserver", "lang"],
  },
  "centos",
  "WSL",
  "ssh",
]);
