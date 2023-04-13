import Link from "next/link";

export default function Footer(){
    return(
        <>
        <footer className="md:fixed bottom-0 w-full bg-heidibg pb-20">
            <div className="flex flex-col mx-auto text-center text-sm relative font-serif text-zinc-500">
                <Link href="/shop" className="underline">Shop</Link>
                <Link href="/about" className="underline">About</Link>
                <Link href="mailto:heidi@heidivf.com" className="pt-5">heidi@heidivf.com</Link>
                <Link href="tel:4233096858">(423) 3096858</Link>
            </div>
        </footer>
    </>
    )
}