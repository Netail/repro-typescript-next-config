import type { NextConfig } from "next";
import type { Config as SVGRConfig } from '@svgr/core';

const svgrLoaderOptions: SVGRConfig = {
  ref: true,
  titleProp: true,
  svgProps: {
    focusable: 'false',
  },
  svgoConfig: {
    plugins: [
      {
        name: 'preset-default',
        params: {
          overrides: {
            removeTitle: false,
            removeViewBox: false,
          },
        },
      },
      {
        name: 'prefixIds',
        params: {
          prefix: 'ah-next-core-svg',
        },
      },
    ],
  },
};

const nextConfig: NextConfig = {
  experimental: {
    turbo: {
      rules: {
        '*.svg': {
          loaders: [
            {
              loader: '@svgr/webpack',
              options: svgrLoaderOptions,
            },
          ],
          as: '*.js',
        },
      },
    },
  },
};

export default nextConfig;
