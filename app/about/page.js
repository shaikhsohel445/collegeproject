import VisionMission from "../components/about/VisionMission"
import CollegeProfile from "../components/about/CollegeProfile"
import PrincipalMessage from "../components/about/PrincipalMessage"
import GoverningBody from "../components/about/GoverningBody"

export const metadata = {
  title: "About Us - Lokmanya Tilak College, Sevli",
  description: "Learn about our vision, mission, history and leadership at Lokmanya Tilak College, Sevli.",
}

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <div className="hero-gradient text-white py-20">
        <div className="container-custom text-center">
          <h1 className="text-5xl font-bold mb-4">About Us</h1>
          <p className="text-xl opacity-90">Discover our journey, values, and commitment to excellence in education</p>
        </div>
      </div>

      <VisionMission />
      <CollegeProfile />
      <PrincipalMessage />
      <GoverningBody />
    </div>
  )
}
