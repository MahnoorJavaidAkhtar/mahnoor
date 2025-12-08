import type { Plugin } from '@docusaurus/types';

export default function disableCssMinimizer(): Plugin {
  return {
    name: 'disable-css-minimizer',

    configureWebpack() {
      return {
        optimization: {
          minimizer: [],
        },
      };
    },
  };
}
