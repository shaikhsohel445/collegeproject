import { Calendar, Award, Users, BookOpen, Building, MapPin } from "lucide-react"

const CollegeProfile = () => {
  const profileData = {
    established: "1970",
    affiliation: "University of [State Name]",
    naacGrade: "B++",
    accreditationYear: "2022",
    totalArea: "25 Acres",
    location: "Sevli, District Name, State",
  }

  const milestones = [
    {
      year: "1970",
      event: "College Established",
      description: "Founded with a vision to provide quality higher education in rural areas",
    },
    {
      year: "1985",
      event: "University Affiliation",
      description: "Affiliated with the State University for undergraduate programs",
    },
    {
      year: "1995",
      event: "Postgraduate Programs",
      description: "Introduced M.A., M.Com, and M.Sc programs",
    },
    {
      year: "2010",
      event: "Infrastructure Development",
      description: "Major expansion with new academic blocks and modern facilities",
    },
    {
      year: "2018",
      event: "First NAAC Accreditation",
      description: "Achieved NAAC accreditation with B+ grade",
    },
    {
      year: "2022",
      event: "NAAC Re-accreditation",
      description: "Re-accredited with improved B++ grade",
    },
  ]

  const facilities = [
    {
      icon: BookOpen,
      name: "Central Library",
      description: "Over 50,000 books, journals, and digital resources",
    },
    {
      icon: Building,
      name: "Laboratories",
      description: "Well-equipped labs for Science, Computer, and Language studies",
    },
    {
      icon: Users,
      name: "Auditorium",
      description: "500-seater auditorium for events and seminars",
    },
    {
      icon: Award,
      name: "Sports Complex",
      description: "Indoor and outdoor sports facilities",
    },
  ]

  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="heading-secondary">College Profile</h2>
          <p className="text-body text-lg">A comprehensive overview of our institution&apos;s journey and achievements</p>
        </div>

        {/* Basic Information */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div className="card">
            <h3 className="text-xl font-bold text-gray-900 mb-6">Institution Details</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between py-2 border-b border-gray-100">
                <div className="flex items-center">
                  <Calendar className="h-5 w-5 text-primary-600 mr-2" />
                  <span className="text-gray-700">Established</span>
                </div>
                <span className="font-semibold">{profileData.established}</span>
              </div>
              <div className="flex items-center justify-between py-2 border-b border-gray-100">
                <div className="flex items-center">
                  <Award className="h-5 w-5 text-primary-600 mr-2" />
                  <span className="text-gray-700">NAAC Grade</span>
                </div>
                <span className="font-semibold text-green-600">{profileData.naacGrade}</span>
              </div>
              <div className="flex items-center justify-between py-2 border-b border-gray-100">
                <div className="flex items-center">
                  <BookOpen className="h-5 w-5 text-primary-600 mr-2" />
                  <span className="text-gray-700">Affiliation</span>
                </div>
                <span className="font-semibold">{profileData.affiliation}</span>
              </div>
              <div className="flex items-center justify-between py-2 border-b border-gray-100">
                <div className="flex items-center">
                  <Building className="h-5 w-5 text-primary-600 mr-2" />
                  <span className="text-gray-700">Campus Area</span>
                </div>
                <span className="font-semibold">{profileData.totalArea}</span>
              </div>
              <div className="flex items-center justify-between py-2">
                <div className="flex items-center">
                  <MapPin className="h-5 w-5 text-primary-600 mr-2" />
                  <span className="text-gray-700">Location</span>
                </div>
                <span className="font-semibold">{profileData.location}</span>
              </div>
            </div>
          </div>

          <div className="card">
            <h3 className="text-xl font-bold text-gray-900 mb-6">Key Facilities</h3>
            <div className="space-y-4">
              {facilities.map((facility, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="bg-primary-100 p-2 rounded-lg">
                    <facility.icon className="h-5 w-5 text-primary-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">{facility.name}</h4>
                    <p className="text-sm text-gray-600">{facility.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Timeline */}
        <div>
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Our Journey</h3>
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-primary-200"></div>

            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <div
                  key={index}
                  className={`relative flex items-center ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-primary-600 rounded-full border-4 border-white shadow"></div>

                  {/* Content */}
                  <div className={`ml-12 md:ml-0 md:w-1/2 ${index % 2 === 0 ? "md:pr-8" : "md:pl-8"}`}>
                    <div className="card">
                      <div className="flex items-center mb-2">
                        <span className="bg-primary-600 text-white px-3 py-1 rounded-full text-sm font-bold">
                          {milestone.year}
                        </span>
                      </div>
                      <h4 className="text-lg font-bold text-gray-900 mb-2">{milestone.event}</h4>
                      <p className="text-gray-600">{milestone.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Recognition and Achievements */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Recognition & Achievements</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card text-center">
              <div className="bg-yellow-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-yellow-600" />
              </div>
              <h4 className="font-bold text-gray-900 mb-2">NAAC Accredited</h4>
              <p className="text-gray-600">Recognized for quality education and institutional excellence</p>
            </div>

            <div className="card text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-blue-600" />
              </div>
              <h4 className="font-bold text-gray-900 mb-2">50+ Years</h4>
              <p className="text-gray-600">Over five decades of educational excellence and service</p>
            </div>

            <div className="card text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <BookOpen className="h-8 w-8 text-green-600" />
              </div>
              <h4 className="font-bold text-gray-900 mb-2">2000+ Alumni</h4>
              <p className="text-gray-600">Proud alumni contributing to society in various fields</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CollegeProfile
