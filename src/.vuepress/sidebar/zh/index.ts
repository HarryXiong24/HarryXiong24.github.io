import { sidebar } from "vuepress-theme-hope";
import { poem } from "./poem/poem.js";
import { frontend } from "./front-end/index.js";
import { backend } from "./back-end/index.js";
import { computer_basic } from "./computer-basic/index.js";
import { git } from "./git.js";
import { python } from "./python.js";
import { vscode } from "./vscode.js";

export const zhSidebarConfig = sidebar({
  "/zh/about-me/": ["intro", "contact"],
  "/zh/poem/": poem,
  ...frontend,
  ...backend,
  ...computer_basic,
  "/zh/python": python,
  "/zh/markdown": ["markdown"],
  "/zh/git": git,
  "/zh/vscode": vscode,
});
