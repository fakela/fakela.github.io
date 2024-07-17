import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/blog',
    component: ComponentCreator('/blog', 'ba2'),
    exact: true
  },
  {
    path: '/blog/archive',
    component: ComponentCreator('/blog/archive', '2a8'),
    exact: true
  },
  {
    path: '/blog/first-blog-post',
    component: ComponentCreator('/blog/first-blog-post', '9c1'),
    exact: true
  },
  {
    path: '/blog/long-blog-post',
    component: ComponentCreator('/blog/long-blog-post', 'cd9'),
    exact: true
  },
  {
    path: '/blog/mdx-blog-post',
    component: ComponentCreator('/blog/mdx-blog-post', 'f84'),
    exact: true
  },
  {
    path: '/blog/tags',
    component: ComponentCreator('/blog/tags', 'eec'),
    exact: true
  },
  {
    path: '/blog/tags/docusaurus',
    component: ComponentCreator('/blog/tags/docusaurus', 'cd3'),
    exact: true
  },
  {
    path: '/blog/tags/facebook',
    component: ComponentCreator('/blog/tags/facebook', 'cbc'),
    exact: true
  },
  {
    path: '/blog/tags/hello',
    component: ComponentCreator('/blog/tags/hello', '406'),
    exact: true
  },
  {
    path: '/blog/tags/hola',
    component: ComponentCreator('/blog/tags/hola', '9e4'),
    exact: true
  },
  {
    path: '/blog/welcome',
    component: ComponentCreator('/blog/welcome', '9c5'),
    exact: true
  },
  {
    path: '/markdown-page',
    component: ComponentCreator('/markdown-page', '2b9'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', '0ea'),
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
        path: '/docs/writing-sample/blogs',
        component: ComponentCreator('/docs/writing-sample/blogs', '4a0'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/writing-sample/marketing',
        component: ComponentCreator('/docs/writing-sample/marketing', 'dca'),
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
        path: '/docs/writing-sample/tutorial',
        component: ComponentCreator('/docs/writing-sample/tutorial', '268'),
        exact: true,
        sidebar: "tutorialSidebar"
      }
    ]
  },
  {
    path: '/',
    component: ComponentCreator('/', '496'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
