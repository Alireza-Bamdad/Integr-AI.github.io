import { CheckCircleIcon } from "lucide-react"

const benefits = [
  "Increased operational efficiency",
  "Enhanced decision-making capabilities",
  "Improved customer satisfaction",
  "Reduced costs and resource optimization",
  "Scalable AI solutions for growing businesses",
  "Competitive advantage in the market",
]

export default function Benefits() {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-12">Benefits of Integr AI</h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {benefits.map((benefit, index) => (
            <div key={index} className="flex items-start">
              <CheckCircleIcon className="h-6 w-6 text-green-500 flex-shrink-0 mr-3" />
              <p className="text-lg text-gray-700">{benefit}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

