import { defineType } from 'sanity'

export const accessibleImage = defineType ({
    name: 'accessibleImage',
    type: 'object',
    title: 'Acessible Image',
    fields: [
        {
        name: 'image',
        type: 'image',
        title: 'Image'
        },
        {
        name: 'alt',
        type: 'string',
        title: 'Alternative text',
        description: 'Alternative text is required.',
        validation: Rule => [
          Rule.required(),
        ],
      },
      {
        name: 'caption',
        type: 'string',
        title: 'Caption',
      }
    ]
  }) 

export default accessibleImage