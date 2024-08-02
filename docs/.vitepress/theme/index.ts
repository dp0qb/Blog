import DefaultTheme from 'vitepress/theme';
import Layout from './Layout.vue';
import l2d_models from "../../public/l2d_models";

export default {
  ...DefaultTheme,
  Layout: Layout,
  async enhanceApp() {
    if (!import.meta.env.SSR) {
      const { loadOml2d } = await import('oh-my-live2d');
      loadOml2d({
        models: l2d_models
      });
    }
  }
};
