import Image from "next/image"

const images = [
  { src: "/placeholder.svg?height=300&width=400", alt: "AI Dashboard" },
  { src: "/placeholder.svg?height=300&width=400", alt: "Data Visualization" },
  { src: "/placeholder.svg?height=300&width=400", alt: "Automated Workflow" },
  { src: "/placeholder.svg?height=300&width=400", alt: "Customer Insights" },
]

export default function Gallery() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-12">Integr AI in Action</h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {images.map((image, index) => (
            <div key={index} className="relative h-64 rounded-lg overflow-hidden">
              <Image
                src={image.src || "/placeholder.svg"}
                alt={image.alt}
                layout="fill"
                objectFit="cover"
                className="transition-transform duration-300 hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

