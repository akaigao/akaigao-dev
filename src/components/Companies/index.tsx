import Image, { StaticImageData } from "next/image";
import companies from "./companies";

interface CompaniesProps {
  url: StaticImageData;
  alt: string;
}

export const Companies = () => {
  return (
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
  );
};
