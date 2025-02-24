import { notFound } from "next/navigation"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import { Button } from "@/components/ui/button"

const services = {
  "predictive-analytics": {
    title: "Predictive Analytics",
    description: "Harness the power of AI to forecast trends and make data-driven decisions.",
    features: [
      "Advanced machine learning algorithms",
      "Real-time data processing",
      "Customizable prediction models",
      "Integration with existing data sources",
    ],
  },
  "process-automation": {
    title: "Process Automation",
    description: "Streamline your operations with intelligent automation powered by AI.",
    features: [
      "Workflow optimization",
      "Robotic process automation (RPA)",
      "Intelligent document processing",
      "Automated decision-making",
    ],
  },
  "natural-language-processing": {
    title: "Natural Language Processing",
    description: "Analyze and generate human-like text for various applications.",
    features: ["Sentiment analysis", "Text classification", "Named entity recognition", "Language translation"],
  },
  "custom-ai-solutions": {
    title: "Custom AI Solutions",
    description: "Tailored AI implementations designed to address your unique business challenges.",
    features: [
      "Personalized AI strategy",
      "Custom model development",
      "Integration with existing systems",
      "Ongoing support and optimization",
    ],
  },
}

export default function ServicePage({ params }: { params: { service: string } }) {
  const service = services[params.service as keyof typeof services]

  if (!service) {
    notFound()
  }

  return (
    <main>
      <Navbar />
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold text-gray-900 mb-8">{service.title}</h1>
          <p className="text-xl text-gray-600 mb-12">{service.description}</p>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Key Features</h2>
          <ul className="list-disc list-inside mb-12 space-y-2">
            {service.features.map((feature, index) => (
              <li key={index} className="text-lg text-gray-600">
                {feature}
              </li>
            ))}
          </ul>
          <Button size="lg">Request a Demo</Button>
        </div>
      </section>
      <Footer />
    </main>
  )
}

