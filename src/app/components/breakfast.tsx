import Image from "next/image";
import breakfast from '/public/breakfast.jpg'

export default function Breakfast() {
    return (
        <Image
            alt="breakfast"
            src={breakfast}
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