import { ReactNode } from "react";

interface SocialMediasRootProps {
  children: ReactNode;
  className?: string;
}

export function SocialMediasRoot({
  children,
  className,
}: SocialMediasRootProps) {
  return (
    <div className={`flex flex-row gap-4 text-xs ${className}`}>{children}</div>
  );
}
