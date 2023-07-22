import { Layout, LayoutTemplate, Palette, Smartphone } from "lucide-react";
import { ServicesCard } from "../ServicesCard";

export function Service() {
  return (
    <section className="h-auto w-auto p-1 mt-20 mx-4 text-center">
      <h2 className="md:text-3xl text-2xl text-white lg:px-48 md:px-36">
        Collaborate with brands and agencies to create impactful results.
      </h2>
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
            Transforming ideas into exceptional web and mobile app experiences.
          </ServicesCard.Content>
        </ServicesCard.Box>
        <ServicesCard.Box>
          <ServicesCard.Icon icon={Palette} />
          <ServicesCard.Title>Design & Creative</ServicesCard.Title>
          <ServicesCard.Content>
            Crafting visually stunning designs that connect with your audience.
          </ServicesCard.Content>
        </ServicesCard.Box>
        <ServicesCard.Box>
          <ServicesCard.Icon icon={Layout} />
          <ServicesCard.Title>UX & UI</ServicesCard.Title>
          <ServicesCard.Content>
            Designing interfaces that are intuitive, efficient, and enjoyable to
            use.
          </ServicesCard.Content>
        </ServicesCard.Box>
      </ServicesCard.Root>
    </section>
  );
}
