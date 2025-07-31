import { FileText, Users, Award, BookOpen, Building, Calendar } from "lucide-react"
import Link from "next/link"

const QuickLinks = () => {
  const links = [
    {
      icon: FileText,
      title: "SSR Report",
      description: "Self Study Report for NAAC",
      href: "/naac/ssr",
      color: "bg-blue-500",
    },
    {
      icon: Award,
      title: "IQAC",
      description: "Internal Quality Assurance Cell",
      href: "/iqac",
      color: "bg-green-500",
    },
    {
      icon: Users,
      title: "Faculty",
      description: "Meet our experienced faculty",
      href: "/faculty",
      color: "bg-purple-500",
    },
    {
      icon: BookOpen,
      title: "Alumni",
      description: "Connect with our alumni network",
      href: "/alumni",
      color: "bg-orange-500",
    },
    {
      icon: Building,
      title: "Infrastructure",
      description: "Explore our campus facilities",
      href: "/infrastructure",
      color: "bg-red-500",
    },
    {
      icon: Calendar,
      title: "Events",
      description: "Upcoming events and activities",
      href: "/events",
      color: "bg-indigo-500",
    },
  ]

  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="heading-secondary">Quick Access</h2>
          <p className="text-body text-lg">Easy access to important sections and resources</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {links.map((link, index) => (
            <Link key={index} href={link.href} className="group">
              <div className="text-center p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 group-hover:-translate-y-1">
                <div
                  className={`${link.color} w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}
                >
                  <link.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">{link.title}</h3>
                <p className="text-sm text-gray-600">{link.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

export default QuickLinks
