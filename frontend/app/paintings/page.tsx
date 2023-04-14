import Header from "../../components/header"
import MyNavbar from "@/components/navbar"

export default function Paintings() {
  return (
    < >  
        <MyNavbar inverttext={false} />
      <div className="py-64 mx-auto">
        <Header>
          Paintings
        </Header>
      </div>
    </>
  )
}
