import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/blog',
    component: ComponentCreator('/blog', 'e5d'),
    exact: true
  },
  {
    path: '/blog/archive',
    component: ComponentCreator('/blog/archive', '1c5'),
    exact: true
  },
  {
    path: '/blog/first-blog-post',
    component: ComponentCreator('/blog/first-blog-post', 'd57'),
    exact: true
  },
  {
    path: '/blog/long-blog-post',
    component: ComponentCreator('/blog/long-blog-post', 'bcd'),
    exact: true
  },
  {
    path: '/blog/mdx-blog-post',
    component: ComponentCreator('/blog/mdx-blog-post', 'a9c'),
    exact: true
  },
  {
    path: '/blog/tags',
    component: ComponentCreator('/blog/tags', '36f'),
    exact: true
  },
  {
    path: '/blog/tags/docusaurus',
    component: ComponentCreator('/blog/tags/docusaurus', '7c7'),
    exact: true
  },
  {
    path: '/blog/tags/facebook',
    component: ComponentCreator('/blog/tags/facebook', '097'),
    exact: true
  },
  {
    path: '/blog/tags/hello',
    component: ComponentCreator('/blog/tags/hello', 'fad'),
    exact: true
  },
  {
    path: '/blog/tags/hola',
    component: ComponentCreator('/blog/tags/hola', 'd56'),
    exact: true
  },
  {
    path: '/blog/welcome',
    component: ComponentCreator('/blog/welcome', '842'),
    exact: true
  },
  {
    path: '/markdown-page',
    component: ComponentCreator('/markdown-page', '619'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', '28b'),
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
      },
      {
        path: '/docs/writing-sample/user-manual',
        component: ComponentCreator('/docs/writing-sample/user-manual', '4fc'),
        exact: true,
        sidebar: "tutorialSidebar"
      }
    ]
  },
  {
    path: '/',
    component: ComponentCreator('/', 'da4'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
