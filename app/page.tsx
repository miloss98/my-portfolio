import {
  Hero,
  About,
  Experience,
  Skills,
  Projects,
  Certificates,
  Contact,
  Footer,
} from "./components";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Projects />
      <Certificates />
      <Contact />
      <Footer />
    </main>
  );
}
