import Image from "next/image";
import Link from "next/link";
import { ReactElement } from "react";
import ExternalLink from "~/components/externalLink";

type Project = {
  image: string;
  title: string;
  date: string;
  authors: ReactElement
  description: string;
  attachment: string;
  link: ReactElement;
}

const projects: Project[] = [{
  image: "/home/projects/eescape_thumbnail.jpg",
  title: "EE-SCAPE",
  date: "(2024)",
  authors: <><strong>Sooyeon Ahn</strong>, Eunmi Kim, Hwajung Hong</>,
  description: "EE-Scape is a VR mindfulness application that alleviates impulsive eating triggered by emotional 	reasons. Our preliminary studies indicated that most emotional eaters reflect some meanings to the food(e.g., a friend comforting me). To deal with these emotional bonds, EE-SScape provides a novel	virtual food experience that allows users to perceive the food differently and reflect on their	emotional eating habits.",
  attachment: "/home/projects/EE-SCAPE.pdf",
  link: <>Link to <ExternalLink href="https://www.youtube.com/watch?v=mELfwn39ws0">Video</ExternalLink></>
}, {
  image: "/home/projects/mindbattery_thumbnail.jpg",
  title: "MindBattery",
  date: "(2022-2024)",
  authors: <>Kwangyoung Lee, <strong>Sooyeon Ahn</strong>, Jong-ok Hong, Jaehyun Lim, Namgoo Park, Uichin Lee, Hwajung Hong</>,
  description: "MThe fast-paced and demanding nature of call center work prevents ability from recognizing worker's emotional states. In this study, we developed MindBattery, a smartphone application designed to support the emotional well-being by using a battery analogy to help call center workers gauge their emotional energy depletion and provide a set of microbreaks for emotional recovery.",
  attachment: "/home/projects/EE-SCAPE.pdf",
  link: <>Link to <ExternalLink href="https://www.youtube.com/watch?v=mELfwn39ws0">Video</ExternalLink></>
}, {
  image: "/home/projects/minterior_thumbnail.jpg",
  title: "MindTerior",
  date: "(2022-2023)",
  authors: <>Ain Lee, Juhyun Lee, <strong>Sooyeon Ahn</strong>, Youngik Lee  <span className="text-[10px]">*All contributed <strong>equally</strong> to this work.</span></>,
  description: "MindTerior is a mental health care game for people with mild emotional difficulties. It analyzes each	player's emotional state and shows the results as visual elements in the game space. It also suggests a gamified evidence-based mental health care activity that allows players to cope with their emotional problems.",
  attachment: "/home/projects/EE-SCAPE.pdf",
  link: <>Link to <ExternalLink href="https://dl.acm.org/doi/10.1145/3544549.3583831">Publication</ExternalLink>, <ExternalLink href="https://www.youtube.com/watch?v=k9af8ILsWTY">Video</ExternalLink></>
}, {
  image: "/home/projects/own_thumbnail.jpg",
  title: "OWN",
  date: "(2021-2022)",
  authors: <><strong>Sooyeon Ahn</strong>, Heeyoung Beak, Gill Son, Dongbum Kim</>,
  description: "OWN is a 3D virtual space that elaborately visualizes the abstract and invisible inner world. It was dedicatedly tailor-designed for just one person(OWNer) through in-depth psychological analysis. The psychologists suggest various therapeutic elements, which the designer visualizes as space in the virtual world. OWN 	comprises synaesthetic elements based on color psychology, environmental psychology, and art therapy to help calm the mind.",
  attachment: "/home/projects/EE-SCAPE.pdf",
  link: <>Link to <ExternalLink href="https://www.youtube.com/watch?v=E8U6nVeSfrU">Video</ExternalLink></>
}, {
  image: "/home/projects/mindroom_thumbnail.jpg",
  title: "Mind-room",
  date: "(2020)",
  authors: <><strong>Sooyeon Ahn</strong>, Youngjae Kim, Minha Kang</>,
  description: "Mind-room is an online test designed to increase people's awareness of their emotional state. It analyzes each user's emotional state based on how they react to various situations during a virtual journey, then suggests an emotionally calming room designed based on various theories such as color psychology and art therapy.",
  attachment: "/home/projects/EE-SCAPE.pdf",
  link: <>Link to <ExternalLink href="https://mind-room.syeon.studio/">Mind-room</ExternalLink>, <ExternalLink href="https://www.red-dot.org/project/mind-room-61156">Red Dot 2022</ExternalLink></>
}, {
  image: "/home/projects/forethestarved_thumbnail.jpg",
  title: "For the STARved",
  date: "(2021)",
  authors: <><strong>Sooyeon Ahn</strong>, Youngjae Kim, Doeun Kim, Seojin Park, Seungyun Oh, Minha Kang, Wootae Kim</>,
  description: "For the STARved is an astrophotography exhibition held in an online 3D virtual space. It allows	people starved of stars due to the pandemic to freely explore beautiful and fantastic galleries and watch astrophotographs taken by club members.",
  attachment: "/home/projects/EE-SCAPE.pdf",
  link: <> Link to <ExternalLink href="https://exhibition39.snuaaa.net/">For the STARved</ExternalLink>, <ExternalLink href="https://www.red-dot.org/ko/project/for-the-starved-61090">Red Dot 2022</ExternalLink>, <ExternalLink href="https://www.youtube.com/watch?v=fyozL9qou4w">Video</ExternalLink></>
}]


export default function Projects() {
  return (
    <div id="projects" className="flex justify-center">
      <div className="w-[1052px]">
        <h2 className="text-main-navy text-3xl mb-10 font-extrabold tracking-widest">Projects</h2>
        {
          projects.map((project) => (
            <div key={project.title} className="flex gap-5 mb-10 even:flex-row-reverse">
              <div className="flex flex-col gap-2 px-6 justify-center text-main-gray">
                <div className="flex gap-[10px] items-center">
                  <h3 className="text-xl font-extrabold">{project.title}</h3>
                  <p className="">{project.date}</p>
                </div>
                <p className="text-xs">{project.authors}</p>
                <p className="text-[15px] text-justify">{project.description}</p>
                <div className="flex justify-between">
                  <Link target="_blank" href={project.attachment} className="text-main-navy font-bold">+ View Details</Link>
                  <p className="font-bold text-main-gray100">
                    {project.link}
                  </p>
                </div>
              </div>
              <div className="shrink-0">
                <Image src={project.image} alt={project.title} width={515} height={350} className="object-cover w-full h-full" />
              </div>
            </div>
          ))
        }
      </div>
    </div>
  );
}