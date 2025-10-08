import { Container } from "@/components/container";


export function SiteFooter() {
  return (
    <footer className="py-10 mt-16 text-sm border-t text-zinc-500 border-zinc-800/70">
      <Container className="flex flex-col items-center justify-between gap-6 md:flex-row">
        <p>© {new Date().getFullYear()} SHPE UWM. All rights reserved.</p>
        <p>GO PANTHERS!</p>
        <div className="flex items-center gap-4">
          <a href="https://www.instagram.com/shpe_uwm/" target="_blank" className="hover:text-zinc-300">Instagram</a>
          <a href="mailto:garciar9@uwm.edu" target="_blank" className="hover:text-zinc-300">Email</a>
        </div>
      </Container>
    </footer>
  );
}