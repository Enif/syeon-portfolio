import Image from "next/image";
import Section from "~/components/section";

const stepData = [
  {
    title: "Observe the Food",
    description: <p>A user picks up the food in a room and <strong>closely observes</strong> its surface and shape</p>,
    image: "/eescape/step1.png",
  },
  {
    title: "Food in New Context",
    description: "The food is placed in unfamiliar contexts, not on the dining table or kitchen.",
    image: "/eescape/step2.png",
  },
]

export default function Design() {
  return (
    <Section subtitle="EE-SCAPE DESIGN">
      <Image className="w-[1215px] max-w-none" src={"/eescape/considerations_to_solutions.png"} alt="considerations_to_solutions" width={1215} height={650} />
      <h3 className="text-2xl">Four Steps of EE-Scape</h3>
      <p>Through iterative discussion with a mindfulness meditation expert, we designed four mindful steps of the VR application, EE-Scape,</p>

      <div className="grid grid-cols-2">
        {
          stepData.map((step, index) => (
            <div key={index} className="flex flex-col gap-4">
              <Image src={step.image} alt={step.title} width={515} height={300} />
              <div className="text-[#CDD5FF]">
                <p>Step {index + 1}</p>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </div>
            </div>
          ))
        }
      </div>

    </Section>
  );
}
