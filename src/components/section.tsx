import { PropsWithChildren } from "react";
import Subtitle from "~/components/subtitle";

type Props = {
  subtitle: string;
}

export default function Section({ subtitle, children }: PropsWithChildren<Props>) {
  return (
    <div className="flex flex-col w-[1060px] gap-[60px]">
      <Subtitle>{subtitle}</Subtitle>
      {children}
    </div>
  );
}
