import Image from "next/image";
import MyIconWhite from "../../../public/assets/svg/my-icon-white.svg";
import { SocialMedias } from "../SocialMedias";

export function Header() {
  return (
    <header className="flex flex-row max-[500px]:flex-col items-center justify-between p-6 max-[500px]:pt-12 max-[500px]:gap-10 lowercase tracking-widest text-zinc-400">
      <div className="flex items-center justify-center w-14 h-14 rounded-full border border-zinc-700 border-opacity-30 bg-zinc-800 bg-opacity-30">
        <Image
          src={MyIconWhite}
          alt="My personal icon"
          width={30}
          height={30}
        />
      </div>
      <SocialMedias.Root className="max-[500px]:flex-col max-[500px]:text-center max-[500px]:text-2xl max-[500px]:gap-10 max-[500px]:w-full">
        <SocialMedias.Box
          className="max-[500px]:border max-[500px]:rounded max-[500px]:border-zinc-800 max-[500px]:p-2"
          href="https://www.linkedin.com/in/akaigao"
          target="_blank"
        >
          <SocialMedias.Text className="hover:text-rose-500 transition">
            LinkedIn
          </SocialMedias.Text>
        </SocialMedias.Box>
        <SocialMedias.Box
          className="max-[500px]:border max-[500px]:rounded max-[500px]:border-zinc-800 max-[500px]:p-2"
          href="https://www.github.com/akaigao"
          target="_blank"
        >
          <SocialMedias.Text className="hover:text-rose-500 transition">
            Github
          </SocialMedias.Text>
        </SocialMedias.Box>
        <SocialMedias.Box
          className="max-[500px]:border max-[500px]:rounded max-[500px]:border-zinc-800 max-[500px]:p-2"
          href="https://www.behance.net/akaigao"
          target="_blank"
        >
          <SocialMedias.Text className="hover:text-rose-500 transition">
            Behance
          </SocialMedias.Text>
        </SocialMedias.Box>
        <SocialMedias.Box
          className="max-[500px]:border max-[500px]:rounded max-[500px]:border-zinc-800 max-[500px]:p-2"
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
