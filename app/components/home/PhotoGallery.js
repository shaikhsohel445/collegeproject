"use client"
import { useState, useEffect } from "react"
import { Camera, ArrowRight } from "lucide-react"
import Link from "next/link"

const PhotoGallery = () => {
  const [images, setImages] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchGalleryImages()
  }, [])

  const fetchGalleryImages = async () => {
    try {
      const response = await fetch("/api/gallery?limit=8")
      if (response.ok) {
        const data = await response.json()
        setImages(data)
      }
    } catch (error) {
      console.error("Failed to fetch gallery images:", error)
      // Fallback to placeholder images
      setImages([
        {
          id: 1,
          title: "Campus View",
          imageUrl: "/placeholder.svg?height=300&width=400&text=Campus",
          category: "campus",
        },
        {
          id: 2,
          title: "Library",
          imageUrl: "/placeholder.svg?height=300&width=400&text=Library",
          category: "facilities",
        },
        {
          id: 3,
          title: "Sports Day",
          imageUrl: "/placeholder.svg?height=300&width=400&text=Sports",
          category: "events",
        },
        {
          id: 4,
          title: "Graduation",
          imageUrl: "/placeholder.svg?height=300&width=400&text=Graduation",
          category: "events",
        },
        {
          id: 5,
          title: "Lab",
          imageUrl: "/placeholder.svg?height=300&width=400&text=Laboratory",
          category: "facilities",
        },
        {
          id: 6,
          title: "Cultural Event",
          imageUrl: "/placeholder.svg?height=300&width=400&text=Cultural",
          category: "events",
        },
        {
          id: 7,
          title: "Classroom",
          imageUrl: "/placeholder.svg?height=300&width=400&text=Classroom",
          category: "facilities",
        },
        {
          id: 8,
          title: "Annual Day",
          imageUrl: "/placeholder.svg?height=300&width=400&text=Annual+Day",
          category: "events",
        },
      ])
    } finally {
      setLoading(false)
    }
  }

  if (loading) {
    return (
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center">
            <div className="animate-pulse">Loading gallery...</div>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="section-padding">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="heading-secondary flex items-center justify-center">
            <Camera className="h-8 w-8 mr-3 text-primary-600" />
            Photo Gallery
          </h2>
          <p className="text-body text-lg">Glimpses of life at Lokmanya Tilak College</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {images.map((image, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <img
                src={image.imageUrl || "/placeholder.svg"}
                alt={image.title}
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="font-semibold">{image.title}</h3>
                  <p className="text-sm opacity-90 capitalize">{image.category}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <Link href="/gallery" className="btn-primary flex items-center mx-auto w-fit">
            View Full Gallery
            <ArrowRight className="h-5 w-5 ml-2" />
          </Link>
        </div>
      </div>
    </section>
  )
}

export default PhotoGallery
