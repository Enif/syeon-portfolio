import Image from "next/image";
import Section from "~/components/section";

export default function TargetUser() {
  return (
    <Section subtitle="TARGET USER">
      <div>
        <p>From advice of eating disorder experts, we set research subjects to those who emotionally eat at night at home.</p>
        <Image src={"/eescape/target_user.png"} alt="graph" width={1060} height={500} />
      </div>
    </Section>
  );
}
