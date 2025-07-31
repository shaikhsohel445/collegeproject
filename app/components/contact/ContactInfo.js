import { MapPin, Phone, Mail, Clock } from "lucide-react"

const ContactInfo = () => {
  const contactDetails = [
    {
      icon: MapPin,
      title: "Address",
      details: ["Lokmanya Tilak College", "Sevli, District Name", "State - PIN Code, India"],
      color: "bg-blue-100 text-blue-600",
    },
    {
      icon: Phone,
      title: "Phone Numbers",
      details: ["Office: +91-XXXXXXXXXX", "Admission: +91-XXXXXXXXXX", "Student Helpline: +91-XXXXXXXXXX"],
      color: "bg-green-100 text-green-600",
    },
    {
      icon: Mail,
      title: "Email Addresses",
      details: [
        "info@lokmanyatilakcollege.edu.in",
        "admission@lokmanyatilakcollege.edu.in",
        "principal@lokmanyatilakcollege.edu.in",
      ],
      color: "bg-purple-100 text-purple-600",
    },
    {
      icon: Clock,
      title: "Office Hours",
      details: ["Monday - Friday: 9:00 AM - 5:00 PM", "Saturday: 9:00 AM - 1:00 PM", "Sunday: Closed"],
      color: "bg-orange-100 text-orange-600",
    },
  ]

  return (
    <section className="section-padding">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="heading-secondary">Get in Touch</h2>
          <p className="text-body text-lg">We're here to help you with any questions or information you need</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {contactDetails.map((item, index) => (
            <div key={index} className="card text-center">
              <div className={`${item.color} w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4`}>
                <item.icon className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{item.title}</h3>
              <div className="space-y-2">
                {item.details.map((detail, detailIndex) => (
                  <p key={detailIndex} className="text-gray-600 text-sm">
                    {detail}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Information */}
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="card">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Department Contacts</h3>
            <div className="space-y-3">
              <div className="flex justify-between items-center py-2 border-b border-gray-100">
                <span className="text-gray-600">Principal's Office</span>
                <span className="font-medium">Ext: 101</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-gray-100">
                <span className="text-gray-600">Admission Office</span>
                <span className="font-medium">Ext: 102</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-gray-100">
                <span className="text-gray-600">Examination Section</span>
                <span className="font-medium">Ext: 103</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-gray-100">
                <span className="text-gray-600">Library</span>
                <span className="font-medium">Ext: 104</span>
              </div>
              <div className="flex justify-between items-center py-2">
                <span className="text-gray-600">Accounts Office</span>
                <span className="font-medium">Ext: 105</span>
              </div>
            </div>
          </div>

          <div className="card">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Quick Information</h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">For Admissions:</h4>
                <p className="text-gray-600 text-sm">
                  Visit the admission office during working hours or call our admission helpline for guidance on
                  courses, eligibility, and application process.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">For Current Students:</h4>
                <p className="text-gray-600 text-sm">
                  Contact the respective department offices for academic queries, examination information, or student
                  services.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">For General Inquiries:</h4>
                <p className="text-gray-600 text-sm">
                  Use the contact form below or call our main office number. We typically respond to emails within 24-48
                  hours.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactInfo
