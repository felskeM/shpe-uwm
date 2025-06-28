import Link from "next/link";

export default function Home() {
  return (
    <div className="space-y-6 p-8">
      <h1 className="text-4xl font-bold">SHPE UWM Chapter</h1>
      <p>Welcome! We’re the Society of Hispanic Professional Engineers at UWM.</p>
      <div className="flex gap-4">
        <Link href="/about" className="btn">About Us</Link>
        <Link href="/members" className="btn">Our Team</Link>
        <Link href="/events" className="btn">Events</Link>
        <Link href="/sponsors" className="btn">Sponsors</Link>
        <Link href="/contact" className="btn">Contact Us</Link>
      </div>
    </div>
  );
}
