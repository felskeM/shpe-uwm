type Body = {
  name?: string;
  email?: string;
  message?: string;
  website?: string;
};

function isEmail(s: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(s);
}

// Ensure it's treated as dynamic
export const dynamic = 'force-dynamic';

export async function POST(req: Request) {
  const body = (await req.json().catch(() => ({}))) as Body;

  const name = (body.name ?? '').toString().trim().slice(0, 120);
  const email = (body.email ?? '').toString().trim().slice(0, 200);
  const message = (body.message ?? '').toString().trim().slice(0, 5000);
  const honey = (body.website ?? '').toString().trim();

  if (honey) return new Response('ok', { status: 200 });

  if (!name || !email || !message || !isEmail(email)) {
    return new Response('Invalid request', { status: 400 });
  }

  const RESEND_API_KEY = process.env.RESEND_API_KEY;
  const CONTACT_TO = process.env.CONTACT_TO || 'receiving@shpeuwm.org';

  if (!RESEND_API_KEY) {
    console.error('Missing RESEND_API_KEY');
    return new Response('ok', { status: 200 });
  }

  const from = 'SHPE UWM <contact@shpeuwm.org>';

  const subject = `New contact form submission — ${name}`;
  const text = `New message from SHPE UWM website

Name: ${name}
Email: ${email}

${message}

— end —`;

  const r = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${RESEND_API_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      from,
      to: CONTACT_TO.split(',')
        .map((s) => s.trim())
        .filter(Boolean),
      subject,
      text,
      reply_to: email,
    }),
  });

  if (!r.ok) {
    const t = await r.text().catch(() => '');
    console.error('Resend error:', r.status, t);
    return new Response('Email provider error', { status: 502 });
  }

  return new Response('ok', { status: 200 });
}
