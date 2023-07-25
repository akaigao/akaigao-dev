import { unbounded } from "@/app/layout";
import Image from "next/image";
import circle from "../../../public/assets/svg/circle.svg";

export function Contact() {
  return (
    <section className="flex justify-between gap-52 w-auto h-auto py-28 p-14 text-white border-t-2 border-b-2 border-zinc-800">
      <div className="relative">
        <h2
          className={`md:text-5xl md:leading-snug text-4xl leading-tight font-black text-white relative z-50 ${unbounded.className}`}
        >
          Get in touch
        </h2>
        <Image
          className="absolute -right-4 -top-2 z-0"
          src={circle}
          alt="circle"
          width={100}
          height={100}
        />
      </div>
      <div className="flex flex-col gap-4">
        <p className="text-2xl leading-snug text-white">
          Passionate about software development, I love everything related to
          technology. If you think I can help, let's talk about it!
        </p>
        <span className="text-sm tracking-widest text-white">
          <a
            href="mailto:akaigao.dev@gmail.com"
            className="underline font-black"
          >
            akaigao.dev@gmail.com
          </a>{" "}
          or LinkedIn for quick response.
        </span>
      </div>
    </section>
  );
}
