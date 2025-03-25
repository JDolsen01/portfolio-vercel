import Parallax from "@/components/Parallax";
import AboutMe from "@/components/AboutMe";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <main className="flex-1">
        <Parallax />
        <AboutMe />
      </main>
      <Footer />
    </main>
  );
}
