import AdmissionForm from "../components/admission/AdmissionForm"
import CoursesIntake from "../components/admission/CoursesIntake"
import AdmissionProcess from "../components/admission/AdmissionProcess"
import FeeStructure from "../components/admission/FeeStructure"

export const metadata = {
  title: "Admission - Lokmanya Tilak College, Sevli",
  description:
    "Apply for admission to various undergraduate and postgraduate programs at Lokmanya Tilak College, Sevli.",
}

export default function AdmissionPage() {
  return (
    <div className="min-h-screen">
      <div className="hero-gradient text-white py-20">
        <div className="container-custom text-center">
          <h1 className="text-5xl font-bold mb-4">Admissions</h1>
          <p className="text-xl opacity-90">Join our community of learners and embark on your educational journey</p>
        </div>
      </div>

      <CoursesIntake />
      <AdmissionProcess />
      <AdmissionForm />
      <FeeStructure />
    </div>
  )
}
