'use client'

export default function ContactForm() {
  const fields = ['First Name', 'Last Name', 'Email', 'Subject']

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-lg">
        <h2 className="text-3xl font-bold text-center text-shpe-dark mb-8">
          Get In Touch
        </h2>
        <form className="space-y-6">
          {fields.map((label) => (
            <div key={label}>
              <label className="block mb-1 font-medium text-shpe-dark">
                {label}
              </label>
              <input
                type="text"
                placeholder={label}
                className="w-full border border-shpe-lightGray rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-shpe-red"
              />
            </div>
          ))}
          <div>
            <label className="block mb-1 font-medium text-shpe-dark">
              Message
            </label>
            <textarea
              rows={4}
              defaultValue=""
              placeholder="Your message…"
              className="w-full border border-shpe-lightGray rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-shpe-red"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-shpe-red hover:bg-shpe-orange text-white font-semibold py-3 rounded-lg transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  )
}
