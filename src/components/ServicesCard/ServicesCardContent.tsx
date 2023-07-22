interface ServicesCardContentProps {
  children: string;
  className?: string;
}

export function ServicesCardContent({
  children,
  className,
}: ServicesCardContentProps) {
  return <p className={`text-xs ${className}`}>{children}</p>;
}
