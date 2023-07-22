import { Companies } from "@/components/Companies";
import { ShortPresentation } from "@/components/ShortPresentation";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900">
      <ShortPresentation className="mb-4" />
      <div className="flex justify-center items-center h-36 border-t border-b border-solid border-gray-700 bg-gray-800 mb-4">
        <Companies />
      </div>
    </div>
  );
}
