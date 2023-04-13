import Header from "../components/header"
import MyNavbar from "../components/navbar"
import Footer from "../components/footer"

export default function Home() {
  return (
    <main className="bg-heidibg">  
      <MyNavbar bgcolor="bg-heidibg"/>
      <div className="py-64 mx-auto">
        <Header>Heidi Vasterling-Ford</Header>
      </div>
      <Footer/>
    </main>
  )
}
