"use client"
import { useState, useEffect } from "react"
import { Activity, FileText, Users, Calendar, MessageSquare } from "lucide-react"

const RecentActivity = () => {
  const [activities, setActivities] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchRecentActivity()
  }, [])

  const fetchRecentActivity = async () => {
    try {
      // Simulate fetching recent activities
      // In a real app, this would come from your backend
      const mockActivities = [
        {
          id: 1,
          type: "notice",
          action: "created",
          title: "New admission notice published",
          time: "2 hours ago",
          icon: FileText,
          color: "text-blue-600",
        },
        {
          id: 2,
          type: "application",
          action: "received",
          title: "5 new admission applications",
          time: "4 hours ago",
          icon: Users,
          color: "text-green-600",
        },
        {
          id: 3,
          type: "event",
          action: "updated",
          title: "Annual sports day event updated",
          time: "6 hours ago",
          icon: Calendar,
          color: "text-purple-600",
        },
        {
          id: 4,
          type: "contact",
          action: "received",
          title: "3 new contact form submissions",
          time: "8 hours ago",
          icon: MessageSquare,
          color: "text-orange-600",
        },
        {
          id: 5,
          type: "faculty",
          action: "added",
          title: "New faculty member added",
          time: "1 day ago",
          icon: Users,
          color: "text-indigo-600",
        },
      ]

      setActivities(mockActivities)
    } catch (error) {
      console.error("Failed to fetch recent activity:", error)
    } finally {
      setLoading(false)
    }
  }

  if (loading) {
    return (
      <div className="bg-white rounded-lg shadow p-6">
        <h3 className="text-lg font-medium text-gray-900 mb-4">Recent Activity</h3>
        <div className="space-y-4">
          {[...Array(5)].map((_, i) => (
            <div key={i} className="animate-pulse flex items-center space-x-3">
              <div className="w-8 h-8 bg-gray-200 rounded-full"></div>
              <div className="flex-1">
                <div className="h-4 bg-gray-200 rounded w-3/4 mb-1"></div>
                <div className="h-3 bg-gray-200 rounded w-1/2"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    )
  }

  return (
    <div className="bg-white rounded-lg shadow p-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-medium text-gray-900">Recent Activity</h3>
        <Activity className="h-5 w-5 text-gray-400" />
      </div>

      <div className="space-y-4">
        {activities.map((activity) => (
          <div key={activity.id} className="flex items-start space-x-3">
            <div className={`p-2 rounded-full bg-gray-100 ${activity.color}`}>
              <activity.icon className="h-4 w-4" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-gray-900">{activity.title}</p>
              <p className="text-sm text-gray-500">{activity.time}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6">
        <button className="w-full text-center text-sm text-primary-600 hover:text-primary-700 font-medium">
          View all activity
        </button>
      </div>
    </div>
  )
}

export default RecentActivity
