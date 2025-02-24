import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { BrainIcon, ZapIcon, MessageSquareIcon, SettingsIcon } from "lucide-react"

const services = [
  {
    title: "Predictive Analytics",
    description: "Forecast trends and make data-driven decisions.",
    icon: BrainIcon,
  },
  {
    title: "Process Automation",
    description: "Streamline operations with intelligent automation.",
    icon: ZapIcon,
  },
  {
    title: "Natural Language Processing",
    description: "Analyze and generate human-like text for various applications.",
    icon: MessageSquareIcon,
  },
  {
    title: "Custom AI Solutions",
    description: "Tailored AI implementations for your unique business needs.",
    icon: SettingsIcon,
  },
]

export default function Services() {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-12">Our AI Services</h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <Card key={index}>
              <CardHeader>
                <service.icon className="h-8 w-8 text-blue-600 mb-4" />
                <CardTitle>{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>{service.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

