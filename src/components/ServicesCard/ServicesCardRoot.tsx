import { ReactNode } from "react";

interface ServicesCardRootProps {
  children: ReactNode;
}

export function ServicesCardRoot({ children }: ServicesCardRootProps) {
  return (
    <div className="grid md:grid-cols-4 grid-cols-2 gap-2 py-20 text-white">
      {children}
    </div>
  );
}
