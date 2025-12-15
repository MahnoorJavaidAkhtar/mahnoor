import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/blog',
    component: ComponentCreator('/blog', 'b2f'),
    exact: true
  },
  {
    path: '/blog/archive',
    component: ComponentCreator('/blog/archive', '182'),
    exact: true
  },
  {
    path: '/blog/authors',
    component: ComponentCreator('/blog/authors', '0b7'),
    exact: true
  },
  {
    path: '/blog/authors/all-sebastien-lorber-articles',
    component: ComponentCreator('/blog/authors/all-sebastien-lorber-articles', '4a1'),
    exact: true
  },
  {
    path: '/blog/authors/yangshun',
    component: ComponentCreator('/blog/authors/yangshun', 'a68'),
    exact: true
  },
  {
    path: '/blog/first-blog-post',
    component: ComponentCreator('/blog/first-blog-post', '89a'),
    exact: true
  },
  {
    path: '/blog/long-blog-post',
    component: ComponentCreator('/blog/long-blog-post', '9ad'),
    exact: true
  },
  {
    path: '/blog/mdx-blog-post',
    component: ComponentCreator('/blog/mdx-blog-post', 'e9f'),
    exact: true
  },
  {
    path: '/blog/tags',
    component: ComponentCreator('/blog/tags', '287'),
    exact: true
  },
  {
    path: '/blog/tags/docusaurus',
    component: ComponentCreator('/blog/tags/docusaurus', '704'),
    exact: true
  },
  {
    path: '/blog/tags/facebook',
    component: ComponentCreator('/blog/tags/facebook', '858'),
    exact: true
  },
  {
    path: '/blog/tags/hello',
    component: ComponentCreator('/blog/tags/hello', '299'),
    exact: true
  },
  {
    path: '/blog/tags/hola',
    component: ComponentCreator('/blog/tags/hola', '00d'),
    exact: true
  },
  {
    path: '/blog/welcome',
    component: ComponentCreator('/blog/welcome', 'd2b'),
    exact: true
  },
  {
    path: '/course-modules',
    component: ComponentCreator('/course-modules', '672'),
    exact: true
  },
  {
    path: '/forgot',
    component: ComponentCreator('/forgot', '761'),
    exact: true
  },
  {
    path: '/markdown-page',
    component: ComponentCreator('/markdown-page', '3d7'),
    exact: true
  },
  {
    path: '/signin',
    component: ComponentCreator('/signin', 'ba0'),
    exact: true
  },
  {
    path: '/signup',
    component: ComponentCreator('/signup', '312'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', 'c95'),
    routes: [
      {
        path: '/docs',
        component: ComponentCreator('/docs', '002'),
        routes: [
          {
            path: '/docs',
            component: ComponentCreator('/docs', 'd45'),
            routes: [
              {
                path: '/docs/intro',
                component: ComponentCreator('/docs/intro', '61d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Module 5-Physical AI/week18-physical-ai-foundations',
                component: ComponentCreator('/docs/Module 5-Physical AI/week18-physical-ai-foundations', '339'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Module 5-Physical AI/week19-perception-action-loops',
                component: ComponentCreator('/docs/Module 5-Physical AI/week19-perception-action-loops', 'f13'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Module 5-Physical AI/week20-real-environment-intelligence',
                component: ComponentCreator('/docs/Module 5-Physical AI/week20-real-environment-intelligence', '981'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/module-1-ros2/week1-introduction',
                component: ComponentCreator('/docs/module-1-ros2/week1-introduction', 'd94'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/module-1-ros2/week2-physical-ai-landscape',
                component: ComponentCreator('/docs/module-1-ros2/week2-physical-ai-landscape', '992'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/module-1-ros2/week3-ros2-architecture-nodes',
                component: ComponentCreator('/docs/module-1-ros2/week3-ros2-architecture-nodes', 'dd3'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/module-1-ros2/week4-ros2-topics-services',
                component: ComponentCreator('/docs/module-1-ros2/week4-ros2-topics-services', 'ecb'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/module-1-ros2/week5-ros2-advanced-patterns',
                component: ComponentCreator('/docs/module-1-ros2/week5-ros2-advanced-patterns', '0d9'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/module-2-gazebo/week6-simulation-concepts',
                component: ComponentCreator('/docs/module-2-gazebo/week6-simulation-concepts', '2fd'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/module-2-gazebo/week7-robot-modeling-urdf',
                component: ComponentCreator('/docs/module-2-gazebo/week7-robot-modeling-urdf', 'bd4'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/module-2-gazebo/week8-gazebo-sensors',
                component: ComponentCreator('/docs/module-2-gazebo/week8-gazebo-sensors', '9cd'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/module-2-gazebo/week9-gazebo-controllers',
                component: ComponentCreator('/docs/module-2-gazebo/week9-gazebo-controllers', '1a4'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/module-3-nvidia-isaac/week10-intro-isaac-sim',
                component: ComponentCreator('/docs/module-3-nvidia-isaac/week10-intro-isaac-sim', '6bd'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/module-3-nvidia-isaac/week11-isaac-pipeline-usd',
                component: ComponentCreator('/docs/module-3-nvidia-isaac/week11-isaac-pipeline-usd', 'b06'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/module-3-nvidia-isaac/week12-isaac-perception-sensors',
                component: ComponentCreator('/docs/module-3-nvidia-isaac/week12-isaac-perception-sensors', '2fd'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/module-3-nvidia-isaac/week13-isaac-robotics-ai',
                component: ComponentCreator('/docs/module-3-nvidia-isaac/week13-isaac-robotics-ai', 'd40'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/module-4-humanoids/week14-humanoid-foundations',
                component: ComponentCreator('/docs/module-4-humanoids/week14-humanoid-foundations', 'ea4'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/module-4-humanoids/week15-biped-locomotion',
                component: ComponentCreator('/docs/module-4-humanoids/week15-biped-locomotion', '504'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/module-4-humanoids/week16-humanoid-manipulation',
                component: ComponentCreator('/docs/module-4-humanoids/week16-humanoid-manipulation', '2d2'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/module-4-humanoids/week17-humanoid-vision-learning',
                component: ComponentCreator('/docs/module-4-humanoids/week17-humanoid-vision-learning', '7af'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tutorial-basics/congratulations',
                component: ComponentCreator('/docs/tutorial-basics/congratulations', '70e'),
                exact: true
              },
              {
                path: '/docs/tutorial-basics/create-a-blog-post',
                component: ComponentCreator('/docs/tutorial-basics/create-a-blog-post', '315'),
                exact: true
              },
              {
                path: '/docs/tutorial-basics/create-a-document',
                component: ComponentCreator('/docs/tutorial-basics/create-a-document', 'f86'),
                exact: true
              },
              {
                path: '/docs/tutorial-basics/create-a-page',
                component: ComponentCreator('/docs/tutorial-basics/create-a-page', '9f6'),
                exact: true
              },
              {
                path: '/docs/tutorial-basics/deploy-your-site',
                component: ComponentCreator('/docs/tutorial-basics/deploy-your-site', 'b91'),
                exact: true
              },
              {
                path: '/docs/tutorial-basics/markdown-features',
                component: ComponentCreator('/docs/tutorial-basics/markdown-features', '272'),
                exact: true
              },
              {
                path: '/docs/tutorial-extras/manage-docs-versions',
                component: ComponentCreator('/docs/tutorial-extras/manage-docs-versions', 'a34'),
                exact: true
              },
              {
                path: '/docs/tutorial-extras/translate-your-site',
                component: ComponentCreator('/docs/tutorial-extras/translate-your-site', '739'),
                exact: true
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/',
    component: ComponentCreator('/', 'e5f'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
