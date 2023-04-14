import Image from "next/image"

export default function CoverImage({src, alt, height, width}){
    return(
        <section className="h-full w-full top-0 left-0 inline-block">
            <Image 
            src={src}
            alt={alt}
            height={height}
            width={width}
            sizes="(max-width: 768px) 100vw,
                                    (max-width: 1200px) 50vw,
                                    33vw"/>
        </section>
    )
}