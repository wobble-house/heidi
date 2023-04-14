import Image from "next/image"
import MyNavbar from "@/components/navbar"

export default function About() {
  return (
    <>  
        <MyNavbar inverttext={false} />
        <div className="py-64 flex flex-col md:flex-row gap-20 max-w-7xl px-5 mx-auto justify-center">
          <div className="relative max-w-sm">
          <Image src="/images/Heidi+Vasterling-Ford.jpg" 
          alt="heidi photo"
          width={500}
          height={545}
          sizes="(max-width: 768px) 100vw,
                      (max-width: 1200px) 50vw,
                      33vw"
          /></div>
          <div className="max-w-lg">
          <p className="font-serif font-thin text-lg leading-10 tracking-wider">I am an artist based in Chattanooga, TN. 
            My current body of work is an effort to 
            explore the poetry and mystery of solitude, 
            while simultaneously emphasizing my process 
            which evolves to become gentler on the earth. 
            The works are created from: hot baths of food 
            scraps; spices muddled with water; stamps 
            of repurposed cork.</p>
            </div>
            
        </div>
        <div>
            <h2 className="mx-auto text-center text-5xl font-sans max-w-4xl">“ONE&apos;S ART GOES AS FAR AND AS DEEP AS ONE&apos;S LOVE GOES.” ANDREW WYETH</h2>
          </div>
    </>
  )
}
