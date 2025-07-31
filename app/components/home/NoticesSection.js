"use client"
import { useState, useEffect } from "react"
import { Calendar, ArrowRight, Bell } from "lucide-react"
import Link from "next/link"

const NoticesSection = () => {
  const [notices, setNotices] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchNotices()
  }, [])

  const fetchNotices = async () => {
    try {
      const response = await fetch("/api/notices?limit=5")
      if (response.ok) {
        const data = await response.json()
        setNotices(data)
      }
    } catch (error) {
      console.error("Failed to fetch notices:", error)
    } finally {
      setLoading(false)
    }
  }

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString("en-IN", {
      year: "numeric",
      month: "short",
      day: "numeric",
    })
  }

  if (loading) {
    return (
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center">
            <div className="animate-pulse">Loading notices...</div>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="heading-secondary flex items-center justify-center">
            <Bell className="h-8 w-8 mr-3 text-primary-600" />
            Latest Notices & Announcements
          </h2>
          <p className="text-body text-lg">Stay updated with the latest news and important announcements</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Notices List */}
          <div className="space-y-4">
            {notices.length > 0 ? (
              notices.map((notice, index) => (
                <div key={index} className="card hover:shadow-xl transition-shadow duration-300">
                  <div className="flex items-start space-x-4">
                    <div className="bg-primary-100 p-2 rounded-lg flex-shrink-0">
                      <Calendar className="h-5 w-5 text-primary-600" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2">{notice.title}</h3>
                      <p className="text-gray-600 text-sm mb-3 line-clamp-3">{notice.content}</p>
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-gray-500">{formatDate(notice.publishedAt)}</span>
                        <span className="text-xs bg-primary-100 text-primary-700 px-2 py-1 rounded-full">
                          {notice.category}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="text-center py-8">
                <p className="text-gray-500">No notices available at the moment.</p>
              </div>
            )}
          </div>

          {/* Quick Actions */}
          <div className="space-y-6">
            <div className="card bg-gradient-to-br from-primary-500 to-primary-600 text-white">
              <h3 className="text-xl font-bold mb-4">Important Links</h3>
              <div className="space-y-3">
                <Link href="/admission" className="flex items-center justify-between hover:bg-white/10 p-2 rounded">
                  <span>Admission Guidelines</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/academics/calendar"
                  className="flex items-center justify-between hover:bg-white/10 p-2 rounded"
                >
                  <span>Academic Calendar</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/academics/examination"
                  className="flex items-center justify-between hover:bg-white/10 p-2 rounded"
                >
                  <span>Examination Schedule</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link href="/results" className="flex items-center justify-between hover:bg-white/10 p-2 rounded">
                  <span>Results</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>

            <div className="card">
              <h3 className="text-xl font-bold mb-4 text-gray-900">Emergency Contacts</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">Principal Office:</span>
                  <span className="font-medium">+91-XXXXXXXXXX</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Admission Office:</span>
                  <span className="font-medium">+91-XXXXXXXXXX</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Student Helpline:</span>
                  <span className="font-medium">+91-XXXXXXXXXX</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-8">
          <Link href="/notices" className="btn-primary">
            View All Notices
          </Link>
        </div>
      </div>
    </section>
  )
}

export default NoticesSection
