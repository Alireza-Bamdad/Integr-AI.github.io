import { Button } from "@/components/ui/button"

export default function CTA() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-extrabold text-gray-900 mb-4">Ready to Transform Your Business with AI?</h2>
        <p className="text-xl text-gray-600 mb-8">
          Get in touch with us to learn more about how Integr AI can help your business thrive.
        </p>
        <div className="flex justify-center space-x-4">
          <Button size="lg">Schedule a Demo</Button>
          <Button size="lg" variant="outline">
            Contact Us
          </Button>
        </div>
      </div>
    </section>
  )
}

