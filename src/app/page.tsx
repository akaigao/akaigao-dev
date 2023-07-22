import { Companies } from "@/components/Companies";
import { Contact } from "@/components/Contact";
import { Service } from "@/components/Services";
import { ShortPresentation } from "@/components/ShortPresentation";

export default function Home() {
  return (
    <main>
      <ShortPresentation />
      <Companies />
      <Service />
      <Contact />
    </main>
  );
}
