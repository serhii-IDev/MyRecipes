import Image from "next/image";
import lunch from '/public/lunch.jpg'

export default function Lunch() {
    return (
        <Image
            alt="lunch"
            src={lunch}
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