export default {
    name: 'location',
    type: 'document',
    title: 'Location',
    fields: [
        {
            name: 'place',
            type: 'string',
            title: 'Place'
        },
        {
            name: 'city',
            type: 'string',
            title: 'City',
            initialValue: 'San Francisco'
        }
    ]
}