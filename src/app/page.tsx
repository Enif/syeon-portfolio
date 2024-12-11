import Image from "next/image";
import Header from "~/components/main/header";
import Introduction from "~/components/main/introduction";
import News from "~/components/main/news";
import Projects from "~/components/main/projects";
import Artworks from "~/components/main/artworks";
import Contact from "~/components/main/contact";
import Footer from "~/components/main/footer";

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
        <Footer />
      </div>
    </div>
  );
}
