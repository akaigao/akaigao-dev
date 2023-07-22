interface ServicesCardTitleProps {
  children: string;
}

export function ServicesCardTitle({ children }: ServicesCardTitleProps) {
  return <h3>{children}</h3>;
}
