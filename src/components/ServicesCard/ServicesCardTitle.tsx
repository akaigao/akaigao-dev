interface ServicesCardTitleProps {
  children: string;
}

export function ServicesCardTitle({ children }: ServicesCardTitleProps) {
  return <h5>{children}</h5>;
}
