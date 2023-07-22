import { Companies } from "@/components/Companies";
import { Contact } from "@/components/Contact";
import { Header } from "@/components/Header";
import { Service } from "@/components/Services";
import { ShortPresentation } from "@/components/ShortPresentation";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <ShortPresentation />
        <Companies />
        <Service />
        <Contact />
      </main>
    </>
  );
}
