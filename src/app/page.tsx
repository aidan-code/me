import Hero from "@/components/Home/hero";
import Bento from "@/components/Home/Bento";
import { About } from "@/components/Home/About";
import Project from "@/components/Home/Project";
import Footer from "@/components/footer";
import { Extras } from "@/components/Home/Extras";
import { Stacks } from "@/components/Home/Stacks";

export default function Home() {
  return (
    <>
      <div className="w-full flex flex-col justify-center items-center ">
        <div className="w-[90%] md:w-[80%]">
          <Hero />
          <About />
          <Stacks />
          <Project />
          <Bento />

          <Extras />
        </div>
      </div>
      <Footer />
    </>
  );
}
