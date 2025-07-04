'use client';

export default function ContactForm() {
  const fields = ['First Name', 'Last Name', 'Email', 'Subject'];

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4 max-w-lg">
        <h2 className="text-3xl font-bold text-center mb-8">Get In Touch</h2>
        <form className="space-y-6">
          {fields.map((label) => (
            <div key={label}>
              <label className="block mb-1 font-medium">{label}</label>
              <input
                type="text"
                placeholder={label}
                className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-600"
              />
            </div>
          ))}
          <div>
            <label className="block mb-1 font-medium">Message</label>
            {/* explicit closing tag + defaultValue */}
            <textarea
              rows={4}
              defaultValue=""
              placeholder="Your message…"
              className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-600"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-3 rounded-lg"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
