import Background from "./background";
import Design from "./design";
import DesignConsiderations from "./designConsiderations";
import Main from "./main";
import ResearchProcess from "./researchProcess";
import TargetUser from "./targetUser";

export default function Home() {
  return (
    <div className="flex flex-col gap-[150px] items-center bg-[#1E2340] text-[#FFFFFF]" >
      <Main />
      <Background />
      <TargetUser />
      <ResearchProcess />
      <DesignConsiderations />
      <Design />
    </div >
  );
}
