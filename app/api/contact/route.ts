import { NextResponse } from "next/server";
import nodemailer from "nodemailer";


export const runtime = "nodejs";
export const dynamic = "force-dynamic";

function esc(s: string) {
  return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

function mustGet(name: string) {
  const val = process.env[name];
  if (!val) throw new Error(`Missing required env: ${name}`);
  return val;
}

export async function POST(req: Request) {
  try {
    const { name, email, message, website } = await req.json();

    if (website) return NextResponse.json({ ok: true });
    if (!name || !email || !message) {
       return NextResponse.json({ error: "Missing fields" }, { status: 400 });
     }
    const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    if (!emailOk) {
      return NextResponse.json({ error: "Invalid email" }, { status: 400 });
    }

    const host = process.env.SMTP_HOST || "smtp.office365.com";
    const port = Number(process.env.SMTP_PORT || 587);
    const secure = String(process.env.SMTP_SECURE || "false") === "true";
    const user = mustGet("SMTP_USER");
    const pass = mustGet("SMTP_PASS");
    const from = process.env.SMTP_FROM || user;
    const to = process.env.CONTACT_TO || "msfelske@uwm.edu";

    console.log(`[mail] host=${host} port=${port} secure=${secure} from=${from} to=${to}`);

    console.log("[mail] cwd:", process.cwd());
    console.log("[mail] env present:", {
      HOST: !!process.env.SMTP_HOST,
      PORT: !!process.env.SMTP_PORT,
      SECURE: !!process.env.SMTP_SECURE,
      USER: !!process.env.SMTP_USER,
      PASS: !!process.env.SMTP_PASS,
      FROM: !!process.env.SMTP_FROM,
      TO:   !!process.env.CONTACT_TO,
    });

    const transporter = nodemailer.createTransport({
      host,
      port,
      secure,
      auth: { user, pass },
      requireTLS: true,
      tls: { rejectUnauthorized: true },
    });

    await transporter.sendMail({
      from: `"SHPE UWM Website" <${from}>`,
      to,
      subject: `Contact form — ${name}`,
      replyTo: email,
      text: `From: ${name} <${email}>\n\n${message}`,
      html: `
        <div style="font-family:Arial,Helvetica,sans-serif;font-size:14px;color:#111">
          <p><strong>From:</strong> ${esc(name)} &lt;${esc(email)}&gt;</p>
          <p style="white-space:pre-wrap">${esc(message)}</p>
        </div>
      `,
    });

    return NextResponse.json({ ok: true });
  } catch (err: unknown) {
    const errorMessage = err instanceof Error ? err.message : String(err);
    console.error("[mail] error:", errorMessage);
    return NextResponse.json({ error: "Email failed" }, { status: 500 });
  }
}
