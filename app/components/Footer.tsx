export const Footer = () => {
  return (
    <footer className="px-6 md:px-12 lg:px-24 py-12 mt-8 border-t border-primary">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-muted-foreground">
          Built with Next.js & Tailwind CSS
        </p>
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} - Miloš Stojanović
        </p>
      </div>
    </footer>
  );
};
