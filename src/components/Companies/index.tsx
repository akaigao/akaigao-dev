import Image from "next/image";
import companies from "./companies";

interface CompaniesProps {
  className?: string;
}

export const Companies = ({ className }: CompaniesProps) => {
  return (
    <div
      className={`flex justify-center items-center h-36 border-t border-b border-solid border-gray-700 bg-gray-800 mb-4 ${className}`}
    >
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
    </div>
  );
};
