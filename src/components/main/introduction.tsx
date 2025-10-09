import Image from "next/image";

import ExternalLink from "~/components/externalLink";
import { nanumMyeongjo } from "~/app/fonts";

export default function Introduction() {
  return (

    <div id="about" className="w-full flex flex-col items-center gap-14 md:gap-28">
      <Image src="/home/signature.png" alt="signature" width={1920} height={600} priority className="w-full max-w-[1920px] transform lg:scale-[105%]" />

      <div className={`${nanumMyeongjo.className} text-main-gray relative`}>
        <Image src='/home/icons/left_double_quotation.svg' alt="left_double_quotation" width={18} height={18} className="absolute left-0 md:-left-8 top-0 w-3 h-3 md:w-[18px] md:h-[18px] text-red-50" />
        <Image src='/home/icons/right_double_quotation.svg' alt="right_double_quotation" width={18} height={18} className="absolute right-0 md:-right-8 top-0 w-3 h-3 md:w-[18px] md:h-[18px]" />
        <h2 className="text-sm md:text-[1.75rem] md:leading-10 w-80 md:w-full mb-10 font-light text-center">
          Visible things can be invisible.<br />
          However, our powers of thought grasp both the visible and the invisible.
        </h2>
        <p className="text-sm md:text-xl text-center font-light">
          - Rene Magritte -
        </p>
      </div>

      <Image src="/home/profile.png" alt="profile" width={288} height={288} priority className="w-[150px] h-[150px] md:w-[288px] md:h-[288px]" />

      <div className="w-full lg:w-[1320px] px-7 md:px-0 flex flex-col gap-11">
        <p className=" text-main-gray text-sm md:text-lg font-bold text-justify">
          I am Sooyeon Ahn, a designer, interdisciplinary researcher, and artist who loves to explore new knowledge and technologies.
          My goal is to help people live better lives by supporting human cognitive development with science and technology,
          with a strong emphasis on a human-centered design approach. In particular, I have explored how digital interactions
          can enable people to become aware of and manage things that are difficult to perceive, such as emotions or unconscious behaviors.
          I specialize in human-computer interaction (HCI), spatial computing, UX/UI, and interaction design.
          <br />
          <br />
          I am currently a PhD student at the <ExternalLink href="https://www.rca.ac.uk/csrc">Computer Science Research Centre</ExternalLink>, <ExternalLink href="https://www.rca.ac.uk/">Royal College of Art (RCA)</ExternalLink>,
          under the supervision of Professor <ExternalLink href="https://www.linkedin.com/in/asadipour">Ali Asadipour</ExternalLink> and <ExternalLink href="https://www.linkedin.com/in/chang-hee-lee-6a219789">Chang Hee Lee</ExternalLink>.
          
        </p>

        <div className="flex gap-3 items-center">
          <a href="mailto:syeon.studio@gmail.com"><Image src='/home/icons/mail.svg' alt="mail" width={30} height={30} /></a>
          <ExternalLink href="https://www.linkedin.com/in/syeon-studio/"><Image src='/home/icons/lindin.svg' alt="sns" width={30} height={30} /></ExternalLink>
          <ExternalLink href="https://www.instagram.com/syeon.artist/"><Image src='/home/icons/sns.svg' alt="sns" width={30} height={30} /></ExternalLink>
          <ExternalLink href="https://docs.google.com/document/d/1meHxDNIfDQCKbME7GyJ3NO-iSiob5UONCfAd6OTYYGs/edit?usp=sharing"><Image src='/home/icons/cv.svg' alt="cv" width={30} height={30} /></ExternalLink>
        </div>

      </div>
    </div>
  );
}
