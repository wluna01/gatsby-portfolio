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
  title: 'Activity',
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
      title: 'Cover',
      hidden: ({document}) => !['book', 'movie', 'show', 'videogame', 'podcast', 'course'].includes(document?.type)
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
            {title: 'Podcast', value: 'podcast'},
            {title: 'Course', value: 'course'},
            {title: 'TV Show', value: 'show'},
            {title: 'Video Series', value: 'video'},
            {title: 'Play', value: 'play'},
            {title: 'Restaurant', value: 'restaurant'},
            {title: 'Board Game', value: 'boardgame'},
            {title: 'Museum', value: 'museum'},
            {title: 'Concert', value: 'concert'},
            {title: 'Bar/Cafe', value: 'bar'},
            {title: 'Store', value: 'store'},
            {title: 'Event', value: 'event'},
            {title: 'Gym', value: 'gym'}
          ]
      }
    },
    {
      name: 'release_date',
      type: 'date',
      title: 'Release Date',
      hidden: ({document}) => !['book', 'movie', 'show', 'videogame'].includes(document?.type)
    },
    {
      name: 'creator',
      type: 'reference',
      title: 'Creator',
      to: [{type: 'creator'}],
      hidden: ({document}) => !['book', 'movie', 'videogame', 'show', 'course'].includes(document?.type)
    },
    {
      name: 'location',
      type: 'reference',
      title: 'Location',
      to: [{type: 'location'}],
      hidden: ({document}) => !['gym', 'event', 'concert', 'restaurant', 'bar', 'museum', 'store'].includes(document?.type)
    }
  ]
}
  