import { defineConfig } from 'umi';
import routes from './route.config';

const BASE_NAME = '/console';

const config = defineConfig({
  theme: {
    'primary-color': '#2B6DE5',
  },
  routes,
  targets: {
    ie: 11,
  },
  hash: true,
  devServer: {
    port: 8050,
  },
  // 插件相关
  antd: {
    config: {},
  },
  locale: {
    default: 'zh-CN',
    antd: true,
    baseNavigator: true,
  },
  dva: {
    immer: false,
    skipModelValidate: true,
  },
});

export default config;
