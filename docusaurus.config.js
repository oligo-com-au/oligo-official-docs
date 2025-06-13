module.exports = {
  title: 'MyOligo API Docs',
  tagline: 'Integrate MyOligo PayTo API seamlessly',
  url: 'https://oligo-com-au.github.io',
  baseUrl: '/oligo-official-docs',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/oligo-logo.svg',

  organizationName: 'oligo-com-au',
  projectName: 'oligo-official-docs',
  deploymentBranch: 'gh-pages',

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js')
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css')
        }
      }
    ]
  ],

  themeConfig: {
    navbar: {
      // title: 'MyOligo Docs',
      logo: {
        alt: 'Logo',
        src: 'img/oligo-logo.svg'
      },
      items: [
        {
          type: 'doc',
          docId: 'index',
          position: 'left',
          label: 'PayTo API'
        },
        // {
        //   href: 'https://github.com/oligo-com-au/oligo-official-docs',
        //   label: 'GitHub',
        //   position: 'right'
        // }
      ]
    },
    footer: {
      style: 'dark',
      copyright: `Copyright © ${new Date().getFullYear()} Oligo`
    }
  }
};
