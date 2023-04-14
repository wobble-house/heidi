import Header from "../../components/header"
import MyNavbar from "@/components/navbar"

export default function Design() {
  return (
    <>  
        <MyNavbar inverttext={false} />
      <div className="py-64 mx-auto">
      <Header>
          Design Portfolio
        </Header>
      </div>
    </>
  )
}
