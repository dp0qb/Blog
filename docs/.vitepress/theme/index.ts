import DefaultTheme from 'vitepress/theme';
import Layout from './Layout.vue';

export default {
  ...DefaultTheme,
  Layout: Layout,
  async enhanceApp() {
    if (!import.meta.env.SSR) {
      const { loadOml2d } = await import('oh-my-live2d');
      loadOml2d({
        models: [
          {
            "path": "https://model.oml2d.com/Pio/model.json",
            "scale": 0.4,
            "position": [0, 50],
            "stageStyle": {
            "height": 300
            },
          },
          {
            "path": "https://model.oml2d.com/chino/model.json",
            "scale": 0.2,
            "position": [0, 50],
            "stageStyle": {
              "height": 300
            }
          },
          {
            "path": "/l2d_models/hiyori_free_zh/runtime/hiyori_free_t08.model3.json",
            "scale": 0.15,
            "position": [-85, 0],
            "stageStyle": {
              "height": 300,
              "width": 270,
            }
          },
          {
            "path": "/l2d_models/ena_jc/19ena_jc.model3.json",
            "scale": 0.175,
            "position": [-100, 0],
            "stageStyle": {
              "height": 350,
              "width": 300,
            }
          },
          {
            "path": "/l2d_models/miku_normal/21miku_normal.model3.json",
            "scale": 0.175,
            "position": [-100, 0],
            "stageStyle": {
              "height": 350,
              "width": 300,
            }
          }
        ]
      });
    }
  }
};
