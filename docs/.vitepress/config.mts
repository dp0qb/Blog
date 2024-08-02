import { defineConfig } from 'vitepress'
import { getSidebarData, getNavData } from './navSidebarUtil'
import mathjax3 from "markdown-it-mathjax3";
import customElements from "../public/mathjaxCustomElements";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "(｡•̀ᴗ-)✧",
  description: "BaiXia's Blog",
  lang: "zh-CN",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: getNavData(),
    sidebar: getSidebarData(),
    search: {
      //provider: 'local', // 可以开启本地搜索
      provider: "algolia",
      options: {
        appId: "O7ANYUO5K6",
        apiKey: "b55493ae47021a268454bdcd24d097a4",
        indexName: "guorq-cloudns",
        placeholder: "请输入关键词",
        translations: {
          button: {
            buttonText: "请输入关键词",
          },
        },
      },
    }
  },
  markdown: {
    config: (md) => {
      md.use(mathjax3)
    }
  },
  vue: {
    template: {
      compilerOptions: {
        isCustomElement: (tag) => customElements.includes(tag)
      }
    }
  }
})
