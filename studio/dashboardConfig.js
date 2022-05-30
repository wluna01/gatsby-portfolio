export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
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
                  buildHookId: '62950ccd128cc10c58439325',
                  title: 'Sanity Studio',
                  name: 'gatsby-portfolio-studio-y2vzze8g',
                  apiId: 'e2f996d9-6d32-46c1-b4a4-0413e9597d8a'
                },
                {
                  buildHookId: '62950ccdf8604e04572a7b8e',
                  title: 'Portfolio Website',
                  name: 'gatsby-portfolio-web-e8v8cbd4',
                  apiId: '53396372-b8d6-4b1b-93eb-2f34a090acd7'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/wluna01/gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://gatsby-portfolio-web-e8v8cbd4.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
