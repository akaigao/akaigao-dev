import { ReactNode } from "react";

interface SocialMediasTextProps {
  children: ReactNode;
  className?: string;
}

export function SocialMediasText({
  children,
  className,
}: SocialMediasTextProps) {
  return <span className={`${className}`}>{children}</span>;
}
