import Image from "next/image";
import Navbar from "@/app/ui/navbar";

export default function Home() {
  return (
      <div className="grid grid-rows-3" id="home">
        <Navbar />

        {/* Heropage */}
        <div className="container bg-black-800 p-20 grid grid-cols-1 md:grid-cols-2 gap-4 mt-8" >
          <div className="flex flex-col justify-center">
            <h1 className="text-white text-5xl my-1">Hello, I'm</h1>
            <h1 className="text-white text-5xl my-1"><strong>Miko Ofiaza</strong></h1>
            <h1 className="text-white text-5xl my-1">Software Developer</h1>
            <hr className="my-2 border-t-2 border-solid"/>
            <div>
              <button
                type="button"
                className="inline-block rounded bg-neutral-100 px-4 pb-2 pt-2 text-sm font-bold uppercase leading-normal text-black shadow-light-3 transition duration-150 ease-in-out hover:bg-neutral-200 hover:shadow-light-2 focus:bg-neutral-200 focus:shadow-light-2 focus:outline-none focus:ring-0 active:bg-neutral-200 active:shadow-light-2 motion-reduce:transition-none dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong tracking-wider">
                Download CV 
              </button>
            </div>      
          </div>
          <div className="flex items-center justify-center">
            <Image 
              src={'/Miko.jpg'}
              width={500}
              height={100}
              className="rounded-full aspect-quare object-cover border-8 border-white "
              alt="My picture in Web View"
            />
          </div>  
        </div>

        {/* Skills */}

        <div className="bg-[#3a3636]" id="skills">
          <h1 className="text-white text-center text-5xl font-bold mt-20">Skills</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 ml-8 mr-8 mt-8 gap-10">
              <div
                className="block rounded-lg p-6 text-surface shadow-secondary-1 dark:bg-surface-dark text-white bg-[#3a3636] border border-gray-500">
                <h5 className="mb-2 text-xl font-medium leading-tight">Angular</h5>
                <p className="mb-4 text-base">
                  I specialize in Angular development, building dynamic, responsive, and scalable web applications with a focus on performance, maintainability, and seamless user experiences.
                </p> 
              </div>
              <div
                className="block rounded-lg p-6 text-surface shadow-secondary-1 dark:bg-surface-dark text-white bg-[#3a3636] border border-gray-500">
                <h5 className="mb-2 text-xl font-medium leading-tight">MySQL</h5>
                <p className="mb-4 text-base">
                  Proficient in MySQL, I design and manage optimized databases, ensuring efficient data storage, retrieval, and performance tuning.
                </p> 
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 ml-8 mr-8 mt-8 gap-10">
              <div
                className="block rounded-lg p-6 text-surface shadow-secondary-1 dark:bg-surface-dark text-white bg-[#3a3636] border border-gray-500">
                <h5 className="mb-2 text-xl font-medium leading-tight">Laravel</h5>
                <p className="mb-4 text-base">
                  Experienced in Laravel, I develop maintainable web applications with powerful backend functionality and API integrations.
                </p> 
              </div>
              <div
                className="block rounded-lg p-6 text-surface shadow-secondary-1 dark:bg-surface-dark text-white bg-[#3a3636] border border-gray-500">
                <h5 className="mb-2 text-xl font-medium leading-tight">Video Editing</h5>
                <p className="mb-4 text-base">
                  Skilled in video editing, I create engaging and high-quality content, enhancing visuals with smooth transitions, effects, and storytelling                
                </p> 
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 ml-8 mr-8 mt-8 gap-10 mb-20">
              <div
                  className="block rounded-lg p-6 text-surface shadow-secondary-1 dark:bg-surface-dark text-white bg-[#3a3636] border border-gray-500">
                  <h5 className="mb-2 text-xl font-medium leading-tight">PHP</h5>
                  <p className="mb-4 text-base">
                    I specialize in PHP development, building dynamic and scalable web applications with clean, efficient code and best practices.
                  </p> 
                </div>
                <div
                  className="block rounded-lg p-6 text-surface shadow-secondary-1 dark:bg-surface-dark text-white bg-[#3a3636] border border-gray-500">
                  <h5 className="mb-2 text-xl font-medium leading-tight">Scrum</h5>
                  <p className="mb-4 text-base">
                    Skilled in applying Scrum methodologies to drive agile development, facilitating Sprint Planning, Daily Stand-ups, Reviews, and Retrospectives.                
                  </p> 
                </div>
            </div>
        </div>

        {/* Contact */}
        <div className="p-14" id="contact">
          <h1 className="text-white text-center text-5xl font-bold p-8">Get in Touch</h1>
          <div className="grid grid-cols-1 md:grid-cols-3 mt-14">
            <div>
              <div
                className="block rounded-lg p-6 text-surface shadow-secondary-1 dark:bg-surface-dark text-white bg-[#2d2d2d] border border-gray-500">
                <h5 className="mb-2 text-xl font-medium leading-tight">Send Message</h5>
                <div className="relative mt-4" data-twe-input-wrapper-init>
                  <input
                    type="text"
                    className="peer block min-h-[auto] w-full rounded bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[twe-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-white dark:placeholder:text-neutral-300 dark:autofill:shadow-autofill dark:peer-focus:text-primary [&:not([data-twe-input-placeholder-active])]:placeholder:opacity-0 border border-gray-800 border-b-gray-600"
                    id="exampleFormControlInput1"
                    placeholder="Example label" />
                  <label
                    form="exampleFormControlInput2"
                    className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[twe-input-state-active]:-translate-y-[0.9rem] peer-data-[twe-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-400 dark:peer-focus:text-primary"
                    >Name
                  </label>
                </div>
                <div className="relative mt-4" data-twe-input-wrapper-init>
                  <input
                    type="text"
                    className="peer block min-h-[auto] w-full rounded bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[twe-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-white dark:placeholder:text-neutral-300 dark:autofill:shadow-autofill dark:peer-focus:text-primary [&:not([data-twe-input-placeholder-active])]:placeholder:opacity-0 border border-gray-800 border-b-gray-600"
                    id="exampleFormControlInput2"
                    placeholder="Example label" />
                  <label
                    form="exampleFormControlInput3"
                    className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[twe-input-state-active]:-translate-y-[0.9rem] peer-data-[twe-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-400 dark:peer-focus:text-primary"
                    >Email
                  </label>
                </div>
                <div className="relative mb-3 mt-20" data-twe-input-wrapper-init>
                  <textarea
                    className="peer block min-h-[auto] w-full rounded border border-gray-800 border-b-gray-600 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[twe-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-white dark:placeholder:text-neutral-300 dark:peer-focus:text-primary [&:not([data-twe-input-placeholder-active])]:placeholder:opacity-0"
                    id="exampleFormControlTextarea4"
                    rows={4}
                    placeholder="Your message"></textarea>
                  <label
                    form="exampleFormControlTextarea5"
                    className="pointer-events-none absolute left-3 top-0 bottom-2 mb-0 max-w-[90%] origin-[0_0] truncate pt-[5.25em] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[twe-input-state-active]:-translate-y-[0.9rem] peer-data-[twe-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-400 dark:peer-focus:text-primary"
                    >Message
                  </label>
                </div>
                <div className="text-center">
                  <button
                    type="button"
                    className="inline-block rounded bg-neutral-100 px-4 pb-2 pt-2 text-sm text-black font-bold leading-normal shadow-light-3 transition duration-150 ease-in-out hover:bg-neutral-200 hover:shadow-light-2 focus:bg-neutral-200 focus:shadow-light-2 focus:outline-none focus:ring-0 active:bg-neutral-200 active:shadow-light-2 motion-reduce:transition-none dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong tracking-wider mt-4">
                    Submit Message 
                  </button>
                </div>
              </div>
            </div>
            <div className="hidden md:block w-1 h-100 bg-white mx-auto"></div>
            <hr className="block md:hidden my-4 border-t-2 border-solid mt-10"/>
            <div className="grid grid-rows-10">
              <h1 className="text-white text-2xl">Quick Contact:</h1>
                <span className="text-white">Phone: +63 955 543 9830</span>
                <span className="text-white">Email: mikoofiaza@gmail.com</span>
                <span className="text-white">Address: Artacho, Sison, Pangasinan</span>
            </div>
          </div>
        </div>
        <footer className="bg-[#2d2d2d]">
          <h1 className="text-gray-500 text text-center">@2025 copyright all right reserved</h1>
        </footer>
      </div>      

      
  );
}
