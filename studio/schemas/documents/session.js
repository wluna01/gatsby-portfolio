export default {
  name: 'session',
  type: 'document',
  title: 'Session',
  preview: {
    select: {
      title: 'media.title'
    }
  },
  fields: [
    {
      name: 'startedAt',
      type: 'datetime',
      title: 'End Time',
      initialValue: (new Date()).toISOString()
    },
    {
      name: 'minutes',
      type: 'number',
      title: 'Minutes'
    },
    {
      name: 'notes',
      type: 'text',
      title: 'Notes'
    },
    {
      title: 'Media',
      name: 'media',
      type: 'reference',
      to: [{type: 'media'}]
    },
    {
      title: 'City',
      name: 'city',
      type: 'string',
      initialValue: 'San Francisco'
    },
    {
      title: 'Photos',
      name: 'photos',
      type: 'array',
      of: [{type: 'image'}]
    },
    {
      title: 'People',
      name: 'people',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [
            {type: 'person'}
          ]
        }
      ]
    }
  ]
}
  