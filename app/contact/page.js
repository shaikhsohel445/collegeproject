import ContactForm from "../components/contact/ContactForm"
import ContactInfo from "../components/contact/ContactInfo"
import LocationMap from "../components/contact/LocationMap"

export const metadata = {
  title: "Contact Us - Lokmanya Tilak College, Sevli",
  description:
    "Get in touch with Lokmanya Tilak College, Sevli. Find our contact information, location, and send us a message.",
}

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      <div className="hero-gradient text-white py-20">
        <div className="container-custom text-center">
          <h1 className="text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl opacity-90">We're here to help. Get in touch with us for any queries or information.</p>
        </div>
      </div>

      <ContactInfo />
      <ContactForm />
      <LocationMap />
    </div>
  )
}
