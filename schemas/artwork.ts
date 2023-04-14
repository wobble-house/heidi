import { defineField, defineType } from "sanity";

export const artwork = defineType({
    name: 'artwork',
    type: 'document',
    title: 'Artwork',
    fields: [
      defineField({
        name: 'name',
        type: 'string',
        title: 'Name'
      }),
      defineField({
        name: 'description',
        type: 'string',
        title: 'Description'
      }),
      defineField({
        name: 'dimensions',
        type: 'string',
        title: 'Dimensions'
      }),
      defineField({
        name: 'price',
        type: 'string',
        title: 'Price'
      }),
      {
        name: 'artImage',
        title: 'Artwork Image',
        type: 'array',
        of: [
          {
            type: 'accessibleImage'
          }
       ],
        description: 'Add an image of the artwork'
      }
    ]
  })

export default artwork