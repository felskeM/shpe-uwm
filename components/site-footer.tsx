import { Container } from "@/components/container";


export function SiteFooter() {
  return (
    <footer className="mt-16 border-t border-zinc-200/70 py-10 text-sm text-zinc-500 dark:border-zinc-800/70">
      <Container className="flex flex-col items-center justify-between gap-6 md:flex-row">
        <p>© {new Date().getFullYear()} SHPE UWM. All rights reserved.</p>
        <div className="flex items-center gap-4">
          <a href="https://www.instagram.com/" className="hover:text-zinc-900 dark:hover:text-zinc-300">Instagram</a>
          <a href="https://www.linkedin.com/" className="hover:text-zinc-900 dark:hover:text-zinc-300">LinkedIn</a>
          <a href="mailto:info@example.com" className="hover:text-zinc-900 dark:hover:text-zinc-300">Email</a>
        </div>
      </Container>
    </footer>
  );
}