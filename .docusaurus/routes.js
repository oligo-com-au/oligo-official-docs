import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/oligo-official-docs/__docusaurus/debug',
    component: ComponentCreator('/oligo-official-docs/__docusaurus/debug', '750'),
    exact: true
  },
  {
    path: '/oligo-official-docs/__docusaurus/debug/config',
    component: ComponentCreator('/oligo-official-docs/__docusaurus/debug/config', '14a'),
    exact: true
  },
  {
    path: '/oligo-official-docs/__docusaurus/debug/content',
    component: ComponentCreator('/oligo-official-docs/__docusaurus/debug/content', '6bd'),
    exact: true
  },
  {
    path: '/oligo-official-docs/__docusaurus/debug/globalData',
    component: ComponentCreator('/oligo-official-docs/__docusaurus/debug/globalData', '3fa'),
    exact: true
  },
  {
    path: '/oligo-official-docs/__docusaurus/debug/metadata',
    component: ComponentCreator('/oligo-official-docs/__docusaurus/debug/metadata', 'ee6'),
    exact: true
  },
  {
    path: '/oligo-official-docs/__docusaurus/debug/registry',
    component: ComponentCreator('/oligo-official-docs/__docusaurus/debug/registry', 'c84'),
    exact: true
  },
  {
    path: '/oligo-official-docs/__docusaurus/debug/routes',
    component: ComponentCreator('/oligo-official-docs/__docusaurus/debug/routes', 'a43'),
    exact: true
  },
  {
    path: '/oligo-official-docs/docs',
    component: ComponentCreator('/oligo-official-docs/docs', 'f05'),
    routes: [
      {
        path: '/oligo-official-docs/docs/',
        component: ComponentCreator('/oligo-official-docs/docs/', '26f'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/oligo-official-docs/docs/payto',
        component: ComponentCreator('/oligo-official-docs/docs/payto', 'acc'),
        exact: true,
        sidebar: "tutorialSidebar"
      }
    ]
  },
  {
    path: '/oligo-official-docs/',
    component: ComponentCreator('/oligo-official-docs/', 'be9'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
