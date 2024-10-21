import Image from "next/image";
import dinner from '/public/dinner.jpg'

export default function Dinner() {
    return (
        <Image
            alt="dinner"
            src={dinner}
            quality={100}
            fill
            sizes="100vw"
            style={{
                objectFit: 'cover',
                zIndex: '-10'
            }}
        />
    )
}