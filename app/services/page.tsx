import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { BrainIcon, ZapIcon, MessageSquareIcon, SettingsIcon } from "lucide-react"

const services = [
  {
    title: "Predictive Analytics",
    description: "Forecast trends and make data-driven decisions.",
    icon: BrainIcon,
    link: "/services/predictive-analytics",
  },
  {
    title: "Process Automation",
    description: "Streamline operations with intelligent automation.",
    icon: ZapIcon,
    link: "/services/process-automation",
  },
  {
    title: "Natural Language Processing",
    description: "Analyze and generate human-like text for various applications.",
    icon: MessageSquareIcon,
    link: "/services/natural-language-processing",
  },
  {
    title: "Custom AI Solutions",
    description: "Tailored AI implementations for your unique business needs.",
    icon: SettingsIcon,
    link: "/services/custom-ai-solutions",
  },
]

export default function Services() {
  return (
    <main>
      <Navbar />
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold text-gray-900 mb-12 text-center">Our Services</h1>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {services.map((service, index) => (
              <Link href={service.link} key={index}>
                <Card className="h-full transition-shadow hover:shadow-lg">
                  <CardHeader>
                    <service.icon className="h-8 w-8 text-blue-600 mb-4" />
                    <CardTitle>{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>{service.description}</CardDescription>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}

