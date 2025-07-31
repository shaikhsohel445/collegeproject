import { Calendar, GraduationCap, FileText, Users } from "lucide-react"
import Link from "next/link"

const QuickInfoPanels = () => {
  const panels = [
    {
      icon: Calendar,
      title: "Admissions Open",
      description: "Apply now for Academic Year 2024-25",
      link: "/admission",
      color: "bg-primary-600",
      textColor: "text-white",
    },
    {
      icon: GraduationCap,
      title: "Courses Offered",
      description: "UG & PG Programs in Arts, Commerce & Science",
      link: "/academics/courses",
      color: "bg-secondary-600",
      textColor: "text-white",
    },
    {
      icon: FileText,
      title: "Examination Results",
      description: "Check your semester results online",
      link: "/results",
      color: "bg-orange-600",
      textColor: "text-white",
    },
    {
      icon: Users,
      title: "Student Portal",
      description: "Access student services and resources",
      link: "/student-portal",
      color: "bg-purple-600",
      textColor: "text-white",
    },
  ]

  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {panels.map((panel, index) => (
            <Link key={index} href={panel.link} className="group block">
              <div
                className={`${panel.color} ${panel.textColor} p-6 rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300`}
              >
                <div className="flex items-center mb-4">
                  <panel.icon className="h-8 w-8 mr-3" />
                  <h3 className="text-xl font-bold">{panel.title}</h3>
                </div>
                <p className="opacity-90 group-hover:opacity-100 transition-opacity">{panel.description}</p>
                <div className="mt-4 text-sm font-medium opacity-75 group-hover:opacity-100">Learn More →</div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

export default QuickInfoPanels
