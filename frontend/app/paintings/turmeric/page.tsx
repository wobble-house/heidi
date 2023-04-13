import MyNavbar from "../../../components/navbar";
import Footer from "../../../components/footer";
import MyPaintings from "../paintings";

export const dynamic = 'force-dynamic',
  dynamicParams = true,
  revalidate = false,
  fetchCache = 'auto',
  runtime = 'nodejs',
  preferredRegion = 'auto'
  
export default function Turmeric() {

  return (
    <>  
      <MyNavbar bgcolor="bg-transparent"/>
      <div className="py-32 mx-auto">
      <h2 className="max-w-7xl text-left mx-auto text-6xl text-heiditext px-8 uppercase font-sans">TURMERIC PAINTINGS</h2>
      </div>
      <div className="mx-auto grid grid-cols-0 md:grid-cols-3 max-w-7xl px-8 gap-8 pb-64">
        <p className="font-serif font-thin text-sm leading-6 tracking-wider">
          The Turmeric Paintings are both a rebirth and a death. 
          They are a fleeting grasp at control, and a complete 
          rejection of the notion. They are paradoxically a 
          simple painting of a single shape, and a complicated 
          series of abstract questions about unity, eternity, 
          wholeness, social justice+behavior, and transformation. 
          How can artists bring new objects into the world in a 
          less damaging way to the environment? What does unity 
          produce? When does tranquility stop and start? 
          What must the animals think of us? How could I create 
          a painting about gratitude?It all begins with an idea. 
          Maybe you want to launch a business. Maybe you want to 
          turn a hobby into something more. Or maybe you have a 
          creative project to share with the world. Whatever it is, 
          the way you tell your story online can make all the difference.
          </p>
        <p className="font-serif font-thin text-sm leading-6 tracking-wider">
          So through the process of making the work I wrestle 
          with the questions. By utilizing the disregarded 
          scraps of my fruits and vegetables to dye the fabric, 
          I attempt to make things that are both bountiful, and 
          a bit more tender on the earth. An act of wholeness to 
          depict the imagery of wholeness. A ceramic bowl, a few 
          drops of water, a dash of the rich yellow spice, and 
          the process is initiated.Don&apos;t worry about sounding 
          professional. Sound like you. There are over 1.5 
          billion websites out there, but your story is what&apos;s 
          going to separate this one from the rest. If you read 
          the words back and don&apos;t hear your own voice in your 
          head, that&apos;s a good sign you still have more work to do.
          </p>
        <p className="font-serif font-thin text-sm leading-6 tracking-wider">
          Turmeric root has a long history of being used as both
           a pigment and a medicine. It becomes a symbol for: 
           a celebration of the earth&apos;s bounty, a gift of 
           healing, a flash of cautionary yellow. 
           
           Additional uses: stand in front of the painting. 
           As you consider each unique circle/shape consider 
           something or someone you are grateful for
           </p>
      </div>

<MyPaintings CollectionName={"Turmeric Paintings"}/>
      <Footer/>
    </>
  )
}
