"use client"
import Image from "next/image"
import { Quote } from "lucide-react"

const PrincipalMessage = () => {
  return (
    <section className="section-padding">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Principal Image */}
          <div className="relative">
            <Image
              src="/placeholder.svg?height=500&width=400&text=Principal"
              alt="Principal"
              width={400}
              height={500}
              className="rounded-lg shadow-xl w-full max-w-md mx-auto"
            />
            <div className="absolute -top-4 -left-4 bg-primary-600 text-white p-4 rounded-lg">
              <Quote className="h-8 w-8" />
            </div>
          </div>

          {/* Message Content */}
          <div>
            <h2 className="heading-secondary">Principal&apos;s Message</h2>
            <div className="text-body text-lg leading-relaxed space-y-4">
              <p>
                &quot;Welcome to Lokmanya Tilak College, Sevli - an institution that has been at the forefront of quality
                education for over five decades. Our commitment to academic excellence, holistic development, and
                character building has made us a preferred choice for students seeking higher education.&quot;
              </p>
              <p>
                &quot;We believe in nurturing not just academic brilliance but also ethical values, critical thinking, and
                social responsibility. Our dedicated faculty, modern infrastructure, and student-centric approach ensure
                that every student receives the best possible education and guidance.&quot;
              </p>
              <p>
                &quot;As we move forward in this digital age, we continue to adapt and innovate while staying true to our
                core values. I invite you to be part of our academic community and embark on a journey of learning,
                growth, and success.&quot;
              </p>
            </div>
            <div className="mt-8">
              <div className="border-l-4 border-primary-600 pl-4">
                <h4 className="font-bold text-gray-900">Dr. [Principal Name]</h4>
                <p className="text-gray-600">Principal</p>
                <p className="text-gray-600">Lokmanya Tilak College, Sevli</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PrincipalMessage
