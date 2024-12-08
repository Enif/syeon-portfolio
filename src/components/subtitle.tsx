import { PropsWithChildren } from "react";

export default function Subtitle({ children }: PropsWithChildren) {
  return (
    <h2 className="text-[#8094FF] text-[28px] font-bold">{children}</h2>
  );
}
