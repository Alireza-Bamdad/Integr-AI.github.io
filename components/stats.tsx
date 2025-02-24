const stats = [
  { value: "98%", label: "Customer Satisfaction" },
  { value: "50%", label: "Increase in Efficiency" },
  { value: "30%", label: "Cost Reduction" },
  { value: "1000+", label: "Businesses Empowered" },
]

export default function Stats() {
  return (
    <section className="py-20 bg-blue-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-white text-center mb-12">Our Impact</h2>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <p className="text-5xl font-extrabold text-white">{stat.value}</p>
              <p className="mt-2 text-xl text-blue-100">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

