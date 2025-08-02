import { Award, Target, Heart, Lightbulb } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

const AboutSnapshot = () => {
  const highlights = [
    {
      icon: Award,
      title: "NAAC Accredited",
      description: "Recognized for quality education and institutional excellence",
    },
    {
      icon: Target,
      title: "Mission Driven",
      description: "Committed to holistic development and academic excellence",
    },
    {
      icon: Heart,
      title: "Student Centric",
      description: "Focused on student welfare and comprehensive development",
    },
    {
      icon: Lightbulb,
      title: "Innovation Hub",
      description: "Promoting research, innovation and entrepreneurship",
    },
  ]

  return (
    <section className="section-padding">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <h2 className="heading-secondary">About Lokmanya Tilak College</h2>
            <p className="text-body text-lg mb-6">
              Established with a vision to provide quality higher education, Lokmanya Tilak College, Sevli has been a
              beacon of academic excellence for over five decades. Our institution is committed to nurturing young minds
              and preparing them for the challenges of tomorrow.
            </p>
            <p className="text-body mb-8">
              With NAAC accreditation and a strong focus on holistic development, we offer comprehensive programs in
              Arts, Commerce, and Science. Our dedicated faculty, modern infrastructure, and student-centric approach
              make us a preferred choice for higher education in the region.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
              {highlights.map((highlight, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="bg-primary-100 p-2 rounded-lg">
                    <highlight.icon className="h-6 w-6 text-primary-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">{highlight.title}</h4>
                    <p className="text-sm text-gray-600">{highlight.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <Link href="/about" className="btn-primary">
              Learn More About Us
            </Link>
          </div>

          {/* Optimized Image */}
          <div className="relative">
            <Image
              src="/placeholder.svg?height=500&width=600&text=College+Building"
              alt="College Building"
              width={600}
              height={500}
              className="rounded-lg shadow-xl w-full"
            />
            <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-lg shadow-lg">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-600">50+</div>
                <div className="text-sm text-gray-600">Years of Excellence</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSnapshot
