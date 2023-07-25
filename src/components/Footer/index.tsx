import { unbounded } from "@/app/layout";
import { Github, Image, Instagram, Linkedin } from "lucide-react";
import { SocialMedias } from "../SocialMedias";

export function Footer() {
  const currentYear: number = new Date().getFullYear();
  return (
    <footer className="flex flex-col items-center justify-between gap-4 p-14 lowercase tracking-widest text-zinc-400">
      <SocialMedias.Root>
        <SocialMedias.Box
          href="https://www.linkedin.com/in/akaigao"
          target="_blank"
        >
          <SocialMedias.Icon icon={Linkedin} />
        </SocialMedias.Box>
        <SocialMedias.Box href="https://www.github.com/akaigao" target="_blank">
          <SocialMedias.Icon icon={Github} />
        </SocialMedias.Box>
        <SocialMedias.Box
          href="https://www.behance.net/akaigao"
          target="_blank"
        >
          <SocialMedias.Icon icon={Image} />
        </SocialMedias.Box>
        <SocialMedias.Box
          href="https://www.instagram.com/akaigao"
          target="_blank"
        >
          <SocialMedias.Icon icon={Instagram} />
        </SocialMedias.Box>
      </SocialMedias.Root>
      <span className={`${unbounded.className} text-sm font-mono`}>
        ©{currentYear} akaigão
      </span>
    </footer>
  );
}
