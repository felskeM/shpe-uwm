import { Card } from "@/components/card";


export function ContactCard() {
  return (
    <Card>
      <h3 className="text-lg font-semibold">Get in touch</h3>
      <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">Have questions about joining, partnering, or sponsoring? We’d love to hear from you.</p>
      <form className="mt-4 grid gap-3">
        <input className="rounded-xl border border-zinc-300 bg-white px-3 py-2 outline-none placeholder:text-zinc-400 focus:ring-2 focus:ring-amber-500 dark:border-zinc-700 dark:bg-zinc-950" placeholder="Name" />
        <input className="rounded-xl border border-zinc-300 bg-white px-3 py-2 outline-none placeholder:text-zinc-400 focus:ring-2 focus:ring-amber-500 dark:border-zinc-700 dark:bg-zinc-950" placeholder="Email" type="email" />
        <textarea className="min-h-[120px] rounded-xl border border-zinc-300 bg-white px-3 py-2 outline-none placeholder:text-zinc-400 focus:ring-2 focus:ring-amber-500 dark:border-zinc-700 dark:bg-zinc-950" placeholder="Message" />
        <button className="mt-1 rounded-xl bg-amber-600 px-4 py-2 font-medium text-white hover:bg-amber-700">Send</button>
      </form>
    </Card>
  );
}