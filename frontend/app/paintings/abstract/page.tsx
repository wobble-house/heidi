import MyCollection from "../../../components/collection"

export const dynamic = 'force-dynamic',
  dynamicParams = true,
  revalidate = false,
  fetchCache = 'auto',
  runtime = 'nodejs',
  preferredRegion = 'auto'

  
export default function Abstract() {
  return (
      <MyCollection CollectionName={"Abstract Paintings"}/>
  )
}
