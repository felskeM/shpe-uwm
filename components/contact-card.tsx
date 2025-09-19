"use client";
import { useState } from "react";

export function ContactCard() {
  const [status, setStatus] = useState<"idle" | "sending" | "ok" | "err">("idle");
  const [msg, setMsg] = useState<string>("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    setMsg("");

    const form = e.currentTarget;
    const formData = new FormData(form);
    const payload = Object.fromEntries(formData.entries());

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error(await res.text());
      setStatus("ok");
      setMsg("Thanks! Your message was sent.");
      form.reset();
    } catch (err: unknown) {
      setStatus("err");
      setMsg("Sorry—something went wrong. Please try again.");
      console.error(err);
    }
  }

  return (
    <div
      className="p-5 shadow-sm rounded-2xl"
      style={{
        background: "color-mix(in oklab, var(--shpe-secondary) 18%, transparent)",
        border: "1px solid color-mix(in oklab, white 10%, transparent)",
      }}
    >
      <h3 className="text-lg font-semibold text-white">Get in touch</h3>
      <p className="mt-2 text-sm text-zinc-300">
        Shoot us a note and we’ll get back to you.
      </p>

      <form onSubmit={onSubmit} className="grid gap-3 mt-5">
        <input
          name="name"
          required
          placeholder="Name"
          className="px-3 py-2 border outline-none rounded-xl border-zinc-800 bg-zinc-950 text-zinc-100 placeholder:text-zinc-500 focus:ring-2"
          style={{ boxShadow: "0 0 0 0 var(--shpe-accent)", }}
        />
        <input
          name="email"
          type="email"
          required
          placeholder="Email"
          className="px-3 py-2 border outline-none rounded-xl border-zinc-800 bg-zinc-950 text-zinc-100 placeholder:text-zinc-500 focus:ring-2"
        />
        <textarea
          name="message"
          required
          placeholder="Message"
          className="min-h-[140px] rounded-xl border border-zinc-800 bg-zinc-950 px-3 py-2 text-zinc-100 placeholder:text-zinc-500 outline-none focus:ring-2"
        />
        {/* Non-visible honeypot field for bots */}
        <input
          type="text"
          name="website"
          tabIndex={-1}
          autoComplete="off"
          className="hidden"
          aria-hidden="true"
        />
        <button
          disabled={status === "sending"}
          className="inline-flex items-center justify-center px-4 py-2 mt-1 font-medium text-white transition-colors rounded-xl disabled:opacity-70"
          style={{
            background: "var(--shpe-primary)",
          }}
        >
          {status === "sending" ? "Sending…" : "Send"}
        </button>
      </form>

      {status !== "idle" && (
        <div
          className="px-3 py-2 mt-3 text-sm rounded-lg"
          style={{
            color: status === "ok" ? "white" : "var(--foreground)",
            background:
              status === "ok"
                ? "color-mix(in oklab, var(--shpe-accent) 20%, transparent)"
                : "color-mix(in oklab, var(--shpe-primary) 15%, transparent)",
            border: "1px solid color-mix(in oklab, white 10%, transparent)",
          }}
          role="status"
        >
          {msg}
        </div>
      )}
    </div>
  );
}