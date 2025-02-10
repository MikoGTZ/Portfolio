import Image from "next/image";
import Navbar from "@/app/ui/navbar";

export default function Home() {
  return (
      <div className="grid grid-rows-10 p-14" >
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
                className="inline-block rounded bg-neutral-100 px-4 pb-2 pt-2 text-sm font-medium uppercase leading-normal text-neutral-600 shadow-light-3 transition duration-150 ease-in-out hover:bg-neutral-200 hover:shadow-light-2 focus:bg-neutral-200 focus:shadow-light-2 focus:outline-none focus:ring-0 active:bg-neutral-200 active:shadow-light-2 motion-reduce:transition-none dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong tracking-wider">
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

        <div className="bg-gray-700">
          <h1 className="text-white text-center text-5xl font-bold mt-8">Skills</h1>
            <div className="grid grid-cols-2 p-8">
              <div
                className="block rounded-lg p-6 text-surface shadow-secondary-1 dark:bg-surface-dark text-white bg-gray-700 border border-gray-500">
                <h5 className="mb-2 text-xl font-medium leading-tight">Angular</h5>
                <p className="mb-4 text-base">
                  I specialize in Angular development, building dynamic, responsive, and scalable web applications with a focus on performance, maintainability, and seamless user experiences.
                </p> 
              </div>
              <div
                className="block rounded-lg p-6 text-surface shadow-secondary-1 dark:bg-surface-dark text-white bg-gray-700 border border-gray-500">
                <h5 className="mb-2 text-xl font-medium leading-tight">MySQL</h5>
                <p className="mb-4 text-base">
                  Proficient in MySQL, I design and manage optimized databases, ensuring efficient data storage, retrieval, and performance tuning.
                </p> 
              </div>
            </div>
            <div className="grid grid-cols-2 p-8">
              <div
                className="block rounded-lg p-6 text-surface shadow-secondary-1 dark:bg-surface-dark text-white bg-gray-700 border border-gray-500">
                <h5 className="mb-2 text-xl font-medium leading-tight">Laravel</h5>
                <p className="mb-4 text-base">
                  Experienced in Laravel, I develop maintainable web applications with powerful backend functionality and API integrations.
                </p> 
              </div>
              <div
                className="block rounded-lg p-6 text-surface shadow-secondary-1 dark:bg-surface-dark text-white bg-gray-700 border border-gray-500">
                <h5 className="mb-2 text-xl font-medium leading-tight">Video Editing</h5>
                <p className="mb-4 text-base">
                  Skilled in video editing, I create engaging and high-quality content, enhancing visuals with smooth transitions, effects, and storytelling                
                </p> 
              </div>
            </div>
            <div className="grid grid-cols-2 p-8">
              <div
                  className="block rounded-lg p-6 text-surface shadow-secondary-1 dark:bg-surface-dark text-white bg-gray-700 border border-gray-500">
                  <h5 className="mb-2 text-xl font-medium leading-tight">PHP</h5>
                  <p className="mb-4 text-base">
                    I specialize in PHP development, building dynamic and scalable web applications with clean, efficient code and best practices.
                  </p> 
                </div>
                <div
                  className="block rounded-lg p-6 text-surface shadow-secondary-1 dark:bg-surface-dark text-white bg-gray-700 border border-gray-500">
                  <h5 className="mb-2 text-xl font-medium leading-tight">Scrum</h5>
                  <p className="mb-4 text-base">
                    Skilled in applying Scrum methodologies to drive agile development, facilitating Sprint Planning, Daily Stand-ups, Reviews, and Retrospectives.                
                  </p> 
                </div>
            </div>
        </div>
      </div>      
  );
}
