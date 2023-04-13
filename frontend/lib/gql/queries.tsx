'use client';

import {gql} from '@apollo/client'

export const GET_ARTWORK = gql`
query getArtworkQuery() {
    allArtwork() {
      _Id
      name 
      description
      dimensions
      price
      artImage {
        Image 
        alt 
        caption
      }
    }
  }
  `; 

export const GET_COLLECTION = gql`
query getCollectionsQuery() {
    allCollection() {
      _Id
      collectionName
      InventoryDate
      collectionArtwork {
        _Id
        name 
        description
        dimensions
        price
        artImage {
            Image
            alt
            caption
        }
      }
    }
  }
  `; 