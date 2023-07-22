import { Companies } from "@/components/Companies";
import { ShortPresentation } from "@/components/ShortPresentation";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900">
      <ShortPresentation />
      <Companies />
    </div>
  );
}
