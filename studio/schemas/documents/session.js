export default {
    name: 'session',
    type: 'document',
    title: 'Session',
    fields: [
      {
        name: 'startedAt',
        type: 'datetime',
        required: True,
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
    ]
  }
  