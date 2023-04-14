import MyCollection from "../../../components/collection";

export const dynamic = 'force-dynamic',
  dynamicParams = true,
  revalidate = false,
  fetchCache = 'auto',
  runtime = 'nodejs',
  preferredRegion = 'auto'
  
export default function Turmeric() {

  return (
    <div className="overscroll-auto">
<MyCollection CollectionName={"Turmeric Paintings"}/>
</div>
  )
}
