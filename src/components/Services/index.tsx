import { Layout, LayoutTemplate, Palette, Smartphone } from "lucide-react";
import { ServicesCard } from "../ServicesCard";
import { Button } from "../ui/button";

export function Service() {
  return (
    <section className="h-auto w-auto p-14 mt-20 text-center">
      <h2 className="md:text-3xl text-2xl text-white lg:px-48 md:px-36 mb-5">
        Join forces with brands and agencies to achieve impactful outcomes.
      </h2>
      <Button className="bg-transparent border border-zinc-800 hover:bg-zinc-800">
        <a href="https://behance.net/akaigao" target="_blank">
          See all projects
        </a>
      </Button>
      <ServicesCard.Root>
        <ServicesCard.Box>
          <ServicesCard.Icon icon={LayoutTemplate} />
          <ServicesCard.Title>Web Development</ServicesCard.Title>
          <ServicesCard.Content>
            Elevating your online presence through cutting-edge web development
            and captivating design.
          </ServicesCard.Content>
        </ServicesCard.Box>
        <ServicesCard.Box>
          <ServicesCard.Icon icon={Smartphone} />
          <ServicesCard.Title>Mobile App</ServicesCard.Title>
          <ServicesCard.Content>
            Turning ideas into extraordinary web and mobile app journeys.
          </ServicesCard.Content>
        </ServicesCard.Box>
        <ServicesCard.Box>
          <ServicesCard.Icon icon={Palette} />
          <ServicesCard.Title>Design & Creative</ServicesCard.Title>
          <ServicesCard.Content>
            Crafting visually stunning designs that deeply connect with your
            audience.
          </ServicesCard.Content>
        </ServicesCard.Box>
        <ServicesCard.Box>
          <ServicesCard.Icon icon={Layout} />
          <ServicesCard.Title>UX & UI</ServicesCard.Title>
          <ServicesCard.Content>
            Creating interfaces that are intuitive, efficient, and delightful to
            navigate.
          </ServicesCard.Content>
        </ServicesCard.Box>
      </ServicesCard.Root>
    </section>
  );
}
