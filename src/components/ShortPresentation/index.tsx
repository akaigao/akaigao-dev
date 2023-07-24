import { unbounded } from "@/app/layout";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";

interface ShortPresentationProps {
  className?: string;
}

export function ShortPresentation({ className }: ShortPresentationProps) {
  return (
    <section
      className={`flex justify-center items-center flex-col p-14 gap-4 mx-4 ${className}`}
    >
      <Avatar className="w-28 h-28">
        <AvatarImage
          src="https://github.com/akaigao.png"
          alt="@akaigao"
        ></AvatarImage>
        <AvatarFallback>IG</AvatarFallback>
      </Avatar>
      <span className="text-xs text-zinc-400 tracking-wide">
        Wassup, everyone! I'm Igão. 🤙
      </span>
      <h1
        className={`md:text-5xl md:leading-snug text-4xl leading-tight font-black text-white text-center lg:px-52 px-0 ${unbounded.className}`}
      >
        Developer <br />& Designer.
      </h1>
      <div className="flex items-center gap-4">
        <a
          className="text-white underline tracking-wider"
          href="mailto:akaigao.dev@gmail.com"
        >
          Let's talk.
        </a>
        <Popover>
          <PopoverTrigger className="px-4 p-2 text-zinc-100 bg-transparent border rounded-md border-s-zinc-100 tracking-wide hover:bg-zinc-800 transition">
            Download CV
          </PopoverTrigger>
          <PopoverContent className="flex flex-col gap-2 w-auto h-auto text-zinc-100 bg-zinc-900 border rounded-md border-s-zinc-100 tracking-wide">
            <a
              className="hover:underline transition"
              href="https://docs.google.com/document/d/e/2PACX-1vSDUI6O6Yg_0RDt6_jXv4cVNKwEoYZ03nJlx3F9NNoOdW26yuIkMfJwGZgyiOG_K7vazeNkydK7d8wr/pub"
              target="_blank"
            >
              Portuguese
            </a>
            <a
              className="hover:underline transition-transform"
              href="https://docs.google.com/document/d/e/2PACX-1vS7DtsphALtMsNqNpvPe0DlkDYbHOVi-fmaT5HLLGvKQpvMSpQYNV3Rg_THhxUQ4-HPZruZqurXMZCY/pub"
              target="_blank"
            >
              English
            </a>
          </PopoverContent>
        </Popover>
      </div>
    </section>
  );
}
