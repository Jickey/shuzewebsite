import { defineConfig } from 'umi';

export default defineConfig({
  history: { type: 'browser' },
  nodeModulesTransform: {
    type: 'none',
  },
  fastRefresh: {},
});
