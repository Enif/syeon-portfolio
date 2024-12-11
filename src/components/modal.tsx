import { PropsWithChildren, useEffect } from "react";
import { createPortal } from "react-dom";

export default function Modal({ children }: PropsWithChildren) {

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'auto';
    }
  }, [])

  return createPortal(<div className="fixed flex justify-center items-center left-0 top-0 w-full h-full bg-white z-30">{children}</div>, document.body)
}