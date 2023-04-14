'use client'
import { GET_COLLECTION } from "../lib/gql/queries";
import { useQuery } from '@apollo/client';
import { Artwork, Details } from "./artwork";
import CoverImage from "./cover-image";
import MyNavbar from "./navbar";

export default function MyCollection({CollectionName}){
  const dummydata = [1,2,3,4,5,6,7,8,9,10]
  const { loading, error, data } = useQuery(GET_COLLECTION, { 
      variables: {
          CollectionName: CollectionName
      }});
  if (loading) return (
      <>
    <div className="relative animate-pulse grid grid-cols-1 mx-auto p-10 gap-10 z-0 max-w-3xl">
    {dummydata.map(data => (
        <div key={data} className="animate-pulse bg-gray-200 rounded-2xl dark:bg-gray-700 w-full h-[300px]">
        </div>
          )
        )}
        </div>
        </>
  )
  if (error) return <p>Error</p>
  return (
    <>
    
    <div className="relative z-0">
      {data.allCollection.map(allCollection => (
        <div key={allCollection._id} className="flex flex-col relative">
          <MyNavbar inverttext={allCollection.coverImage ? true : false }/>
          <CoverImage 
          src={allCollection.coverImage?.image.asset.url} 
          alt={allCollection.coverImage?.alt} 
          height={allCollection.coverImage?.image.asset.metadata.dimensions.height} 
          width={allCollection.coverImage?.image.asset.metadata.dimensions.width}
          />

          <section className="collection-artwork inline-block">
              <div>
                  <h2 className="max-w-7xl text-center mx-auto text-6xl text-heiditext px-8 uppercase font-sans py-20">
                    {allCollection.collectionName}
                  </h2>
              </div>

              <div className="grid grid-cols-0 md:grid-cols-2 relative">
                {allCollection.collectionArtwork.map(collectionArtwork => (
                    <div key={collectionArtwork._id} className="p-8 mx-auto shadow-2xl relative overscroll-contain overflow-hidden">                          
                        <Artwork 
                          name={collectionArtwork.name} 
                          price={collectionArtwork.price} 
                          artImage={collectionArtwork.artImage} 
                          >
                          <Details 
                            name={collectionArtwork.name}
                            description={collectionArtwork.description}
                            dimensions={collectionArtwork.dimensions}
                            price={collectionArtwork.price}
                            artImage={collectionArtwork.artImage}
                          />
                        </Artwork>

                    </div>
                  ))}
                </div>
          </section>         
            
          <section className="collection-bio relative">
              <div>
                <h2 className="max-w-7xl text-left mx-auto text-6xl text-heiditext px-8 uppercase font-sans pt-32 pb-10">{allCollection.collectionName}</h2>
                <hr className="my-10 border-gray-400"></hr>
              </div>

              <div className="mx-auto max-w-7xl px-8 gap-8 pb-64 ">
                <p className="font-serif font-thin text-xs leading-6 tracking-wider md:columns-2 lg:columns-3 gap-10">
                    {allCollection.collectionDescription}
                </p>
              </div>
          </section>
        </div>
      ))}
      </div>
      </>
  )
}

