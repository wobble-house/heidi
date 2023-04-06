export default function Header({children}:{children: any}){
    return(
        <>
        <header>
            <h2 className="text-6xl mx-auto text-center text-heiditext uppercase font-sans">{children}</h2>
        </header>
    </>
    )
}