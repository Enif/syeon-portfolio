"use client"

import Image from "next/image";
import { useState } from "react";
import Title from "./title";

type NewsInfo = {
  date: string;
  image: string;
  description: string;
}

const newsInfo: NewsInfo[] = [{
  date: "June, 2025",
  image: "/home/news/Jun_2025_pictorial.png",
  description: "Our pictorial 'Designing OWN' received the BP Honorable Mention at C&C 2025👏"
}, {
  date: "March, 2025",
  image: "/home/news/Mar_2025_pictorial.png",
  description: "C&C 2025 Pictorial accepted🎉"
}, {
  date: "January, 2025",
  image: "/home/news/Jan_2025_ailikeme.png",
  description: "Sooyeon joined Ailike.ME as a Product Designer"
}, {
  date: "December, 2024",
  image: "/home/news/Dec_2024_exhibition.jpg",
  description: "Sooyeon participated in exhibition ‘Crossing Over: Innovation and Boundaries’ at Ground Seoul"
}, {
  date: "November, 2024",
  image: "/home/news/Nov_2024_AI_cert.jpg",
  description: "Sooyeon certified in ‘Boost Course <Generative AI 2024>’ by Naver Connect Foundation"
}, {
  date: "October, 2024",
  image: "/home/news/Oct_2024_COGITO.jpg",
  description: "Sooyeon awarded ‘Outstanding Contribution Award’ from COGITO"
}, {
  date: "August, 2024",
  image: "/home/news/Aug_2024_data_science_cert.jpg",
  description: "Sooyeon certified in ‘Boost Course <Data Science 2024> ’ by Naver Connect Foundation"
}, {
  date: "June, 2024",
  image: "/home/news/Jun_2024_defence.jpg",
  description: "Sooyeon successfully defended her M.S. Thesis"
}, {
  date: "December, 2023",
  image: "/home/news/Dec_2023_exhibition.jpg",
  description: "Sooyeon participated in exhibition ‘BLUEPRINT: Feasible Blue’ at ONDREAM SOCIETY"
}, {
  date: "December, 2023",
  image: "/home/news/Dec_2023_presented_ADCO.jpg",
  description: "Sooyeon presented at exhibition ‘Over Load’ at ADCO"
}, {
  date: "December, 2023",
  image: "/home/news/Dec_2023_overload_ADCO.jpg",
  description: "Sooyeon participated in exhibition ‘Over Load’ at ADCO"
}, {
  date: "September, 2023",
  image: "/home/news/Sep_2023_exhibition.jpg",
  description: "Sooyeon participated in online 3D exhibition ‘Art Eternal Light’ at MEUM"
}, {
  date: "April, 2023",
  image: "/home/news/Apr_2023_exhibited_mindterior.jpg",
  description: "Sooyeon exhibited ‘MindTerior’ at demo session of CHI 2023"
}, {
  date: "April, 2023",
  image: "/home/news/Apr_2023_Presented_CHI.jpg",
  description: "Sooyeon presented at CHI 2023"
}, {
  date: "February, 2023",
  image: "/home/news/Feb_2023_Outstading_TA.jpg",
  description: "Sooyeon awarded ‘Outstanding TA Award’ from KAIST Center for Excellence in Learning and Teaching"
}, {
  date: "January, 2023",
  image: "/home/news/Jan_2023_CHI.jpg",
  description: "CHI 2023 Student Game Competition paper Accepted🎉"
}, {
  date: "December, 2022",
  image: "/home/news/Dec_2022_OWN_presented.jpg",
  description: "Sooyeon’s work, OWN is presented at the opening talk of exhibition ‘Inventive Minds and Ideas: Living in the Future’ at DDP"
}, {
  date: "December, 2022",
  image: "/home/news/Dec_2022_exhibition.jpg",
  description: "Sooyeon participated in exhibition ‘Inventive Minds and Ideas: Living in the Future’ at DDP"
}, {
  date: "October, 2022",
  image: "/home/news/Oct_2022_Reddot_websites.jpg",
  description: "Sooyeon awarded ‘Red Dot Award in Brands & Communication Design: Websites’ from Red Dot Design Award 2022"
}, {
  date: "October, 2022",
  image: "/home/news/Oct_2022_Reddot_Digital.jpg",
  description: "Sooyeon awarded ‘Red Dot Award in Brands & Communication Design: Digital Solution’ from Red Dot Design Award 2022"
}, {
  date: "August, 2022",
  image: "/home/news/Aug_2022_dxd.jpg",
  description: "Sooyeon joined DxD Lab in KAIST"
}]

const STEP_COUNT = 8;

export default function News() {

  const [maxVisible, setMaxVisible] = useState(STEP_COUNT);

  return (
    <>
      <div id="about" className="flex justify-center mb-10">
        <div className="w-full lg:w-[1052px] flex flex-col gap-10 px-8 md:px-0">
          <Title title="NEWS" />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5 gap-y-8">
            {
              newsInfo.slice(0, maxVisible).map((news, index) => (
                <div key={index} className="flex flex-col gap-2 md:gap-4">
                  <Image src={news.image} alt={news.date} width={248} height={170} />
                  <p className="text-main-navy text-[13px] md:text-lg font-extrabold">{news.date}</p>
                  <p className="text-main-gray text-[11px] md:text-[15px]">{news.description}</p>
                </div>
              ))
            }
          </div>
          {
            maxVisible < newsInfo.length &&
            <div className="flex justify-center">
              <button onClick={() => setMaxVisible(maxVisible + STEP_COUNT)} className="text-main-navy text-[14px] md:text-lg leading-5 font-extrabold">+<br />More</button>
            </div>
          }
        </div>
      </div>
    </>
  );
}
