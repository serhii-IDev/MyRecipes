import Image from "next/image"
import Link from "next/link"


export default function Header() {
    return (
        <header className="bg-[#511212] w-[100%] h-[40px] flex items-center px-4">
            <Link href={'/dashboard/home'}>
                <Image
                    src='/MyRecipes.svg'
                    alt="MyRecipes"
                    width={140}
                    height={35}
                    className="block mt-2"
                />
            </Link>
        </header>
    )
}