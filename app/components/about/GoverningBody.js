import { Users, Crown, Award, Briefcase } from "lucide-react"

const GoverningBody = () => {
  const members = [
    {
      name: "Shri [Chairman Name]",
      position: "Chairman",
      category: "Management",
      qualification: "M.A., LL.B.",
      experience: "30+ years in Education Administration",
      icon: Crown,
      image: "/placeholder.svg?height=150&width=150&text=Chairman",
    },
    {
      name: "Dr. [Principal Name]",
      position: "Principal (Ex-Officio Secretary)",
      category: "Academic",
      qualification: "Ph.D., M.A., B.Ed.",
      experience: "25+ years in Higher Education",
      icon: Award,
      image: "/placeholder.svg?height=150&width=150&text=Principal",
    },
    {
      name: "Prof. [Vice Principal Name]",
      position: "Vice Principal",
      category: "Academic",
      qualification: "M.A., M.Phil., Ph.D.",
      experience: "20+ years in Teaching",
      icon: Users,
      image: "/placeholder.svg?height=150&width=150&text=VP",
    },
    {
      name: "Shri [Treasurer Name]",
      position: "Treasurer",
      category: "Management",
      qualification: "M.Com., C.A.",
      experience: "15+ years in Finance",
      icon: Briefcase,
      image: "/placeholder.svg?height=150&width=150&text=Treasurer",
    },
    {
      name: "Dr. [Faculty Rep Name]",
      position: "Faculty Representative",
      category: "Academic",
      qualification: "Ph.D. in Science",
      experience: "18+ years in Research & Teaching",
      icon: Users,
      image: "/placeholder.svg?height=150&width=150&text=Faculty",
    },
    {
      name: "Shri [Alumni Rep Name]",
      position: "Alumni Representative",
      category: "Alumni",
      qualification: "M.A. (Alumni - 1995)",
      experience: "Social Worker & Entrepreneur",
      icon: Award,
      image: "/placeholder.svg?height=150&width=150&text=Alumni",
    },
  ]

  const committees = [
    {
      name: "Academic Committee",
      members: ["Principal", "Vice Principal", "All HODs", "Faculty Representatives"],
      purpose: "Academic planning, curriculum development, and quality assurance",
    },
    {
      name: "Finance Committee",
      members: ["Chairman", "Treasurer", "Principal", "Management Representative"],
      purpose: "Budget planning, financial oversight, and resource allocation",
    },
    {
      name: "Infrastructure Committee",
      members: ["Management Rep", "Principal", "Admin Officer", "Faculty Rep"],
      purpose: "Campus development, maintenance, and facility upgrades",
    },
    {
      name: "Student Welfare Committee",
      members: ["Principal", "Student Counselor", "Faculty Reps", "Student Reps"],
      purpose: "Student support services, grievance handling, and welfare activities",
    },
  ]

  return (
    <section className="section-padding">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="heading-secondary">Governing Body</h2>
          <p className="text-body text-lg">
            Meet the distinguished members who guide our institution towards excellence
          </p>
        </div>

        {/* Governing Body Members */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {members.map((member, index) => (
            <div key={index} className="card text-center hover:shadow-xl transition-shadow duration-300">
              <div className="relative mb-4">
                <img
                  src={member.image || "/placeholder.svg"}
                  alt={member.name}
                  className="w-32 h-32 rounded-full mx-auto object-cover border-4 border-primary-100"
                />
                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-primary-600 text-white p-2 rounded-full">
                  <member.icon className="h-5 w-5" />
                </div>
              </div>

              <h3 className="text-lg font-bold text-gray-900 mb-1">{member.name}</h3>
              <p className="text-primary-600 font-semibold mb-2">{member.position}</p>

              <div className="space-y-2 text-sm">
                <div className="flex justify-center">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-medium ${
                      member.category === "Management"
                        ? "bg-blue-100 text-blue-800"
                        : member.category === "Academic"
                          ? "bg-green-100 text-green-800"
                          : "bg-purple-100 text-purple-800"
                    }`}
                  >
                    {member.category}
                  </span>
                </div>
                <p className="text-gray-600">{member.qualification}</p>
                <p className="text-gray-500 text-xs">{member.experience}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Committees */}
        <div>
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Key Committees</h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {committees.map((committee, index) => (
              <div key={index} className="card">
                <h4 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                  <Users className="h-6 w-6 text-primary-600 mr-2" />
                  {committee.name}
                </h4>

                <div className="mb-4">
                  <h5 className="font-semibold text-gray-700 mb-2">Members:</h5>
                  <div className="flex flex-wrap gap-2">
                    {committee.members.map((member, memberIndex) => (
                      <span
                        key={memberIndex}
                        className="bg-primary-100 text-primary-800 px-3 py-1 rounded-full text-sm"
                      >
                        {member}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h5 className="font-semibold text-gray-700 mb-2">Purpose:</h5>
                  <p className="text-gray-600 text-sm">{committee.purpose}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Meeting Schedule */}
        <div className="mt-16">
          <div className="card bg-gray-50">
            <h3 className="text-xl font-bold text-gray-900 mb-6 text-center">Meeting Schedule</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-semibold text-gray-900 mb-4">Regular Meetings</h4>
                <div className="space-y-3">
                  <div className="flex justify-between items-center py-2 border-b border-gray-200">
                    <span className="text-gray-700">Governing Body</span>
                    <span className="font-medium">Quarterly</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-gray-200">
                    <span className="text-gray-700">Academic Committee</span>
                    <span className="font-medium">Monthly</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-gray-200">
                    <span className="text-gray-700">Finance Committee</span>
                    <span className="font-medium">Bi-monthly</span>
                  </div>
                  <div className="flex justify-between items-center py-2">
                    <span className="text-gray-700">Other Committees</span>
                    <span className="font-medium">As needed</span>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-gray-900 mb-4">Contact Information</h4>
                <div className="space-y-2 text-sm">
                  <p>
                    <strong>Secretary:</strong> Principal's Office
                  </p>
                  <p>
                    <strong>Phone:</strong> +91-XXXXXXXXXX
                  </p>
                  <p>
                    <strong>Email:</strong> principal@lokmanyatilakcollege.edu.in
                  </p>
                  <p>
                    <strong>Office Hours:</strong> Monday - Friday, 10:00 AM - 4:00 PM
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default GoverningBody
