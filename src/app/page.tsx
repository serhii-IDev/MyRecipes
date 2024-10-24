
import Header from "./components/header";
import Footer from "./components/footer";
import FormsSignUp from "./components/forms-signup";



export default function SignUp() {

  return (
    <div className="flex flex-col min-h-screen">
      <Header/>
      <main className="flex justify-center items-center flex-auto bg-[url('./assets/bg.png')] p-4">
        <FormsSignUp/>
      </main>
      <Footer/>
    </div> 
  );
}
