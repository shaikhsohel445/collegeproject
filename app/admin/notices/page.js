"use client"
import { useState, useEffect } from "react"
import AdminLayout from "../components/AdminLayout"
import NoticeForm from "../components/NoticeForm"
import NoticeList from "../components/NoticeList"
import { Plus, Search } from "lucide-react"

export default function AdminNotices() {
  const [notices, setNotices] = useState([])
  const [loading, setLoading] = useState(true)
  const [showForm, setShowForm] = useState(false)
  const [editingNotice, setEditingNotice] = useState(null)
  const [searchTerm, setSearchTerm] = useState("")
  const [filterCategory, setFilterCategory] = useState("all")

  useEffect(() => {
    fetchNotices()
  }, [])

  const fetchNotices = async () => {
    try {
      const token = localStorage.getItem("adminToken")
      const response = await fetch("/api/admin/notices", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })

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

  const handleCreateNotice = () => {
    setEditingNotice(null)
    setShowForm(true)
  }

  const handleEditNotice = (notice) => {
    setEditingNotice(notice)
    setShowForm(true)
  }

  const handleDeleteNotice = async (noticeId) => {
    if (!confirm("Are you sure you want to delete this notice?")) return

    try {
      const token = localStorage.getItem("adminToken")
      const response = await fetch(`/api/admin/notices/${noticeId}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })

      if (response.ok) {
        setNotices(notices.filter((notice) => notice.id !== noticeId))
      }
    } catch (error) {
      console.error("Failed to delete notice:", error)
    }
  }

  const handleFormSubmit = async (noticeData) => {
    try {
      const token = localStorage.getItem("adminToken")
      const url = editingNotice ? `/api/admin/notices/${editingNotice.id}` : "/api/admin/notices"
      const method = editingNotice ? "PUT" : "POST"

      const response = await fetch(url, {
        method,
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(noticeData),
      })

      if (response.ok) {
        const result = await response.json()
        if (editingNotice) {
          setNotices(notices.map((notice) => (notice.id === editingNotice.id ? result.notice : notice)))
        } else {
          setNotices([result.notice, ...notices])
        }
        setShowForm(false)
        setEditingNotice(null)
      }
    } catch (error) {
      console.error("Failed to save notice:", error)
    }
  }

  const filteredNotices = notices.filter((notice) => {
    const matchesSearch =
      notice.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      notice.content.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = filterCategory === "all" || notice.category === filterCategory
    return matchesSearch && matchesCategory
  })

  return (
    <AdminLayout>
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Notices Management</h1>
            <p className="text-gray-600">Create and manage college notices</p>
          </div>
          <button
            onClick={handleCreateNotice}
            className="bg-primary-600 text-white px-4 py-2 rounded-lg flex items-center hover:bg-primary-700"
          >
            <Plus className="h-5 w-5 mr-2" />
            Add Notice
          </button>
        </div>

        {/* Search and Filter */}
        <div className="bg-white p-4 rounded-lg shadow">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search notices..."
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <select
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              value={filterCategory}
              onChange={(e) => setFilterCategory(e.target.value)}
            >
              <option value="all">All Categories</option>
              <option value="admission">Admission</option>
              <option value="examination">Examination</option>
              <option value="events">Events</option>
              <option value="general">General</option>
              <option value="academic">Academic</option>
            </select>
          </div>
        </div>

        {/* Notice Form Modal */}
        {showForm && (
          <NoticeForm
            notice={editingNotice}
            onSubmit={handleFormSubmit}
            onCancel={() => {
              setShowForm(false)
              setEditingNotice(null)
            }}
          />
        )}

        {/* Notice List */}
        <NoticeList
          notices={filteredNotices}
          loading={loading}
          onEdit={handleEditNotice}
          onDelete={handleDeleteNotice}
        />
      </div>
    </AdminLayout>
  )
}
