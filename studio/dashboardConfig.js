export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5e0dafa2ea74d121d2aba825',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-1ab5duqg',
                  apiId: '7714100e-2d78-4b89-8792-c633f698699a'
                },
                {
                  buildHookId: '5e0dafa286b5db8feaea1ce2',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-ujchusqr',
                  apiId: '4f32b679-bb17-4840-8844-0cff0f822d62'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/acasazza/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-ujchusqr.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
