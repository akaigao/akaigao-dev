import { AnchorHTMLAttributes, ReactNode } from "react";

interface SocialMediasBoxProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  children: ReactNode;
}

export function SocialMediasBox({ children, ...rest }: SocialMediasBoxProps) {
  return (
    <a {...rest} className={`${rest.className}`}>
      {children}
    </a>
  );
}
