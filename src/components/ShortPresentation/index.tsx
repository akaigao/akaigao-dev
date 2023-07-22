import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

interface ShortPresentationProps {
  className?: string;
}

export const ShortPresentation = ({ className }: ShortPresentationProps) => {
  return (
    <div
      className={`flex justify-center items-center flex-col p-10 gap-4 ${className}`}
    >
      <Avatar className="w-28 h-28">
        <AvatarImage
          src="https://github.com/akaigao.png"
          alt="@akaigao"
        ></AvatarImage>
        <AvatarFallback>IG</AvatarFallback>
      </Avatar>
      <span className="text-xs text-gray-600">Wassup, everyone!</span>
      <h1 className="text-3xl text-white text-center px-10">
        I'm Igão. I'm a Web Developer and Designer based in Brazil 👋
      </h1>
      <Link className="text-white underline" href={"/"}>
        Let's talk.
      </Link>
    </div>
  );
};
