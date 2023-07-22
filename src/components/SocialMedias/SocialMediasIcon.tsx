import { ElementType } from "react";

interface SocialMediasIconProps {
  icon: ElementType;
  className?: string;
}

export function SocialMediasIcon({
  icon: Icon,
  className,
}: SocialMediasIconProps) {
  return <Icon className={`w-6 max-h-6 ${className}`} />;
}
