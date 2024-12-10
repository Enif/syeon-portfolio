import Image from "next/image";
import Header from "./header";
import Introduction from "./introduction";
import News from "./news";
import Projects from "./projects";
import Artworks from "./artworks";
import Contact from "./contact";

// style={{ objectFit: "cover", display: "block" }}
export default function Home() {
  return (
    <div>
      <Header />
      <div className="w-full flex flex-col gap-20 pt-32">
        <Introduction />
        <Image src="/home/divider.png" alt="divider" width={1350} height={60} className="mb-10" />
        <News />
        <div className="flex w-full">
          <Image src="/home/divider.png" alt="divider" width={1350} height={60} className="ml-auto" />
        </div>
        <Projects />
        <Artworks />
        <Contact />
      </div>
    </div>
  );
}
