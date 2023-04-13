'use client'
import { GET_COLLECTION } from "../../lib/gql/queries";
import { useQuery } from '@apollo/client';
import Image from 'next/image'

export default function MyPaintings({CollectionName}){
    const dummydata = [1,2,3,4,5,6,7,8,9,10]
    const { loading, error, data } = useQuery(GET_COLLECTION, { 
        variables: {
            CollectionName: CollectionName
        }});
        console.log(data)
    if (loading) return (
        <>
      <div className="relative animate-pulse grid grid-cols-1 mx-auto p-10 gap-10 z-0 max-w-3xl">
      {dummydata.map(data => (
          <div key={data} className="animate-pulse bg-gray-200 rounded-2xl dark:bg-gray-700 w-full h-[600px]">
          </div>
            )
          )}
          </div>
          </>
    )
    if (error) return <p>Error</p>
    return (

<div className="mb-20">
      <div className="relative mx-auto p-10 z-0">
       {data.allCollection.map(allCollection => (       
        <div key={allCollection._id} className="grid grid-cols-0 md:grid-cols-2">
        {allCollection.collectionArtwork.map(collectionArtwork => (
                <div key={collectionArtwork._id} className="p-8 mx-auto shadow-2xl">
                  <div className="relative rounded-lg bg-white mx-auto p-5 overflow-hidden">
                  {collectionArtwork.artImage.slice(-1).map(artImage => (
                  <Image 
                    key={artImage._key}
                    src={artImage.image.asset.url}
                    width={artImage.image.asset.metadata.dimensions.width}
                    height={artImage.image.asset.metadata.dimensions.height}
                    sizes="(max-width: 768px) 100vw,
                    (max-width: 1200px) 50vw,
                    33vw"
                    alt={artImage.alt} 
                    className="mx-auto"
                    />
                    ))}
                    </div>
                    <div>
                        <div className="flex justify-evenly py-3">
                    <p>
                    {collectionArtwork.name}
                    </p>
                    <p>
                    {collectionArtwork.price}
                    </p>
                    </div>
                    </div>
                </div>
              )
            )}
            </div>
            )
            )}

            </div>
        </div>

    )
}
