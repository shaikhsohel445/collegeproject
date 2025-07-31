import { GraduationCap, Users, Clock, Award } from "lucide-react"

const CoursesIntake = () => {
  const courses = [
    {
      category: "Undergraduate Programs",
      programs: [
        {
          name: "Bachelor of Arts (B.A.)",
          duration: "3 Years",
          intake: "120",
          subjects: ["English", "Hindi", "History", "Political Science", "Economics", "Sociology"],
          eligibility: "12th Pass from recognized board",
        },
        {
          name: "Bachelor of Commerce (B.Com)",
          duration: "3 Years",
          intake: "100",
          subjects: ["Accounting", "Business Studies", "Economics", "Mathematics"],
          eligibility: "12th Pass with Commerce/Science/Arts",
        },
        {
          name: "Bachelor of Science (B.Sc)",
          duration: "3 Years",
          intake: "80",
          subjects: ["Physics", "Chemistry", "Mathematics", "Biology", "Computer Science"],
          eligibility: "12th Pass with Science stream",
        },
      ],
    },
    {
      category: "Postgraduate Programs",
      programs: [
        {
          name: "Master of Arts (M.A.)",
          duration: "2 Years",
          intake: "40",
          subjects: ["English", "Hindi", "History", "Political Science"],
          eligibility: "Bachelor's degree in relevant field",
        },
        {
          name: "Master of Commerce (M.Com)",
          duration: "2 Years",
          intake: "30",
          subjects: ["Advanced Accounting", "Business Management", "Finance"],
          eligibility: "B.Com or equivalent degree",
        },
        {
          name: "Master of Science (M.Sc)",
          duration: "2 Years",
          intake: "25",
          subjects: ["Physics", "Chemistry", "Mathematics"],
          eligibility: "B.Sc in relevant subject",
        },
      ],
    },
  ]

  return (
    <section className="section-padding">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="heading-secondary">Courses & Intake</h2>
          <p className="text-body text-lg">Explore our diverse range of undergraduate and postgraduate programs</p>
        </div>

        <div className="space-y-12">
          {courses.map((category, categoryIndex) => (
            <div key={categoryIndex}>
              <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">{category.category}</h3>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {category.programs.map((program, programIndex) => (
                  <div key={programIndex} className="card hover:shadow-xl transition-shadow duration-300">
                    <div className="text-center mb-6">
                      <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                        <GraduationCap className="h-8 w-8 text-primary-600" />
                      </div>
                      <h4 className="text-xl font-bold text-gray-900 mb-2">{program.name}</h4>
                    </div>

                    <div className="space-y-4">
                      <div className="flex items-center justify-between py-2 border-b border-gray-100">
                        <div className="flex items-center">
                          <Clock className="h-4 w-4 text-gray-500 mr-2" />
                          <span className="text-gray-600">Duration</span>
                        </div>
                        <span className="font-medium">{program.duration}</span>
                      </div>

                      <div className="flex items-center justify-between py-2 border-b border-gray-100">
                        <div className="flex items-center">
                          <Users className="h-4 w-4 text-gray-500 mr-2" />
                          <span className="text-gray-600">Intake</span>
                        </div>
                        <span className="font-medium">{program.intake} seats</span>
                      </div>

                      <div className="py-2 border-b border-gray-100">
                        <div className="flex items-center mb-2">
                          <Award className="h-4 w-4 text-gray-500 mr-2" />
                          <span className="text-gray-600">Subjects</span>
                        </div>
                        <div className="flex flex-wrap gap-1">
                          {program.subjects.map((subject, subjectIndex) => (
                            <span key={subjectIndex} className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded">
                              {subject}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="py-2">
                        <h5 className="font-semibold text-gray-900 mb-2">Eligibility</h5>
                        <p className="text-sm text-gray-600">{program.eligibility}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="card bg-primary-50 border-primary-200">
            <h3 className="text-xl font-bold text-primary-900 mb-4">Important Note</h3>
            <p className="text-primary-800">
              Admission is subject to availability of seats and fulfillment of eligibility criteria. Reservation policy
              as per government norms is applicable. For detailed information about fee structure and admission process,
              please contact the admission office.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CoursesIntake
