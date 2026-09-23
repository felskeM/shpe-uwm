"use client";
import { useState } from "react";
import { withBasePath } from "@/lib/basePath";

export function ContactCard() {
  const [status, setStatus] = useState<"idle" | "sending" | "ok" | "err">(
    "idle",
  );
  const [msg, setMsg] = useState<string>("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (status === "sending") return;
    setStatus("sending");
    setMsg("");

    const form = e.currentTarget;
    const formData = new FormData(form);
    const payload = Object.fromEntries(formData.entries());

    try {
      const res = await fetch(withBasePath("/api/contact"), {
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
    <div className="card mx-auto max-w-2xl p-6 sm:p-9">
      <h3 className="text-lg font-semibold text-(--foreground)">
        Get in touch
      </h3>
      <p className="mt-2 text-sm text-[color-mix(in_oklab,var(--foreground)_75%,transparent)]">
        Shoot us a note and we’ll get back to you.
      </p>

      <form
        onSubmit={(e) => {
          void onSubmit(e);
        }}
        className="grid gap-3 mt-5"
      >
        <label className="text-sm font-medium">
          Name
          <input
            name="name"
            autoComplete="name"
            required
            placeholder="Your name"
            className="form-field"
          />
        </label>
        <label className="text-sm font-medium">
          Email
          <input
            name="email"
            type="email"
            autoComplete="email"
            required
            placeholder="you@example.com"
            className="form-field"
          />
        </label>
        <label className="text-sm font-medium">
          Message
          <textarea
            name="message"
            required
            placeholder="How would you like to get involved?"
            rows={5}
            className="form-field resize-y"
          />
        </label>
        {/* Non-visible */}
        <input
          type="text"
          name="website"
          tabIndex={-1}
          autoComplete="off"
          className="hidden"
          aria-hidden="true"
        />
        <button
          type="submit"
          disabled={status === "sending"}
          className="btn-primary focus-brand disabled:opacity-70"
        >
          {status === "sending" ? "Sending…" : "Send"}
        </button>
      </form>

      {msg && (
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
