import { ExternalLink } from "lucide-react";
import Link from "next/link";
import { IoLogoGithub } from "react-icons/io";
import { IoLogoLinkedin, IoMailOutline } from "react-icons/io5";

export const Contact = () => {
  return (
    <section
      id="contact"
      className="px-6 md:px-12 lg:px-24 py-8 md:py-12 lg:py-20"
    >
      <div className="max-w-5xl mx-auto space-y-8">
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
          <div className="pt-4 space-y-4">
            <ContactLink
              logo={<IoMailOutline className="w-6 h-6" />}
              value="stojanovic98m@gmail.com"
              label={"Email"}
              href="mailto:stojanovic98m@gmail.com"
              target="_self"
            />
            <ContactLink
              logo={<IoLogoLinkedin className="w-6 h-6" />}
              value="linkedin.com/in/miloss98/"
              label={"LinkedIn"}
              href="https://www.linkedin.com/in/miloss98/"
              target="_blank"
            />
            <ContactLink
              logo={<IoLogoGithub className="w-6 h-6" />}
              value="github.com/miloss98"
              label={"GitHub"}
              href="https://github.com/miloss98"
              target="_blank"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

function ContactLink({
  logo,
  label,
  value,
  href,
  target,
}: {
  logo: React.ReactNode;
  label: string;
  value: string;
  href: string;
  target: string;
}) {
  return (
    <Link
      href={href}
      className="text-sm group md:text-base text-foreground hover:text-primary transition-colors flex"
      target={target}
    >
      <div className="flex w-full items-center justify-between py-3 border-b border-border">
        <span className="md:flex group-hover:text-primary hidden text-sm text-muted-foreground">
          {label}
        </span>
        <div className="md:hidden flex p-2 rounded-lg text-primary">{logo}</div>
        <span className="text-sm md:text-base text-foreground group-hover:text-primary transition-colors flex items-center gap-2">
          {value}
          <ExternalLink className="ml-2 w-4 h-4 text-muted-foreground group-hover:text-primary transition-transform" />
        </span>
      </div>
    </Link>
  );
}
