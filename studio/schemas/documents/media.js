export default {
    name: 'media',
    type: 'document',
    title: 'Media',
    fields: [
      {
        name: 'title',
        type: 'string',
        title: 'Title'
      },
      {
        name: 'description',
        type: 'text',
        title: 'Description'
      },
      {
        name: 'cover',
        type: 'image',
        title: 'Cover'
      },
      {
        name: 'type',
        type: 'string',
        title: 'Type',
        options: {
            list: [
              {title: 'Book', value: 'book'},
              {title: 'Movie', value: 'movie'},
              {title: 'Videogame', value: 'videogame'}
            ]
          }
      },
      {
        title: 'Sessions',
        name: 'sessions',
        type: 'array',
        of: [{
          type: 'reference',
          to: [{type: 'session'}]
        }]
      }
    ]
  }
  