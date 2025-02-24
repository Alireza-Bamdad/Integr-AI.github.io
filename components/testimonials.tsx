import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const testimonials = [
  {
    quote:
      "Integr AI has revolutionized our business processes. We've seen a significant increase in efficiency and customer satisfaction.",
    author: "Jane Doe",
    company: "Tech Innovators Inc.",
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    quote:
      "The insights provided by Integr AI's data analysis tools have been invaluable for our decision-making process.",
    author: "John Smith",
    company: "Global Solutions Ltd.",
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    quote:
      "Implementing Integr AI's automation solutions has allowed us to focus on strategic initiatives rather than repetitive tasks.",
    author: "Emily Johnson",
    company: "Future Enterprises",
    avatar: "/placeholder.svg?height=40&width=40",
  },
]

export default function Testimonials() {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-12">What Our Clients Say</h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <Card key={index}>
              <CardContent className="pt-6">
                <p className="text-lg italic text-gray-600">"{testimonial.quote}"</p>
              </CardContent>
              <CardFooter className="flex items-center space-x-4">
                <Avatar>
                  <AvatarImage src={testimonial.avatar} alt={testimonial.author} />
                  <AvatarFallback>{testimonial.author[0]}</AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-semibold">{testimonial.author}</p>
                  <p className="text-sm text-gray-600">{testimonial.company}</p>
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

