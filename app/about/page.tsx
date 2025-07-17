import Image from "next/image"

// app/about/page.tsx
export default function AboutPage() {
  return (
    <section className="py-20 container mx-auto px-4">
      <Image
            src="/images/hero.png"
            alt="Campus chapter"
            fill
            className="object-cover"
          />
      <div className="flex flex-col items-center justify-center text-center mb-12 px-4">
        <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-4xl font-bold text-shpe-dark mb-6">
            Our Mission and Values
          </h1>
        </div>
        <div className="absolute inset-0 flex flex-col items-end justify-center text-center px-4">
          <p className="text-shpe-dark/80 leading-relaxed w-3xl">
            At UWM, SHPE is dedicated to empowering Hispanic students in STEM through
            education, mentorship, and professional development. We strive to create a supportive environment
            that fosters academic excellence, leadership, and community engagement. We host workshops,
            networking events, and outreach programs to help our members succeed in their academic and develop 
            the next generation of Hispanic leaders in STEM.
          </p>
        </div>
      </div>
      
    </section>
  )
}
