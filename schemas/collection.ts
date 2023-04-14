import { defineType, defineField } from "sanity";
import artwork from "./artwork";

export const collection = defineType({
  name: "collection",
  type: "document",
  title: "Collection",
  fields: [
    defineField({
      name: "collectionName",
      type: "string",
      title: "Collection Name",
    }),
    defineField({
      name: "collectionDescription",
      type: "text",
      title: "Collection Description",
    }),
    defineField({
      name: "inventoryDate",
      type: "datetime",
      title: "Date added to inventory",
    }),
    {
      name: 'coverImage',
      title: 'Cover Image',
      type: 'accessibleImage',
      description: 'Add an image to use as the header of your site'
    },
    defineField({
      title: 'Collection Artwork',
      name: 'collectionArtwork',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: artwork.name }],
        },
     ]
	}),
    
  ],
})

export default collection