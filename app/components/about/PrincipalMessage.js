import Image from "next/image"
import { Quote, Award, BookOpen, Users } from "lucide-react"

const PrincipalMessage = () => {
  const achievements = [
    {
      icon: Award,
      title: "NAAC B++ Grade",
      description: "Achieved in 2022 re-accreditation",
    },
    {
      icon: BookOpen,
      title: "Academic Excellence",
      description: "Consistent high pass percentage",
    },
    {
      icon: Users,
      title: "Student Development",
      description: "Holistic personality development",
    },
  ]

  return (
    <section className="section-padding">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Principal Image and Info */}
          <div className="relative">
            <div className="card text-center">
              <div className="relative inline-block mb-6">
                <Image
                  src="/placeholder.svg?height=300&width=250&text=Principal"
                  alt="Principal"
                  width={250}
                  height={300}
                  className="rounded-lg shadow-lg mx-auto"
                />
                <div className="absolute -top-4 -right-4 bg-primary-600 text-white p-3 rounded-full">
                  <Quote className="h-6 w-6" />
                </div>
              </div>

              <div className="border-t pt-6">
                <h3 className="text-xl font-bold text-gray-900">Dr. [Principal Name]</h3>
                <p className="text-primary-600 font-medium">Principal</p>
                <p className="text-gray-600 text-sm">Ph.D., M.A., B.Ed.</p>
                <p className="text-gray-600 text-sm">25+ Years in Education</p>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-3 gap-4 mt-6 pt-6 border-t">
                {achievements.map((achievement, index) => (
                  <div key={index} className="text-center">
                    <div className="bg-primary-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-2">
                      <achievement.icon className="h-6 w-6 text-primary-600" />
                    </div>
                    <h4 className="font-semibold text-gray-900 text-sm">{achievement.title}</h4>
                    <p className="text-xs text-gray-600">{achievement.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Message Content */}
          <div>
            <h2 className="heading-secondary">Principal&apos;s Message</h2>

            <div className="space-y-6 text-body text-lg leading-relaxed">
              <div className="relative">
                <Quote className="absolute -top-2 -left-2 h-8 w-8 text-primary-200" />
                <p className="pl-6">Dear Students, Faculty, and Well-wishers,</p>
              </div>

              <p>
                It gives me immense pleasure to welcome you to Lokmanya Tilak College, Sevli &mdash; an institution that has
                been a beacon of quality education for over five decades. Our college stands as a testament to the
                vision of providing accessible, affordable, and excellent higher education to students from all walks of
                life.
              </p>

              <p>
                At LTC Sevli, we believe that education is not merely about acquiring knowledge but about developing
                critical thinking, ethical values, and social responsibility. Our dedicated faculty members work
                tirelessly to create an environment that fosters intellectual curiosity, creativity, and innovation.
              </p>

              <p>
                Our recent NAAC B++ accreditation reflects our commitment to maintaining the highest standards of
                academic excellence. We continue to evolve and adapt to meet the changing needs of society while staying
                true to our core values of integrity, inclusivity, and excellence.
              </p>

              <p>
                I encourage all our students to make the most of the opportunities available here &mdash; engage actively in
                academics, participate in extracurricular activities, and develop the skills necessary to become
                responsible global citizens.
              </p>

              <div className="bg-primary-50 p-6 rounded-lg border-l-4 border-primary-600">
                <p className="italic">
                  &quot;Education is the most powerful weapon which you can use to change the world. At Lokmanya Tilak
                  College, we are committed to empowering our students with this weapon of knowledge and wisdom.&quot;
                </p>
              </div>

              <p>Together, let us continue to build a brighter future for our students and society.</p>

              <div className="pt-4">
                <p className="font-semibold text-gray-900">Warm regards,</p>
                <div className="mt-2">
                  <p className="font-bold text-primary-600 text-xl">Dr. [Principal Name]</p>
                  <p className="text-gray-600">Principal</p>
                  <p className="text-gray-600">Lokmanya Tilak College, Sevli</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Vision for Future */}
        <div className="mt-16">
          <div className="card bg-gradient-to-r from-primary-500 to-secondary-500 text-white">
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-4">Our Vision for the Future</h3>
              <p className="text-lg opacity-90 max-w-4xl mx-auto">
                To transform Lokmanya Tilak College into a center of excellence that not only imparts quality education
                but also serves as a catalyst for social change and community development. We envision our graduates as
                leaders who will contribute meaningfully to nation-building and global progress.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PrincipalMessage
