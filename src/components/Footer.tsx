export default function Footer() {
  return (
    <footer className="border-t border-border py-6 px-4">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-2">
        <p className="text-text-secondary text-xs">
          <span className="text-accent">$</span> echo &quot;Built with Next.js +
          Tailwind CSS&quot;
        </p>
        <p className="text-text-secondary text-xs">
          &copy; {new Date().getFullYear()} Mohamed Showqath N. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
}
