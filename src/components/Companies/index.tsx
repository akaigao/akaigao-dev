import { unbounded } from "@/app/fonts";
import Image from "next/image";
import companies from "./companies";

interface CompaniesProps {
  className?: string;
}

export function Companies({ className }: CompaniesProps) {
  return (
    <section
      className={`flex flex-col justify-center items-center gap-5 h-36 border-t border-b border-solid border-zinc-700 border-opacity-30 bg-zinc-800 bg-opacity-30 mb-4 ${className}`}
    >
      <h2 className={`text-zinc-800 ${unbounded.className} font-black`}>
        ?whyme?
      </h2>
      <div className="flex justify-center items-center flex-row gap-12 max-h-12 w-auto">
        {companies.map((company) => (
          <Image
            className="grayscale w-12 h-auto"
            key={company.id}
            src={company.image}
            alt={company.name}
            width="0"
            height="0"
            sizes="100vw"
          />
        ))}
      </div>
    </section>
  );
}
