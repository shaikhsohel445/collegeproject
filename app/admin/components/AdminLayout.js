"use client"
import { useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import Image from "next/image" 
import {
  Home,
  Users,
  Calendar,
  ImageIcon,
  Settings,
  LogOut,
  Menu,
  X,
  Bell,
  GraduationCap,
  BarChart3,
} from "lucide-react"

const AdminLayout = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const router = useRouter()

  const navigation = [
    { name: "Dashboard", href: "/admin/dashboard", icon: Home },
    { name: "Notices", href: "/admin/notices", icon: Bell },
    { name: "Events", href: "/admin/events", icon: Calendar },
    { name: "Faculty", href: "/admin/faculty", icon: Users },
    { name: "Gallery", href: "/admin/gallery", icon: ImageIcon },
    { name: "Admissions", href: "/admin/admissions", icon: GraduationCap },
    { name: "Analytics", href: "/admin/analytics", icon: BarChart3 },
    { name: "Settings", href: "/admin/settings", icon: Settings },
  ]

  const handleLogout = () => {
    localStorage.removeItem("adminToken")
    router.push("/admin")
  }

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Mobile sidebar */}
      <div className={`fixed inset-0 z-40 lg:hidden ${sidebarOpen ? "block" : "hidden"}`}>
        <div className="fixed inset-0 bg-gray-600 bg-opacity-75" onClick={() => setSidebarOpen(false)} />
        <div className="relative flex-1 flex flex-col max-w-xs w-full bg-white">
          <div className="absolute top-0 right-0 -mr-12 pt-2">
            <button
              className="ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              onClick={() => setSidebarOpen(false)}
            >
              <X className="h-6 w-6 text-white" />
            </button>
          </div>
          <SidebarContent navigation={navigation} onLogout={handleLogout} />
        </div>
      </div>

      {/* Desktop sidebar */}
      <div className="hidden lg:flex lg:w-64 lg:flex-col lg:fixed lg:inset-y-0">
        <SidebarContent navigation={navigation} onLogout={handleLogout} />
      </div>

      {/* Main content */}
      <div className="lg:pl-64 flex flex-col flex-1">
        <div className="sticky top-0 z-10 lg:hidden pl-1 pt-1 sm:pl-3 sm:pt-3 bg-gray-100">
          <button
            className="-ml-0.5 -mt-0.5 h-12 w-12 inline-flex items-center justify-center rounded-md text-gray-500 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary-500"
            onClick={() => setSidebarOpen(true)}
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>
        <main className="flex-1 p-4 lg:p-8">{children}</main>
      </div>
    </div>
  )
}

const SidebarContent = ({ navigation, onLogout }) => {
  return (
    <div className="flex-1 flex flex-col min-h-0 bg-white border-r border-gray-200">
      <div className="flex-1 flex flex-col pt-5 pb-4 overflow-y-auto">
        <div className="flex items-center flex-shrink-0 px-4">
          {/* ✅ Replaced <img> with <Image> */}
          <Image
            src="/placeholder.svg?height=32&width=120&text=LTC+Admin"
            alt="LTC Admin"
            width={120}
            height={32}
          />
        </div>
        <nav className="mt-5 flex-1 px-2 space-y-1">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="group flex items-center px-2 py-2 text-sm font-medium rounded-md text-gray-600 hover:bg-gray-50 hover:text-gray-900"
            >
              <item.icon className="mr-3 flex-shrink-0 h-6 w-6" />
              {item.name}
            </Link>
          ))}
        </nav>
      </div>
      <div className="flex-shrink-0 flex border-t border-gray-200 p-4">
        <button
          onClick={onLogout}
          className="flex items-center w-full px-2 py-2 text-sm font-medium text-gray-600 rounded-md hover:bg-gray-50 hover:text-gray-900"
        >
          <LogOut className="mr-3 h-6 w-6" />
          Sign out
        </button>
      </div>
    </div>
  )
}

export default AdminLayout
