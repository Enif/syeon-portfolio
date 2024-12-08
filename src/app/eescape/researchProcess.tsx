import Section from "~/components/section";
import Image from "next/image";

const processSummaryData = [
  {
    title: "1. Preliminary Study",
    items: [
      { text: "Eating Disorder Experts Interviews" },
      { text: "Emotional Eater Survey" },
      { text: "Participatory Design Workshop" },
    ],
    goal: [
      "Understand the context of emotional eating",
      "Derive Design Considerations"
    ]
  },
  {
    title: "2. Design Considerations",
    items: [
      { text: "Data Analysis" },
      { text: "Define Design Considerations" },
    ],
  },
  {
    title: "3. EE-Scape Design",
    items: [
      { text: "Design Considerations to Solutions" },
      {
        text: "VR prototype development",
        caption: "Implement a mobile VR prototype by using Unreal Engine 5.1, a game engine"
      },
    ],
  },
  {
    title: "4. User Test",
    items: [
      { text: "Pre-questionnaire" },
      { text: "EE-scape experience" },
      { text: "Post-questionnaire" },
      { text: "1:1 Interview" },
    ],
    goal: [
      "Understand user reflections on the VR prototype",
      "Potential and improvements of our approach to regulate emotional eating"
    ]
  },
];

const processDetailData = [
  {
    title: "Eating Disorder Experts Interviews",
    description: <p>1:1 interviews with two experts on eating disorders aimed to understand the <strong>characteristics and problems of emotional eating and get advice to define research targets.</strong>
      <br />
      <br />
      We asked how we distinguish emotional eaters from eating disorder patients, how eating disorders are different from other mental health concerns, and what interventions have been applied.</p>,
    image: "/eescape/expert_interview.png",
    caption: "Photo of eating disorder expert interview"
  },
  {
    title: "Emotional Eater Survey",
    description: <p>Emotional eater surveys aimed to identify the <strong>context and pattern of emotional night eating.</strong>
      <br />
      <br />
      We asked <strong>how often and why</strong> they craved food at night, <strong>how they responded</strong> to it, what <strong>specific food</strong> they craved, and how emotionally eating at night affects their feelings and thinking.
      <br />
      <br />
      A total of 31 responses were gathered from 21 females (age M = 25.5 years, SD = 7.5) and 10 males (age M = 24.2 years, SD = 4.3)</p>,
    image: "/eescape/eater_survey.png",
    caption: "Screenshot of affinity diagram and themetic analysis"
  }, {
    title: "Participatory Design Workshop",
    description: <p>Participatory design workshop with nine emotional night eaters, six females (age M = 25.3 years, SD = 3.7) and three males (age M = 22.7 years, SD = 4.0) aimed to <strong>define user needs for a VR intervention.</strong>
      <br />
      <br />
      Each participant shared their emotional eating patterns and designed <strong>a virtual experience that helps overcome food cravings.</strong></p>,
    image: "/eescape/design_workshop.png",
    caption: "Screenshot of participatory design workshop"
  }, {
    title: "Data Analysis",
    description: <p>Three researchers analyzed all the data collected by preliminary studies and then <strong>defined design considerations.</strong></p>,
    image: "/eescape/data_analysis.png",
    caption: "Screenshot of thematic analysis"
  },
]

export default function ResearchProcess() {
  return (
    <Section subtitle="RESEARCH PROCESS">
      <div className="grid grid-cols-4 gap-5">
        {processSummaryData.map((item, index) => (
          <div key={index} className="flex flex-col">
            <h3 className="text-xl mb-5">{item.title}</h3>
            <ul className="text-[#8094FF]">
              {item.items.map((subItem, index) => (
                <li key={index} className="text-sm leading-7 font-bold">
                  - {subItem.text}
                  {'caption' in subItem && <p className="block w-full text-[10px] text-left leading-4">{subItem.caption}</p>}
                </li>
              ))}
            </ul>
            {item.goal && (
              <div className="mt-auto text-[#CDD5FF]">
                <h4 className="text-xs font-bold leading-4">Goal</h4>
                <ol className="text-[10px] leading-4">
                  {item.goal.map((goal, index) => (
                    <li key={index}>{`${index + 1}. ${goal}`}</li>
                  ))}
                </ol>
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="grid grid-cols-2 gap-x-2 gap-y-[60px]">
        {processDetailData.map((item, index) => (
          <div key={index} className="flex flex-col">
            <h3 className="text-xl font-bold mb-2 text-[#8094FF]">{item.title}</h3>
            <div className="mb-5 text-[#CDD5FF]">
              {item.description}
            </div>
            <div className="mt-auto">
              <Image src={item.image} alt={item.title} width={516} height={301} className="mb-1" />
              <p className="block w-full text-[10px] text-left leading-4 text-[#CDD5FF]">{item.caption}</p>
            </div>
          </div>
        ))
        }
      </div>
    </Section>
  );
}
