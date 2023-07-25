import Image from "next/image";
import MyIconWhite from "../../../public/assets/svg/my-icon-white.svg";
import { SocialMedias } from "../SocialMedias";

export function Header() {
  return (
    <header className="flex flex-row items-center justify-between p-6 lowercase tracking-widest text-zinc-400">
      <div className="flex items-center justify-center w-14 h-14 rounded-full border border-zinc-700 border-opacity-30 bg-zinc-800 bg-opacity-30">
        <Image
          src={MyIconWhite}
          alt="My personal icon"
          width={30}
          height={30}
        />
      </div>
      <SocialMedias.Root>
        <SocialMedias.Box
          href="https://www.linkedin.com/in/akaigao"
          target="_blank"
        >
          <SocialMedias.Text className="hover:text-rose-500 transition">
            LinkedIn
          </SocialMedias.Text>
        </SocialMedias.Box>
        <SocialMedias.Box href="https://www.github.com/akaigao" target="_blank">
          <SocialMedias.Text className="hover:text-rose-500 transition">
            Github
          </SocialMedias.Text>
        </SocialMedias.Box>
        <SocialMedias.Box
          href="https://www.behance.net/akaigao"
          target="_blank"
        >
          <SocialMedias.Text className="hover:text-rose-500 transition">
            Behance
          </SocialMedias.Text>
        </SocialMedias.Box>
        <SocialMedias.Box
          href="https://www.instagram.com/akaigao"
          target="_blank"
        >
          <SocialMedias.Text className="hover:text-rose-500 transition">
            Instagram
          </SocialMedias.Text>
        </SocialMedias.Box>
      </SocialMedias.Root>
    </header>
  );
}
