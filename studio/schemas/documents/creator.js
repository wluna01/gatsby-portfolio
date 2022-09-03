export default {
    name: 'creator',
    type: 'document',
    title: 'Creator',
    fields: [
        {
            name: 'name',
            type: 'string',
            title: 'Creator Name'
        },
        {
            name: 'type',
            type: 'string',
            title: 'Creator Entity',
            options: {
                list: [
                  {title: 'Director', value: 'director'},
                  {title: 'Author', value: 'author'},
                  {title: 'Studio', value: 'studio'},
                  {title: 'University', value: 'university'},
                  {title: 'Network (TV, Radio)', value: 'network'}
                ]
            }
        },
    ]
}