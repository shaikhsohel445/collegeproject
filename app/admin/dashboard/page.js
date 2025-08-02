"use client"
import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import AdminLayout from "../components/AdminLayout"
import DashboardStats from "../components/DashboardStats"
import RecentActivity from "../components/RecentActivity"
import QuickActions from "../components/QuickActions"

export default function AdminDashboard() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [loading, setLoading] = useState(true)
  const router = useRouter()

  useEffect(() => {
    const token = localStorage.getItem("adminToken")
    if (!token) {
      router.push("/admin")
      return
    }

    const verifyToken = async (token) => {
      try {
        const response = await fetch("/api/admin/verify", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })

        if (response.ok) {
          setIsAuthenticated(true)
        } else {
          localStorage.removeItem("adminToken")
          router.push("/admin")
        }
      } catch (error) {
        console.error("Token verification failed:", error)
        router.push("/admin")
      } finally {
        setLoading(false)
      }
    }

    verifyToken(token)
  }, [router]) // ✅ No more lint error

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary-600"></div>
      </div>
    )
  }

  if (!isAuthenticated) {
    return null
  }

  return (
    <AdminLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
          <p className="text-gray-600">Welcome to the admin dashboard</p>
        </div>

        <DashboardStats />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <RecentActivity />
          <QuickActions />
        </div>
      </div>
    </AdminLayout>
  )
}
