import { SocialMedias } from "../SocialMedias";

export function Header() {
  return (
    <header className="flex flex-row justify-between p-6 text-zinc-400">
      <a
        className="underline hover:text-zinc-200 transition"
        href="mailto:akaigao.dev@gmail.com"
      >
        Hit me up
      </a>
      <SocialMedias.Root>
        <SocialMedias.Box
          href="https://www.linkedin.com/in/akaigao"
          target="_blank"
        >
          <SocialMedias.Text>LinkedIn</SocialMedias.Text>
        </SocialMedias.Box>
        <span>/</span>
        <SocialMedias.Box href="https://www.github.com/akaigao" target="_blank">
          <SocialMedias.Text>Github</SocialMedias.Text>
        </SocialMedias.Box>
        <span>/</span>
        <SocialMedias.Box
          href="https://www.instagram.com/akaigao"
          target="_blank"
        >
          <SocialMedias.Text>Instagram</SocialMedias.Text>
        </SocialMedias.Box>
      </SocialMedias.Root>
    </header>
  );
}
