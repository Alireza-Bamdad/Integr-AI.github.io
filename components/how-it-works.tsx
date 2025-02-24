import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const steps = [
  {
    title: "Data Collection",
    description: "We gather and organize your business data from various sources.",
  },
  {
    title: "AI Analysis",
    description: "Our advanced AI algorithms analyze your data to extract valuable insights.",
  },
  {
    title: "Implementation",
    description: "We implement AI-driven solutions tailored to your specific business needs.",
  },
  {
    title: "Optimization",
    description: "Continuous monitoring and optimization ensure maximum effectiveness.",
  },
]

export default function HowItWorks() {
  return (
    <section className="py-20 bg-muted">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">How Integr AI Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <span className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center">
                    {index + 1}
                  </span>
                  <span>{step.title}</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>{step.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

