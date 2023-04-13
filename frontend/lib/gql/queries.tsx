'use client';

import {gql} from '@apollo/client'

export const GET_COLLECTION = gql`
query getCollection($CollectionName: String!) {
  allCollection(where: {collectionName: {eq: $CollectionName}}  ) {
      _id
      collectionName
      inventoryDate
      collectionArtwork {
        _id
        name 
        description
        dimensions
        price
        artImage {
            _key
            image {
              asset {
                url
                metadata {
                  dimensions {
                    height
                    width
                  }
                }
              }
            }
            alt
            caption
        }
      }
    }
}
  `; 