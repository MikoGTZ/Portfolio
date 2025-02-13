import Image from "next/image";
import Navbar from "@/app/ui/navbar";

export default function Home() {
  return (
      <div className="" id="home">
        <Navbar />

        {/* Heropage */}
        <div className="bg-black-800 p-10 md:p-20 grid grid-cols-1 md:grid-cols-2 gap-10 md:mt-10 mb-16 md:mb-7" >
          <div className="flex flex-col mt-20 md:justify-center">
            <h1 className="text-white text-5xl my-1">Hello, I'm</h1>
            <h1 className="text-white text-5xl my-1"><strong>Miko Ofiaza</strong></h1>
            <h1 className="text-white text-5xl my-1">Software Developer</h1>
            <hr className="my-2 border-t-2 border-solid"/>
            <div>
              <a href="/Resume.pdf">
                <button
                  type="button"
                  className="inline-block rounded bg-neutral-100 px-4 pb-2 pt-2 text-sm font-bold uppercase leading-normal text-black shadow-light-3 transition duration-150 ease-in-out hover:bg-neutral-200 hover:shadow-light-2 focus:bg-neutral-200 focus:shadow-light-2 focus:outline-none focus:ring-0 active:bg-neutral-200 active:shadow-light-2 motion-reduce:transition-none dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong tracking-wider">
                  Download CV 
                </button>
              </a>
            </div>      
          </div>
          <div className="md:flex items-center justify-center">
            <Image 
              src={'/Miko.jpg'}
              width={500}
              height={100}
              className="rounded-full aspect-quare object-cover border-8 border-white strokeWidth"
              alt="My picture in Web View"
            />
          </div>  
        </div>

        {/* Skills */}

        <div className="bg-[#3a3636] p-1" id="skills">
          <h1 className="text-white text-center text-5xl font-bold mt-16">Skills</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 ml-8 mr-8 mt-8 gap-10">
              <div
                className="block rounded-lg p-6 text-surface shadow-secondary-1 dark:bg-surface-dark text-white bg-[#3a3636] border border-gray-500">
                <h5 className="mb-2 text-xl font-medium leading-tight flex text-center gap-4">
                  <Image
                  src={'/angularjs.png'}
                  width={35}
                  height={10}
                  className=""
                  alt="Angular"
                  />
                  Angular</h5>
                <p className="mb-4 text-base">
                  I specialize in Angular development, building dynamic, responsive, and scalable web applications with a focus on performance, maintainability, and seamless user experiences.
                </p> 
              </div>
              <div
                className="block rounded-lg p-6 text-surface shadow-secondary-1 dark:bg-surface-dark text-white bg-[#3a3636] border border-gray-500">
                <h5 className="mb-2 text-xl font-medium leading-tight flex text-center gap-4">
                <Image
                  src={'/[CITYPNG.COM]MySQL White Logo PNG Image - 2000x2000.png'}
                  width={35}
                  height={10}
                  className=""
                  alt="Angular"
                  />
                  MySQL</h5>
                <p className="mb-4 text-base">
                  Proficient in MySQL, I design and manage optimized databases, ensuring efficient data storage, retrieval, and performance tuning.
                </p> 
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 ml-8 mr-8 mt-8 gap-10">
              <div
                className="block rounded-lg p-6 text-surface shadow-secondary-1 dark:bg-surface-dark text-white bg-[#3a3636] border border-gray-500">
                <h5 className="mb-2 text-xl font-medium leading-tight flex text-center gap-4">
                <Image
                  src={'/237-2372659_laravel-icon-png-white (1).png'}
                  width={35}
                  height={10}
                  className=""
                  alt="Angular"
                  />
                  Laravel</h5>
                <p className="mb-4 text-base">
                  Experienced in Laravel, I develop maintainable web applications with powerful backend functionality and API integrations.
                </p> 
              </div>
              <div
                className="block rounded-lg p-6 text-surface shadow-secondary-1 dark:bg-surface-dark text-white bg-[#3a3636] border border-gray-500">
                <h5 className="mb-2 text-xl font-medium leading-tight flex text-center gap-4">
                <Image
                  src={'/video-editor-icon-0.jpg'}
                  width={35}
                  height={10}
                  className=""
                  alt="Angular"
                  />
                  Video Editing</h5>
                <p className="mb-4 text-base">
                  Skilled in video editing, I create engaging and high-quality content, enhancing visuals with smooth transitions, effects, and storytelling                
                </p> 
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 ml-8 mr-8 mt-8 gap-10 mb-20">
              <div
                  className="block rounded-lg p-6 text-surface shadow-secondary-1 dark:bg-surface-dark text-white bg-[#3a3636] border border-gray-500">
                  <h5 className="mb-2 text-xl font-medium leading-tight flex text-center gap-4">
                  <Image
                    src={'/php.png'}
                    width={35}
                    height={10}
                    className=""
                    alt="Angular"
                  />
                    PHP</h5>
                  <p className="mb-4 text-base">
                    I specialize in PHP development, building dynamic and scalable web applications with clean, efficient code and best practices.
                  </p> 
                </div>
                <div
                  className="block rounded-lg p-6 text-surface shadow-secondary-1 dark:bg-surface-dark text-white bg-[#3a3636] border border-gray-500">
                  <h5 className="mb-2 text-xl font-medium leading-tight flex text-center gap-4">
                  {/* <Image
                  src={'/'}
                  width={35}
                  height={10}
                  className=""
                  alt=""
                  /> */}
                    Scrum</h5>
                  <p className="mb-4 text-base">
                    Skilled in applying Scrum methodologies to drive agile development, facilitating Sprint Planning, Daily Stand-ups, Reviews, and Retrospectives.                
                  </p> 
                </div>
            </div>
        </div>

        {/* Contact */}
        <div className="p-10" id="contact">
          <h1 className="text-white text-center text-5xl font-bold p-8">Get in Touch</h1>
          <div className="grid md:grid-cols-2">
            <div className="md:mr-20 lg:ml-20">
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
            <hr className="block md:hidden my-4 border-t-2 border-solid mt-10"/>
            <div className="grid md:grid-cols-2">
              <div className="hidden md:block w-1 h-100 bg-white"></div>
                <div className="grid grid-rows-5 md:grid-rows-10 md:-ml-[160px] lg:-ml-[330px]">
                  <h1 className="text-white text-2xl">Quick Contact:</h1>
                    <span className="text-white flex items-center gap-2">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                      </svg>
                    Phone: +63 955 543 9830</span>
                    <span className="text-white flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                    </svg>
                    Email: mikoofiaza@gmail.com</span>
                    <span className="text-white flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                    </svg>
                      Address: Artacho, Sison, Pangasinan</span>
                </div>
            </div>
            
          </div>
        </div>
        <footer className="bg-[#2d2d2d]">
          <h1 className="text-gray-500 text text-center">@2025 copyright all right reserved</h1>
        </footer>
      </div>      
      

      
  );
}
