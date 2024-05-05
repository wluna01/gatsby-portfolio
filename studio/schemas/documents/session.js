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
      title: 'Start Time'
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
      type: 'text',
      initialValue: 'San Francisco'
    },
    {
      title: 'Photos',
      name: 'photos',
      type: 'array',
      of: [{type: 'image'}]
    }
  ]
}
  