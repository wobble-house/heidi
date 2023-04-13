import Header from "../../../components/header"
import MyNavbar from "../../../components/navbar"
import Footer from "../../../components/footer"
import MyPaintings from "../paintings"

export const dynamic = 'force-dynamic',
  dynamicParams = true,
  revalidate = false,
  fetchCache = 'auto',
  runtime = 'nodejs',
  preferredRegion = 'auto'

  
export default function Abstract() {
  return (
    < >  
      <MyNavbar bgcolor="bg-heidibg"/>
      <div className="py-64 mx-auto">
        <Header>
          Abstract Paintings
        </Header>
      </div>
      <MyPaintings CollectionName={"Abstract Paintings"}/>
      <Footer/>
    </>
  )
}
