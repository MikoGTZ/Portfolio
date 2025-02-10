import Image from "next/image";
import Navbar from "@/app/ui/navbar";

export default function Home() {
  return (
    <div className="grid grid-rows-10 gap-10">
      <div>
      <Navbar />
      </div>
      <div className="container bg-black-800 p-12">
        <h1 className="text-white text-5xl">Hello I'm</h1>
        <h1 className="text-white text-5xl"><strong>Miko Ofiaza</strong></h1>
        <h1 className="text-white text-5xl">Software Developer</h1>
      </div>
    </div>
  );
}
