export default {
  name: 'session',
  type: 'document',
  title: 'Session',
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
    }
  ]
}
  