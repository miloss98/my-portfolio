import {
  About,
  Contact,
  Experience,
  Footer,
  Hero,
  Projects,
} from "./components";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
}
