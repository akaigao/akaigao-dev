import { ReactNode } from "react";

interface ServicesCardBoxProps {
  children: ReactNode;
}

export function ServicesCardBox({ children }: ServicesCardBoxProps) {
  return (
    <div className="flex flex-col items-start text-left text-zinc-400 gap-2 pt-28 p-6 border border-solid border-zinc-700 border-opacity-30 bg-zinc-800 bg-opacity-30">
      {children}
    </div>
  );
}
