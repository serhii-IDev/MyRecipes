import Image from "next/image"
import Link from "next/link"

export default function HeaderDesk() {
    return (
        <header className="bg-[#511212] w-[100%] h-[40px] flex items-center px-4 justify-between">
            <div className="flex items-center">
                <Link href={'/dashboard/home'}>
                    <Image
                        src='/MyRecipes.svg'
                        alt="sdsdsdsdsddsd"
                        width={140}
                        height={35}
                        className="block mt-2"
                    />
                </Link>
            </div>
            <Link href={'/profile'}>
                <Image
                    src='/Profile.svg'
                    alt="sdsdsdsdsddsd"
                    width={33}
                    height={33}
                    className="block"
                />
            </Link>        
        </header>
    )
}