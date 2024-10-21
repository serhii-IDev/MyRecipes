import Image from "next/image"
import Link from "next/link"

export default function FormsLogIn() {

  return (
    <>
      <div className="flex w-full py-5 justify-center max-w-[900px] h-lvh min-h-[650px] max-h-[650px] bg-white rounded-[30px] overflow-hidden max-sm:px-[15px] sm:px-[60px] max-md:flex-col max-md:max-h-full">
        <div className="w-2/4 overflow-y-auto overflow-x-hidden max-md:w-full pe-[50px] max-md:pe-0 max-md:py-[15px] border-e-2 max-md:border-none">
          <form className="flex flex-col h-full items-center pt-[20px] max-md:justify-start space-y-[39px] max-md:space-y-[20px]" action="#" method="POST">
          <div className="w-full max-w-[333px] flex">
              <div className="w-full">
                <label htmlFor="name" className="block text-2xl font-medium leading-6 text-gray-900">
                  Name
                </label>
                <div className="mt-2">
                  <input
                    id="name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    required
                    className="block px-4 w-full max-w-[333px] h-[50px] rounded-[20px] bg-[#efecec] border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400  focus:ring-red-600 sm:text-2xl sm:leading-6"
                  />
                </div>
              </div>
            </div>

            <div className="w-full max-w-[333px] flex">
              <div className="w-full">
                <label htmlFor="email" className="block text-2xl font-medium leading-6 text-gray-900">
                  Email address
                </label>
                <div className="mt-2">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    className="block px-4 w-full max-w-[333px] h-[50px] rounded-[20px] bg-[#efecec] border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400  focus:ring-red-600 sm:text-2xl sm:leading-6"
                  />
                </div>
              </div>
            </div>

            <div className="w-full max-w-[333px] flex">
              <div className="w-full">
                <label htmlFor="password" className="block text-2xl font-medium leading-6 text-gray-900">
                  Password
                </label>
                <div className="mt-2">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    required
                    className="block px-4 w-full max-w-[333px] h-[50px] rounded-[20px] bg-[#efecec] border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400  focus:ring-red-600 sm:text-2xl sm:leading-6"
                  />
                </div>
              </div>
            </div>

            <div className="flex w-full max-w-[333px] justify-between gap-[40px]">
              <button
                type="submit"
                className="flex items-center border-2 w-full justify-center max-w-[145px] h-[50px] rounded-[20px] px-3 py-1.5 text-xl font-semibold leading-6 text-black shadow-sm hover:bg-green-600 hover:text-white focus-visible:outline transition-all focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Log in
              </button>
              <button
                type="reset"
                className="flex items-center border-2 w-full justify-center max-w-[145px] h-[50px] rounded-[20px] px-3 py-1.5 text-xl font-semibold leading-6 text-black shadow-sm  hover:bg-red-700 hover:text-white focus-visible:outline transition-all focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
        <div className="w-2/4 max-md:w-full py-[50px] max-md:py-[15px] ps-[50px] max-md:ps-0 flex flex-col items-center">
          <button className="transition-all mb-[20px] max-md:mb-[10px] relative flex justify-center items-center px-4 w-full max-w-[333px] h-[50px] rounded-[20px] bg-[#efecec] border-0 py-1.5 text-black font-medium text-xl hover:bg-[#dad8d8]">
            <span className="mr-2">Log in with</span>
            <Image
              src='/google.svg'
              alt='google icon'
              width={38}
              height={38}
              className=""
            />
          </button>
          <div className="flex items-center mb-[20px] max-md:mb-[10px] justify-center max-md:hidden">
            <div className="before:content-[''] before:block before:w-[120px] before:h-[1px] before:abolute before:bottom-0 before:bg-[#C6C6C6]">
            </div>
            <span className="text-[#c6c6c6] text-2xl font-medium px-2">Or</span>
            <div className="after:content-[''] after:block after:w-[120px] after:h-[1px] after:abolute after:bottom-0 after:bg-[#C6C6C6]">
            </div>
          </div>
          <button className="flex transition-all justify-center items-center px-4 w-full max-w-[333px] h-[50px] rounded-[20px] bg-[#efecec] border-0 py-1.5 text-black font-medium text-xl hover:bg-[#dad8d8] mb-[35px] max-sm:mb-[10px]">
            <span className="mr-2">Log in with</span>
            <Image
              src='/fb.svg'
              alt='facebook icon'
              width={38}
              height={38}
            />
          </button>
          <Link href={'/'} className="text-[#B56161] transition-all hover:text-[#b55e5e] hover:underline mb-[30px] max-md:mb-0">Create an account</Link>
          <Image
            src='/logo.svg'
            alt="logo"
            width={275}
            height={245}
            className="rotate-12 max-md:hidden"
          />
        </div>
      </div>
    </>
  )
}