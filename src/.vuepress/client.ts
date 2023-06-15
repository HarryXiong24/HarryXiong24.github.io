import { defineClientConfig } from "@vuepress/client";
import { onMounted } from "vue";

export default defineClientConfig({
  setup() {
    onMounted(() => {
      console.log(String.raw`Harry xiong`);
    });
  },
});
