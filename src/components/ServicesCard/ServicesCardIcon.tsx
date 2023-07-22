import { ElementType } from "react";

interface ServicesCardIconProps {
  icon: ElementType;
  className?: string;
}

export function ServicesCardIcon({
  icon: Icon,
  className,
}: ServicesCardIconProps) {
  return <Icon className={`w-6 max-h-6 ${className}`} />;
}
