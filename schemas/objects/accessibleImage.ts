import { defineType } from 'sanity'

export const accessibleImage = defineType ({
    name: 'accessibleImage',
    type: 'object',
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
        options: {
          isHighlighted: true,
        }
      },
      {
        name: 'caption',
        type: 'string',
        title: 'Caption',
        options: {
          isHighlighted: true
        }
      }
    ]
  }) 

export default accessibleImage