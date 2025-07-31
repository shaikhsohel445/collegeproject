"use client"
import { useState } from "react"
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react"

const Testimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  const testimonials = [
    {
      name: "Priya Sharma",
      role: "Alumni - B.Com Graduate",
      year: "2020",
      image: "/placeholder.svg?height=80&width=80&text=PS",
      rating: 5,
      text: "Lokmanya Tilak College provided me with an excellent foundation for my career. The faculty's dedication and the college's focus on practical learning helped me secure a great job right after graduation.",
    },
    {
      name: "Rahul Patil",
      role: "Current Student - B.Sc",
      year: "2024",
      image: "/placeholder.svg?height=80&width=80&text=RP",
      rating: 5,
      text: "The college offers a perfect blend of academic excellence and extracurricular activities. The supportive environment and modern facilities make learning enjoyable and effective.",
    },
    {
      name: "Dr. Anjali Desai",
      role: "Parent",
      year: "2023",
      image: "/placeholder.svg?height=80&width=80&text=AD",
      rating: 5,
      text: "As a parent, I'm impressed with the college's commitment to student welfare and development. The regular communication and transparent processes give me confidence in my child's education.",
    },
    {
      name: "Vikram Singh",
      role: "Alumni - M.A. English",
      year: "2019",
      image: "/placeholder.svg?height=80&width=80&text=VS",
      rating: 5,
      text: "The English department at LTC is exceptional. The faculty encouraged critical thinking and helped me develop strong communication skills that have been invaluable in my career as a journalist.",
    },
  ]

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star key={i} className={`h-5 w-5 ${i < rating ? "text-yellow-400 fill-current" : "text-gray-300"}`} />
    ))
  }

  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="heading-secondary">What Our Community Says</h2>
          <p className="text-body text-lg">Hear from our students, alumni, and parents about their experience</p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Testimonial Card */}
            <div className="card text-center relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-primary-600 text-white p-3 rounded-full">
                <Quote className="h-6 w-6" />
              </div>

              <div className="pt-8">
                <img
                  src={testimonials[currentTestimonial].image || "/placeholder.svg"}
                  alt={testimonials[currentTestimonial].name}
                  className="w-20 h-20 rounded-full mx-auto mb-4 object-cover"
                />

                <div className="flex justify-center mb-4">{renderStars(testimonials[currentTestimonial].rating)}</div>

                <p className="text-body text-lg italic mb-6 leading-relaxed">
                  "{testimonials[currentTestimonial].text}"
                </p>

                <div>
                  <h4 className="font-bold text-gray-900 text-lg">{testimonials[currentTestimonial].name}</h4>
                  <p className="text-primary-600 font-medium">{testimonials[currentTestimonial].role}</p>
                  <p className="text-gray-500 text-sm">Class of {testimonials[currentTestimonial].year}</p>
                </div>
              </div>
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={prevTestimonial}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white shadow-lg rounded-full p-3 hover:bg-gray-50 transition-colors"
            >
              <ChevronLeft className="h-6 w-6 text-gray-600" />
            </button>
            <button
              onClick={nextTestimonial}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white shadow-lg rounded-full p-3 hover:bg-gray-50 transition-colors"
            >
              <ChevronRight className="h-6 w-6 text-gray-600" />
            </button>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentTestimonial ? "bg-primary-600" : "bg-gray-300"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials
