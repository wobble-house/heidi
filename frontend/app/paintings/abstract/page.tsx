import Header from "../../../components/header"
import MyNavbar from "../../../components/navbar"
import Footer from "../../../components/footer"

export default function Abstract() {
  return (
    < >  
      <MyNavbar bgcolor="bg-heidibg"/>
      <div className="py-64 mx-auto">
        <Header>
          Abstract Paintings
        </Header>
      </div>
      <Footer/>
    </>
  )
}
