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
          <div className="pt-4 gap-4 md:gap-4 justify-center md:justify-start items-center flex w-full">
            <p className="md:flex hidden gap-2 font-normal text-muted-foreground text-sm md:text-base">
              Get in touch <ArrowRight className="h-6 w-6" />{" "}
            </p>
            <ContactLink
              logo={<IoLogoGithub className="w-8 h-8 md:w-7 md:h-7" />}
              href="https://github.com/miloss98"
              target="_blank"
            />
            <ContactLink
              logo={<IoLogoLinkedin className="w-8 h-8 md:w-7 md:h-7" />}
              href="https://www.linkedin.com/in/miloss98/"
              target="_blank"
            />
            <ContactLink
              logo={<IoMailOutline className="w-8 h-8 md:w-7 md:h-7" />}
              href="mailto:stojanovic98m@gmail.com"
              target="_self"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

function ContactLink({
  logo,
  href,
  target,
}: {
  logo: React.ReactNode;
  href: string;
  target: string;
}) {
  return (
    <Link
      href={href}
      className="p-2 rounded-lg text-primary hover:bg-secondary transition-colors"
      target={target}
    >
      <div className="flex rounded-lg text-primary">{logo}</div>
    </Link>
  );
}
