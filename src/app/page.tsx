import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Services from "@/components/Services";
import Work from "@/components/Work";
import Packages from "@/components/Packages";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <Features />
        <Services />
        <Work />
        <Packages />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
