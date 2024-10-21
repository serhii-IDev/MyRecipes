
import Header from "@/app/components/header";
import Footer from "@/app/components/footer";
import FormsLogIn from "@/app/components/forms-login";


export default function LogIn() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header/>
      <main className="flex justify-center items-center flex-auto bg-[url('./assets/bg.png')] p-4">
        <FormsLogIn/>
      </main>
      <Footer/>
    </div> 
  );
}