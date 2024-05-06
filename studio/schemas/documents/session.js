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
      title: 'Location Unclear from Activity and not Home',
      name: 'needs_location',
      type: 'boolean',
      initialValue: false
    },
    {
      name: 'location',
      type: 'reference',
      title: 'Location',
      to: [{type: 'location'}, {type: 'media'}],
      hidden: ({document}) => ![true].includes(document?.needs_location)
    },
    {
      title: 'Has People',
      name: 'has_people',
      type: 'boolean',
      initialValue: false
    },
    {
      title: 'People',
      name: 'people',
      type: 'array',
      hidden: ({document}) => ![true].includes(document?.has_people),
      of: [
        {
          type: 'reference',
          to: [
            {type: 'person'}
          ]
        }
      ]
    },
    {
      title: 'Has Photos',
      name: 'has_photos',
      type: 'boolean',
      initialValue: false
    },
    {
      title: 'Photos',
      name: 'photos',
      type: 'array',
      of: [{type: 'image'}],
      hidden: ({document}) => ![true].includes(document?.has_photos)
    }
  ]
}
  