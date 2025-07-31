import { FileText, CreditCard, CheckCircle, Calendar, Users, Award } from "lucide-react"

const AdmissionProcess = () => {
  const steps = [
    {
      icon: FileText,
      title: "Application Form",
      description: "Fill out the online application form with all required details",
      details: ["Complete personal information", "Academic records", "Upload documents"],
    },
    {
      icon: CreditCard,
      title: "Fee Payment",
      description: "Pay the application fee through online payment gateway",
      details: ["Application fee: ₹500", "Online payment only", "Keep receipt safe"],
    },
    {
      icon: CheckCircle,
      title: "Document Verification",
      description: "Submit original documents for verification",
      details: ["Mark sheets", "Transfer certificate", "Caste certificate (if applicable)"],
    },
    {
      icon: Users,
      title: "Merit List",
      description: "Check merit list based on academic performance",
      details: ["Published on website", "SMS notification", "Email alerts"],
    },
    {
      icon: Award,
      title: "Admission Confirmation",
      description: "Confirm admission by paying fees within deadline",
      details: ["Pay admission fees", "Submit documents", "Get admission receipt"],
    },
  ]

  const importantDates = [
    { event: "Application Start Date", date: "June 1, 2024" },
    { event: "Application Last Date", date: "July 15, 2024" },
    { event: "Merit List Publication", date: "July 20, 2024" },
    { event: "Admission Confirmation", date: "July 25, 2024" },
    { event: "Classes Commence", date: "August 1, 2024" },
  ]

  const requiredDocuments = [
    "10th Mark Sheet (Original + Photocopy)",
    "12th Mark Sheet (Original + Photocopy)",
    "Transfer Certificate",
    "Migration Certificate (if applicable)",
    "Caste Certificate (SC/ST/OBC)",
    "Income Certificate (for fee concession)",
    "Passport Size Photographs (6 copies)",
    "Aadhar Card Copy",
    "Gap Certificate (if applicable)",
  ]

  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="heading-secondary">Admission Process</h2>
          <p className="text-body text-lg">
            Follow these simple steps to secure your admission at Lokmanya Tilak College
          </p>
        </div>

        {/* Process Steps */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Step-by-Step Process</h3>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <div className="card text-center h-full">
                  <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <step.icon className="h-8 w-8 text-primary-600" />
                  </div>
                  <div className="absolute -top-2 -left-2 bg-primary-600 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">
                    {index + 1}
                  </div>
                  <h4 className="font-bold text-gray-900 mb-2">{step.title}</h4>
                  <p className="text-gray-600 text-sm mb-4">{step.description}</p>
                  <ul className="text-xs text-gray-500 space-y-1">
                    {step.details.map((detail, detailIndex) => (
                      <li key={detailIndex}>• {detail}</li>
                    ))}
                  </ul>
                </div>
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-8 -right-4 text-primary-300">→</div>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Important Dates */}
          <div className="card">
            <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
              <Calendar className="h-6 w-6 mr-2 text-primary-600" />
              Important Dates
            </h3>
            <div className="space-y-4">
              {importantDates.map((item, index) => (
                <div
                  key={index}
                  className="flex justify-between items-center py-3 border-b border-gray-100 last:border-b-0"
                >
                  <span className="text-gray-700">{item.event}</span>
                  <span className="font-semibold text-primary-600">{item.date}</span>
                </div>
              ))}
            </div>
            <div className="mt-6 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
              <p className="text-yellow-800 text-sm">
                <strong>Note:</strong> Dates are tentative and subject to change. Please check the official website for
                updates.
              </p>
            </div>
          </div>

          {/* Required Documents */}
          <div className="card">
            <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
              <FileText className="h-6 w-6 mr-2 text-primary-600" />
              Required Documents
            </h3>
            <div className="space-y-3">
              {requiredDocuments.map((document, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700 text-sm">{document}</span>
                </div>
              ))}
            </div>
            <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
              <p className="text-blue-800 text-sm">
                <strong>Important:</strong> All documents must be attested by a Gazetted Officer or the issuing
                authority. Keep multiple photocopies ready.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AdmissionProcess
