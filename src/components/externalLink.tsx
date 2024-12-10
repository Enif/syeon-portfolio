import { AnchorHTMLAttributes, PropsWithChildren } from "react";

export default function ExternalLink({ children, ...props }: PropsWithChildren<AnchorHTMLAttributes<HTMLAnchorElement>>) {
  return (
    <a target="_blank" rel="noopener noreferrer" {...props} className="underline">
      {children}
    </a>
  );
}