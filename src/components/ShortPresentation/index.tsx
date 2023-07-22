import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

interface ShortPresentationProps {
  className?: string;
}

export function ShortPresentation({ className }: ShortPresentationProps) {
  return (
    <section
      className={`flex justify-center items-center flex-col p-14 gap-4 ${className}`}
    >
      <Avatar className="w-28 h-28">
        <AvatarImage
          src="https://github.com/akaigao.png"
          alt="@akaigao"
        ></AvatarImage>
        <AvatarFallback>IG</AvatarFallback>
      </Avatar>
      <span className="text-xs text-gray-600">Wassup, everyone!</span>
      <h1 className="md:text-5xl md:leading-snug text-4xl leading-tight text-white text-center lg:px-52 px-0">
        I'm Igão. I'm a Web Developer and Designer based in Brazil 👋
      </h1>
      <Link className="text-white underline" href={"/"}>
        Let's talk.
      </Link>
    </section>
  );
}
