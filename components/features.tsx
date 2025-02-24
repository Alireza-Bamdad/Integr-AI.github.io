import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { RocketIcon, BarChartIcon, UsersIcon } from "lucide-react"

const features = [
  {
    title: "Automation",
    description: "Streamline your workflows with AI-powered automation tools.",
    icon: RocketIcon,
  },
  {
    title: "Data Analysis",
    description: "Gain deep insights from your data with advanced AI analytics.",
    icon: BarChartIcon,
  },
  {
    title: "Customer Insights",
    description: "Understand your customers better with AI-driven behavior analysis.",
    icon: UsersIcon,
  },
]

export default function Features() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-12">Our AI Tools</h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {features.map((feature, index) => (
            <Card key={index}>
              <CardHeader>
                <feature.icon className="h-8 w-8 text-blue-600 mb-4" />
                <CardTitle>{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>{feature.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

