import Contact from "@/components/Home/Contact";
import Faqs from "@/components/Home/Faqs";
import HeroHome from "@/components/Home/Hero";

export default function Home() {
  return (
    <div className="space-y-20">
      <HeroHome />
      <Faqs />
      <Contact />
    </div>
  );
}
