import Image from "next/image";
import Section from "~/components/section";

export default function Background() {
  return (
    <Section subtitle="BACKGROUND">
      <div>
        <h3>Emotional Eating</h3>
        <div className="flex">
          <p className="w-[650px] mt-[30px]">
            <b>Emotional eating (EE)</b> is food consumption based on emotional factors such as stress or pleasure rather than physical hunger. Unlike normal appetite, this self-rewarding behavior is characterized by a desire for certain foods. Many emotional eaters are concerned about their weight gain and feel guilty.<br />
            Perpetuating this vicious cycle of stress leads to further emotional eating and can become severe eating disorders.
          </p>
          <Image src={"/eescape/eecycle.png"} alt="eecycle" width={380} height={280} />
        </div>
        <Image src={"/eescape/graphs.png"} alt="graph" width={1060} height={500} />
      </div>

    </Section>
  );
}
