import { windows } from "./windows.js";
import { linux } from "./linux.js";

export const computer_basic = {
  "/zh/computer-basic": [
    {
      text: "计算机基础",
      children: [
        { text: "计算机基础", link: "/zh/computer-basic", icon: "computer" },
        {
          text: "信息安全理论与技术",
          link: "/zh/computer-basic/information-security/information-security",
          icon: "safe",
        },
      ],
    },
    {
      text: "OS",
      children: [
        {
          text: "Windows",
          link: "/zh/computer-basic/windows/",
          icon: "windows",
        },
        { text: "Linux", link: "/zh/computer-basic/linux/", icon: "linux" },
      ],
    },
  ],
  "/zh/computer-basic/basic/": ["", "OS", "file-extension", "encoding"],
  "/zh/computer-basic/information-security/": ["information-security"],
  "/zh/computer-basic/windows/": windows,
  "/zh/computer-basic/linux/": linux,
};
