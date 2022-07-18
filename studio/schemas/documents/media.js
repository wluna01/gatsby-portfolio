//baseline query
//*[_type == 'media'  && count(sessions[]) > 0]
//{
//  title,
//  "beganAt": *[_type == 'session' && media->title == ^.title]
//  |order(startedAt asc)[0].startedAt,
//  "numSessions": count(*[_type == 'session' && media->title == ^.title])
//}


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
            {title: 'Videogame', value: 'videogame'},
            {title: 'Podcast', value: 'podcast'}
          ]
      }
    },
    {
      name: 'release_date',
      type: 'date',
      title: 'Release Date'
    },
    {
      name: 'creator',
      type: 'reference',
      title: 'Creator',
      to: [{type: 'creator'}]
    }
  ]
}
  