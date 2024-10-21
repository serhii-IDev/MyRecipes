import Footer from "@/app/components/footer"
import HeaderDesk from "@/app/components/header-desk"
import Sidebar from "@/app/components/sidebar"
import Slider from "@/app/components/swiper"


export default function Home() {
    return (
        <div className="flex flex-col min-h-screen">
            <HeaderDesk/>
            <main className="flex flex-auto bg-[url('./assets/bg.png')] relative">
                <Sidebar/>
                <Slider/>
            </main>
            <Footer/>
        </div>
    )
}