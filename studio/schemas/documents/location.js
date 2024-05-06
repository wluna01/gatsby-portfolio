export default {
    name: 'location',
    type: 'document',
    title: 'Location',
    fields: [
        {
            name: 'place',
            type: 'string',
            title: 'Location Name'
        },
        {
            name: 'type',
            type: 'string',
            title: 'Type',
            options: {
                list: [
                  {title: 'Neighborhood', value: 'neighborhood'},
                  {title: 'Theater', value: 'theater'},
                  {title: 'City', value: 'city'}
                ]
            }
        }
    ]
}