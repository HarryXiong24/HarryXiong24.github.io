import { servlet } from "./servlet.js";

export const backend = {
  "/zh/back-end": [
    { text: "后台总述", icon: "sort", link: "/zh/back-end/preface" },
    {
      text: "Node 系列",
      children: [{ text: "Express", link: "/zh/back-end/express/express" }],
    },
    {
      text: "服务器系列",
      children: [
        { text: "Apache", link: "/zh/back-end/apache/apache", icon: "Apache" },
        { text: "Nginx", link: "/zh/back-end/nginx/nginx", icon: "nginx" },
      ],
    },
    {
      text: "Outdated",
      children: [{ text: "Servlet & JSP", link: "/zh/back-end/servlet" }],
    },
  ],
  "/zh/back-end/express/": ["express"],
  "/zh/back-end/servlet/": servlet,
  "/zh/back-end/apache/": ["apache"],
  "/zh/back-end/nginx/": ["nginx"],
};
