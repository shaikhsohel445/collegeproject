import { Target, Eye, Heart, Star } from "lucide-react"

const VisionMission = () => {
  const values = [
    {
      icon: Star,
      title: "Excellence",
      description: "Striving for the highest standards in education and research",
    },
    {
      icon: Heart,
      title: "Integrity",
      description: "Upholding ethical values and moral principles in all endeavors",
    },
    {
      icon: Target,
      title: "Innovation",
      description: "Fostering creativity and embracing new ideas and technologies",
    },
    {
      icon: Eye,
      title: "Inclusivity",
      description: "Creating an environment that welcomes diversity and promotes equality",
    },
  ]

  return (
    <section className="section-padding">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Vision */}
          <div className="card">
            <div className="flex items-center mb-6">
              <div className="bg-primary-100 p-3 rounded-lg mr-4">
                <Eye className="h-8 w-8 text-primary-600" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900">Our Vision</h2>
            </div>
            <p className="text-body text-lg leading-relaxed">
              To be a leading institution of higher education that empowers students with knowledge, skills, and values
              necessary to become responsible global citizens and contribute meaningfully to society's progress and
              development.
            </p>
          </div>

          {/* Mission */}
          <div className="card">
            <div className="flex items-center mb-6">
              <div className="bg-secondary-100 p-3 rounded-lg mr-4">
                <Target className="h-8 w-8 text-secondary-600" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900">Our Mission</h2>
            </div>
            <p className="text-body text-lg leading-relaxed">
              To provide quality education through innovative teaching methods, foster research and innovation, promote
              holistic development of students, and serve the community through extension activities while maintaining
              the highest standards of academic excellence.
            </p>
          </div>
        </div>

        {/* Core Values */}
        <div className="mt-16">
          <div className="text-center mb-12">
            <h2 className="heading-secondary">Our Core Values</h2>
            <p className="text-body text-lg max-w-3xl mx-auto">
              These fundamental principles guide our actions and decisions, shaping the character of our institution and
              the individuals we nurture.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center group">
                <div className="bg-gradient-to-br from-primary-500 to-secondary-500 p-4 rounded-full w-20 h-20 mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <value.icon className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{value.title}</h3>
                <p className="text-body">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default VisionMission
