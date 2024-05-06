import { MdPerson } from "react-icons/md";

export default {
  name: 'person',
  type: 'document',
  title: 'Person',
  icon: MdPerson,
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Name'
    }
  ]
}
