import MyNavbar from "../../components/navbar"
import Header from "../../components/header"
import Footer from "../../components/footer"

export default function Design() {
  return (
    <>  
      <MyNavbar bgcolor="bg-heidibg"/>
      <div className="py-64 mx-auto">
      <Header>
          Design Portfolio
        </Header>
      </div>
      <Footer/>
    </>
  )
}
