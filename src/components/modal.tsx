import { PropsWithChildren } from "react";
import { createPortal } from "react-dom";

export default function Modal({ children }: PropsWithChildren) {
  return createPortal(<div className="fixed flex justify-center items-center left-0 top-0 w-full h-full bg-white z-30">{children}</div>, document.body)
}