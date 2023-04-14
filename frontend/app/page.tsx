import Header from "../components/header"
import MyNavbar from "@/components/navbar"

export default function Home() {
  return (
    <main className="bg-heidibg">  
    <MyNavbar inverttext={false} />
      <div className="py-64 mx-auto">
        <Header>Heidi Vasterling-Ford</Header>
      </div>
    </main>
  )
}
