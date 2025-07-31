import { Plus, Upload, Download, Settings, Users, FileText } from "lucide-react"
import Link from "next/link"

const QuickActions = () => {
  const actions = [
    {
      name: "Add Notice",
      description: "Create a new notice",
      href: "/admin/notices",
      icon: Plus,
      color: "bg-blue-500 hover:bg-blue-600",
    },
    {
      name: "Add Faculty",
      description: "Add new faculty member",
      href: "/admin/faculty",
      icon: Users,
      color: "bg-green-500 hover:bg-green-600",
    },
    {
      name: "Upload Images",
      description: "Add to gallery",
      href: "/admin/gallery",
      icon: Upload,
      color: "bg-purple-500 hover:bg-purple-600",
    },
    {
      name: "Export Data",
      description: "Download reports",
      href: "/admin/reports",
      icon: Download,
      color: "bg-orange-500 hover:bg-orange-600",
    },
    {
      name: "View Applications",
      description: "Manage admissions",
      href: "/admin/admissions",
      icon: FileText,
      color: "bg-indigo-500 hover:bg-indigo-600",
    },
    {
      name: "Settings",
      description: "System configuration",
      href: "/admin/settings",
      icon: Settings,
      color: "bg-gray-500 hover:bg-gray-600",
    },
  ]

  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h3 className="text-lg font-medium text-gray-900 mb-4">Quick Actions</h3>

      <div className="grid grid-cols-2 gap-4">
        {actions.map((action) => (
          <Link
            key={action.name}
            href={action.href}
            className={`${action.color} text-white p-4 rounded-lg transition-colors duration-200 group`}
          >
            <div className="flex items-center space-x-3">
              <action.icon className="h-6 w-6" />
              <div>
                <div className="font-medium">{action.name}</div>
                <div className="text-sm opacity-90">{action.description}</div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default QuickActions
