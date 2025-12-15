"use client";
import { useState } from "react";

export function ContactCard() {
  const [status, setStatus] = useState<"idle" | "sending" | "ok" | "err">(
    "idle",
  );
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
    <div className="p-5 shadow-sm rounded-2xl border-soft surface-navy-18">
      <h3 className="text-lg font-semibold text-(--foreground)">
        Get in touch
      </h3>
      <p className="mt-2 text-sm text-[color-mix(in_oklab,var(--foreground)_75%,transparent)]">
        Shoot us a note and we’ll get back to you.
      </p>

      <form onSubmit={(e) => { void onSubmit(e); }} className="grid gap-3 mt-5">
        <input
          name="name"
          required
          placeholder="Name"
          className="px-3 py-2 rounded-xl border-soft focus-brand text-(--foreground) placeholder:text-[color-mix(in_oklab,var(--foreground)_45%,transparent)] bg-[color-mix(in_oklab,var(--shpe-secondary)_22%,transparent)]"
        />
        <input
          name="email"
          type="email"
          required
          placeholder="Email"
          className="px-3 py-2 rounded-xl border-soft focus-brand text-(--foreground) placeholder:text-[color-mix(in_oklab,var(--foreground)_45%,transparent)] bg-[color-mix(in_oklab,var(--shpe-secondary)_22%,transparent)]"
        />
        <textarea
          name="message"
          required
          placeholder="Message"
          className="min-h-35 rounded-xl border-soft focus-brand px-3 py-2 text-(--foreground) placeholder:text-[color-mix(in_oklab,var(--foreground)_45%,transparent)] bg-[color-mix(in_oklab,var(--shpe-secondary)_22%,transparent)]"
        />
        {/* Non-visible */}
        <input
          type="text"
          name="website"
          tabIndex={-1}
          autoComplete="off"
          className="hidden"
          aria-hidden="true"
        />
        <button className="btn-primary focus-brand disabled:opacity-70">
          {status === "sending" ? "Sending…" : "Send"}
        </button>
      </form>

      {status !== "idle" && (
        <div
          className="px-3 py-2 mt-3 text-sm rounded-lg"
          style={{
            color: "var(--foreground)",
            background:
              status === "ok"
                ? "color-mix(in oklab, var(--shpe-accent) 20%, transparent)"
                : "color-mix(in oklab, var(--shpe-primary) 15%, transparent)",
          }}
          role="status"
        >
          {msg}
        </div>
      )}
    </div>
  );
}
