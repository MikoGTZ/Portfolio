import Image from "next/image";
import Navbar from "@/app/ui/navbar";

export default function Home() {
  return (
    <div className="grid grid-rows-10">
      <Navbar />
      
      <div className="container bg-black-800 p-20 grid grid-cols-2 gap-4">
        <div className="flex flex-col justify-center">
          <h1 className="text-white text-5xl my-1">Hello, I'm</h1>
          <h1 className="text-white text-5xl my-1"><strong>Miko Ofiaza</strong></h1>
          <h1 className="text-white text-5xl my-1">Software Developer</h1>
          <hr className="my-2 border-t-2 border-solid"/>
          <div>
            <button
              type="button"
              className="inline-block rounded bg-neutral-100 px-4 pb-2 pt-2 text-sm font-medium uppercase leading-normal text-neutral-600 shadow-light-3 transition duration-150 ease-in-out hover:bg-neutral-200 hover:shadow-light-2 focus:bg-neutral-200 focus:shadow-light-2 focus:outline-none focus:ring-0 active:bg-neutral-200 active:shadow-light-2 motion-reduce:transition-none dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong">
              Download CV 
            </button>
          </div>
          
        </div>
        <div className="flex items-center justify-center">
          <Image 
            src={'/Miko.jpg'}
            width={500}
            height={100}
            className="rounded-full aspect-quare object-cover border-8 border-white"
            alt="My picture in Web View"
          />
          
        </div>  
        
      </div>
      
    </div>
  );
}
