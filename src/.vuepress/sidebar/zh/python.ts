import { arraySidebar } from "vuepress-theme-hope";

export const python = arraySidebar([
  "",
  "intro",
  "install",
  "interpreter",
  {
    text: "基础教程",
    icon: "creative",
    collapsible: false,
    prefix: "guide/",
    children: [
      "write",
      "io",
      "basic",
      "string",
      "listAndTuple",
      "condition",
      "loop",
      "dictAndSet",
    ],
  },
  {
    text: "函数",
    icon: "function",
    collapsible: false,
    prefix: "function/",
    children: ["intro", "define", "call", "argument", "recursive"],
  },
  {
    text: "高级语法",
    icon: "advance",
    collapsible: false,
    prefix: "advance/",
    children: [
      "slice",
      "iteration",
      "list-comprehensions",
      "generator",
      "iterator",
    ],
  },
  {
    text: "函数式编程",
    icon: "function",
    collapsible: false,
    prefix: "functional-programming/",
    children: [
      "",
      {
        text: "高阶函数",
        icon: "function",
        collapsible: false,
        prefix: "high-order-function/",
        children: ["intro", "map-and-reduce", "filter", "sorted"],
      },
    ],
  },
]);
