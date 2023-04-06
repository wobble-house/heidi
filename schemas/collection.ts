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
      title: "First Name",
    }),
    defineField({
      name: "inventoryDate",
      type: "datetime",
      title: "Date added to inventory",
    }),
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