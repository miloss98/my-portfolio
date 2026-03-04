import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { IoLogoGithub } from "react-icons/io";
import { IoLogoLinkedin, IoMailOutline } from "react-icons/io5";

export const Contact = () => {
  return (
    <section
      id="contact"
      className="px-6 md:px-12 lg:px-24 py-8 md:py-12 lg:py-20"
    >
      <div className="max-w-5xl mx-auto space-y-6 md:space-y-12">
        <h2 className="text-base md:text-lg lg:text-xl font-semibold uppercase tracking-widest text-primary flex items-center gap-4">
          <span className="h-px w-8 bg-primary" />
          Contact
        </h2>
        <div className="space-y-6">
          <p className="text-white md:text-base text-base lg:text-lg leading-relaxed ">
            I&apos;m currently open to new job opportunities and collaborations.
            Whether you have a project in mind, a question, or just want to say
            hello, feel free to reach out! I look forward to connecting with
            you.
          </p>
          <div className="flex justify-center md:justify-start pt-4 md:pt-0">
            <div className="flex flex-col md:flex-row md:items-center w-max md:gap-4">
              <p className="md:flex hidden gap-2 items-center font-normal text-muted-foreground text-sm md:text-base">
                Get in touch <ArrowRight className="h-5 w-5" />{" "}
              </p>
              <a
                href="/Milos Stojanovic CV.pdf"
                download="Milos Stojanovic CV.pdf"
                className="bg-primary text-center font-medium text-black px-4 py-2 rounded-md hover:opacity-80 transition"
              >
                Download CV
              </a>
              <div className="flex justify-center md:justify-start items-center gap-2 pt-4 md:pt-0">
                <Link
                  href="https://github.com/miloss98"
                  className="p-2 rounded-lg text-primary hover:bg-secondary transition-colors"
                  aria-label="GitHub"
                  target="_blank"
                >
                  <IoLogoGithub className="w-8 h-8 md:w-7 md:h-7" />
                </Link>
                <Link
                  href="https://www.linkedin.com/in/miloss98/"
                  className="p-2 rounded-lg text-primary hover:bg-secondary transition-colors"
                  aria-label="LinkedIn"
                  target="_blank"
                >
                  <IoLogoLinkedin className="w-8 h-8 md:w-7 md:h-7" />
                </Link>
                <Link
                  href="mailto:stojanovic98m@gmail.com"
                  className="p-2 rounded-lg text-primary hover:bg-secondary transition-colors"
                  aria-label="Email"
                  target="_self"
                >
                  <IoMailOutline className="w-8 h-8 md:w-7 md:h-7" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
