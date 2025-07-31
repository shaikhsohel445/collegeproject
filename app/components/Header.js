"use client"
import { useState } from "react"
import Link from "next/link"
import { Menu, X, ChevronDown } from "lucide-react"

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState(null)

  const navigationItems = [
    { name: "Home", href: "/" },
    {
      name: "About Us",
      href: "/about",
      dropdown: [
        { name: "Vision & Mission", href: "../components/about/VisionMission" },
        { name: "College Profile", href: "../components/about/profile" },
        { name: "Principal's Message", href: "/about/principal-message" },
        { name: "Governing Body", href: "/about/governing-body" },
        { name: "Mandatory Disclosures", href: "/about/disclosures" },
      ],
    },
    {
      name: "Academics",
      href: "/academics",
      dropdown: [
        { name: "Courses Offered", href: "/academics/courses" },
        { name: "Departments", href: "/academics/departments" },
        { name: "Academic Calendar", href: "/academics/calendar" },
        { name: "Examination", href: "/academics/examination" },
        { name: "Time Table", href: "/academics/timetable" },
      ],
    },
    { name: "Faculty", href: "/faculty" },
    {
      name: "IQAC",
      href: "/iqac",
      dropdown: [
        { name: "About IQAC", href: "/iqac/about" },
        { name: "AQAR Reports", href: "/iqac/aqar" },
        { name: "Meeting Minutes", href: "/iqac/minutes" },
        { name: "Feedback Reports", href: "/iqac/feedback" },
        { name: "Policies", href: "/iqac/policies" },
      ],
    },
    {
      name: "NAAC",
      href: "/naac",
      dropdown: [
        { name: "Accreditation Status", href: "/naac/status" },
        { name: "SSR Report", href: "/naac/ssr" },
        { name: "Best Practices", href: "/naac/best-practices" },
        { name: "DVV Clarifications", href: "/naac/dvv" },
      ],
    },
    { name: "Admission", href: "/admission" },
    { name: "Contact", href: "/contact" },
  ]

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      {/* Top Bar */}
      <div className="bg-primary-900 text-white py-2">
        <div className="container-custom">
          <div className="flex justify-between items-center text-sm">
            <div className="flex space-x-4">
              <span>📧 info@lokmanyatilakcollege.edu.in</span>
              <span>📞 +91-XXXXXXXXXX</span>
            </div>
            <div className="flex space-x-4">
              <Link href="/admission" className="hover:text-primary-200">
                Admissions Open
              </Link>
              <Link href="/results" className="hover:text-primary-200">
                Results
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="container-custom">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
            {/* <img
              src="/placeholder.svg?height=60&width=60&text=LTC"
              alt="Lokmanya Tilak College Logo"
              className="h-12 w-12"
            /> */}
            <div>
              <h1 className="text-xl font-bold text-primary-900">Lokmanya Tilak College</h1>
              <p className="text-sm text-gray-600">Sevli - Excellence in Education</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <div key={item.name} className="relative group">
                <Link
                  href={item.href}
                  className="flex items-center space-x-1 text-gray-700 hover:text-primary-600 font-medium transition-colors"
                  onMouseEnter={() => setActiveDropdown(item.name)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <span>{item.name}</span>
                  {item.dropdown && <ChevronDown className="h-4 w-4" />}
                </Link>

                {/* Dropdown Menu */}
                {item.dropdown && activeDropdown === item.name && (
                  <div
                    className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-xl border border-gray-100 py-2 z-50"
                    onMouseEnter={() => setActiveDropdown(item.name)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    {item.dropdown.map((dropdownItem) => (
                      <Link
                        key={dropdownItem.name}
                        href={dropdownItem.href}
                        className="block px-4 py-2 text-gray-700 hover:bg-primary-50 hover:text-primary-600 transition-colors"
                      >
                        {dropdownItem.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button className="lg:hidden p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden border-t border-gray-200 py-4">
            {navigationItems.map((item) => (
              <div key={item.name} className="py-2">
                <Link
                  href={item.href}
                  className="block text-gray-700 hover:text-primary-600 font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
                {item.dropdown && (
                  <div className="ml-4 mt-2 space-y-2">
                    {item.dropdown.map((dropdownItem) => (
                      <Link
                        key={dropdownItem.name}
                        href={dropdownItem.href}
                        className="block text-sm text-gray-600 hover:text-primary-600"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {dropdownItem.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </nav>
    </header>
  )
}

export default Header
