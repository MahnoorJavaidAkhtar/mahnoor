import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';


const config: Config = {
  title: 'Robotic Academy',
  tagline: 'Dinosaurs are cool',
  favicon: 'img/docusaurus.png',

  url: 'https://mahnoor-ten.vercel.app/',
  baseUrl: '/',

  organizationName: 'facebook',
  projectName: 'docusaurus',

  onBrokenLinks: 'throw',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },
  plugins: [
    // Temporary plugin to reduce CssMinimizer parallelism to avoid worker retries
    // Temporary plugin to disable JS/CSS minimization so we can produce a build
    // and then minify CSS files individually to find the failing one.
    async function disableMinification() {
      return {
        name: 'disable-minification',
        configureWebpack() {
          return {
            optimization: {
              minimize: false,
            },
          };
        },
      };
    },
  ],

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
        },

        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],  // fully valid in v3.4
          },
        },

        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/docusaurus-social-card.jpg',

    colorMode: {
      respectPrefersColorScheme: true,
    },

    navbar: {
      title: 'Physical AI Textbook',
      logo: {
        alt: 'Robot Icon',
        src: 'img/docusaurus.png',
      },
      style: 'dark',
      items: [
        {label: 'Course Modules', to: '/signin', position: 'left'},
        {label: 'GitHub', href: 'https://github.com/MahnoorJavaidAkhtar', position: 'right'},
        {label: 'Sign In', to: '/signin', position: 'right'},
      ],
    },

    footer: {
      style: 'dark',
      links: [
        {
          title: 'Course Content',
          items: [
            {label: 'Module 1: ROS 2', to: '/signin'},
            {label: 'Module 2: Gazebo', to: '/signin'},
            {label: 'Module 3: Isaac', to: '/signin'},
          ],
        },
        {
          title: 'Advanced Topics',
          items: [
            {label: 'Module 4: VLA', to: '/signin'},
            {label: 'Module 5: Physical AI', to: '/signin'},
          ],
        },
        {
          title: 'Resources',
          items: [
            {label: 'GitHub Repository', href: 'https://github.com/MahnoorJavaidAkhtar'},
            {label: 'NVIDIA Isaac', href: 'https://developer.nvidia.com'},
            {label: 'ROS 2 Documentation', href: 'https://docs.ros.org'},
          ],
        },
      ],
      copyright:
        'Copyright © 2025 Physical AI & Humanoid Robotics Textbook. Made by Mahnoor Javaid.',
    },

    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  },
};

export default config;






