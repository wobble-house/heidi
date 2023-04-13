import MyNavbar from "../../components/navbar"
import Header from "../../components/header"
import Footer from "../../components/footer"

export default function Contact() {
  return (
    < >  
      <MyNavbar bgcolor="bg-heidibg"/>
      <div className="py-64 mx-auto">
      <Header>
      I&apos;D LOVE TO HEAR FROM YOU!
        </Header>
        <h3 className="text-2xl text-center mx-auto py-5 font-thin">Interested in commissioning, or working together? Send me a message!</h3>
        <form className="flex flex-col max-w-3xl mx-auto">
          <label className="font-serif">Email*</label>
          <input/>
          <label className="font-serif">Message*</label>
          <input/>
          <button className="bg-stone-900 text-white font-serif font-bold mx-auto p-3 rounded-sm m-3">Submit</button>
        </form>
      </div>
      <Footer/>
    </>
  )
}
