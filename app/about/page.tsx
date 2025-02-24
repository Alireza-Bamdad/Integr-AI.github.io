import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"

export default function AboutUs() {
  return (
    <main>
      <Navbar />
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold text-gray-900 mb-8">About Integr AI</h1>
          <p className="text-xl text-gray-600 mb-8">
            Integr AI is a leading provider of artificial intelligence solutions, dedicated to empowering businesses
            with cutting-edge technology. Our mission is to transform the way companies operate, make decisions, and
            interact with their customers through the power of AI.
          </p>
          <p className="text-xl text-gray-600 mb-8">
            Founded by a team of AI experts and industry veterans, Integr AI combines deep technical knowledge with
            practical business experience to deliver AI solutions that drive real results. We're committed to pushing
            the boundaries of what's possible with AI while maintaining a strong focus on ethics and responsible AI
            development.
          </p>
          <p className="text-xl text-gray-600">
            At Integr AI, we believe that AI has the potential to solve some of the world's most complex problems. We're
            excited to partner with forward-thinking businesses to turn this potential into reality.
          </p>
        </div>
      </section>
      <Footer />
    </main>
  )
}

