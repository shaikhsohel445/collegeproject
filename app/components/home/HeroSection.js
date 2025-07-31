"use client"
import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight, Award, Users, BookOpen, Building } from "lucide-react"

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0)

  const slides = [
    {
      image: "/placeholder.svg?height=600&width=1200&text=College+Campus",
      title: "Welcome to Lokmanya Tilak College",
      subtitle: "Excellence in Higher Education Since Establishment",
      description: "Nurturing minds, building futures through quality education and holistic development.",
      cta: "Explore Our Programs",
    },
    {
      image: "/placeholder.svg?height=600&width=1200&text=NAAC+Accredited",
      title: "NAAC Accredited Institution",
      subtitle: "Committed to Quality Education",
      description: "Recognized for our commitment to academic excellence and continuous improvement.",
      cta: "View NAAC Report",
    },
    {
      image: "/placeholder.svg?height=600&width=1200&text=Campus+Life",
      title: "Vibrant Campus Life",
      subtitle: "Beyond Academics",
      description:
        "Experience a rich campus culture with sports, cultural activities, and student development programs.",
      cta: "Campus Tour",
    },
  ]

  const stats = [
    { icon: Users, label: "Students", value: "2000+" },
    { icon: BookOpen, label: "Courses", value: "25+" },
    { icon: Award, label: "Years of Excellence", value: "50+" },
    { icon: Building, label: "Departments", value: "12" },
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [slides.length])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  return (
    <section className="relative h-screen overflow-hidden">
      {/* Slider */}
      <div className="relative h-full">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            <div
              className="h-full bg-cover bg-center bg-no-repeat"
              style={{
                backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${slide.image})`,
              }}
            >
              <div className="container-custom h-full flex items-center">
                <div className="max-w-2xl text-white">
                  <h1 className="text-5xl md:text-6xl font-bold mb-4 fade-in">{slide.title}</h1>
                  <h2 className="text-2xl md:text-3xl font-light mb-6 text-primary-200 fade-in">{slide.subtitle}</h2>
                  <p className="text-xl mb-8 leading-relaxed fade-in">{slide.description}</p>
                  <button className="btn-primary text-lg px-8 py-4 fade-in">{slide.cta}</button>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-all"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-all"
        >
          <ChevronRight className="h-6 w-6" />
        </button>

        {/* Slide Indicators */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all ${index === currentSlide ? "bg-white" : "bg-white/50"}`}
            />
          ))}
        </div>
      </div>

      {/* Stats Section */}
      <div className="absolute bottom-0 left-0 right-0 bg-white/95 backdrop-blur-sm">
        <div className="container-custom py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-2">
                  <stat.icon className="h-8 w-8 text-primary-600" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-1">{stat.value}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
