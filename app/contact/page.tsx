// app/contact/page.tsx
import ContactForm from '../../components/ContactForm'

export default function ContactPage() {
  return (
    <div className="py-20">
      <ContactForm />
      <div className="container mx-auto px-4 mt-12 text-center">
        <p className="text-shpe-dark">
          Follow us on{' '}
          <a href="#" className="text-shpe-orange hover:text-shpe-red">Instagram</a>,{' '}
          <a href="#" className="text-shpe-orange hover:text-shpe-red">LinkedIn</a>, and{' '}
          <a href="#" className="text-shpe-orange hover:text-shpe-red">Facebook</a>.
        </p>
      </div>
    </div>
  )
}
