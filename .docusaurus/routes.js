import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/blog',
    component: ComponentCreator('/blog', 'ca0'),
    exact: true
  },
  {
    path: '/blog/archive',
    component: ComponentCreator('/blog/archive', 'c8c'),
    exact: true
  },
  {
    path: '/blog/first-blog-post',
    component: ComponentCreator('/blog/first-blog-post', '510'),
    exact: true
  },
  {
    path: '/blog/long-blog-post',
    component: ComponentCreator('/blog/long-blog-post', 'eed'),
    exact: true
  },
  {
    path: '/blog/mdx-blog-post',
    component: ComponentCreator('/blog/mdx-blog-post', '542'),
    exact: true
  },
  {
    path: '/blog/tags',
    component: ComponentCreator('/blog/tags', 'ca0'),
    exact: true
  },
  {
    path: '/blog/tags/docusaurus',
    component: ComponentCreator('/blog/tags/docusaurus', 'f1a'),
    exact: true
  },
  {
    path: '/blog/tags/facebook',
    component: ComponentCreator('/blog/tags/facebook', '7f0'),
    exact: true
  },
  {
    path: '/blog/tags/hello',
    component: ComponentCreator('/blog/tags/hello', '428'),
    exact: true
  },
  {
    path: '/blog/tags/hola',
    component: ComponentCreator('/blog/tags/hola', 'd71'),
    exact: true
  },
  {
    path: '/blog/welcome',
    component: ComponentCreator('/blog/welcome', 'da2'),
    exact: true
  },
  {
    path: '/markdown-page',
    component: ComponentCreator('/markdown-page', 'd17'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', '671'),
    routes: [
      {
        path: '/docs/category/writing-samples',
        component: ComponentCreator('/docs/category/writing-samples', 'ec6'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/intro',
        component: ComponentCreator('/docs/intro', 'aed'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/new',
        component: ComponentCreator('/docs/new', '03c'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/writing-sample/api',
        component: ComponentCreator('/docs/writing-sample/api', '6ca'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/writing-sample/blogs',
        component: ComponentCreator('/docs/writing-sample/blogs', '4a0'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/writing-sample/faqs',
        component: ComponentCreator('/docs/writing-sample/faqs', 'ccd'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/writing-sample/how-to-guide',
        component: ComponentCreator('/docs/writing-sample/how-to-guide', '304'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/writing-sample/newsletter',
        component: ComponentCreator('/docs/writing-sample/newsletter', '597'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/writing-sample/release-notes',
        component: ComponentCreator('/docs/writing-sample/release-notes', 'ae0'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/writing-sample/tutorial',
        component: ComponentCreator('/docs/writing-sample/tutorial', '268'),
        exact: true,
        sidebar: "tutorialSidebar"
      }
    ]
  },
  {
    path: '/',
    component: ComponentCreator('/', 'ce6'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
