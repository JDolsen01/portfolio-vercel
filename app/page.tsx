import Parallax from "@/components/Parallax"
import AboutMe from "@/components/AboutMe"
import Navigation from "@/components/Navigation"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Parallax />
      <AboutMe />
    </main>
  )
}

