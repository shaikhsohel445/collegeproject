import { DollarSign, CreditCard, FileText, Info } from "lucide-react"

const FeeStructure = () => {
  const ugFees = [
    {
      course: "B.A. (Bachelor of Arts)",
      tuitionFee: "15,000",
      otherFees: "5,000",
      totalFee: "20,000",
      concession: "SC/ST: 50% | OBC: 25%",
    },
    {
      course: "B.Com (Bachelor of Commerce)",
      tuitionFee: "18,000",
      otherFees: "5,000",
      totalFee: "23,000",
      concession: "SC/ST: 50% | OBC: 25%",
    },
    {
      course: "B.Sc (Bachelor of Science)",
      tuitionFee: "20,000",
      otherFees: "6,000",
      totalFee: "26,000",
      concession: "SC/ST: 50% | OBC: 25%",
    },
  ]

  const pgFees = [
    {
      course: "M.A. (Master of Arts)",
      tuitionFee: "12,000",
      otherFees: "4,000",
      totalFee: "16,000",
      concession: "SC/ST: 50% | OBC: 25%",
    },
    {
      course: "M.Com (Master of Commerce)",
      tuitionFee: "15,000",
      otherFees: "4,000",
      totalFee: "19,000",
      concession: "SC/ST: 50% | OBC: 25%",
    },
    {
      course: "M.Sc (Master of Science)",
      tuitionFee: "18,000",
      otherFees: "5,000",
      totalFee: "23,000",
      concession: "SC/ST: 50% | OBC: 25%",
    },
  ]

  const otherFees = [
    { item: "Application Fee", amount: "500", note: "Non-refundable" },
    { item: "Admission Fee", amount: "2,000", note: "One-time payment" },
    { item: "Library Fee", amount: "1,000", note: "Per year" },
    { item: "Laboratory Fee", amount: "2,000", note: "For Science courses only" },
    { item: "Sports Fee", amount: "500", note: "Per year" },
    { item: "Development Fee", amount: "1,500", note: "Per year" },
    { item: "Examination Fee", amount: "1,000", note: "Per semester" },
    { item: "Identity Card", amount: "100", note: "One-time" },
  ]

  const paymentMethods = [
    "Online Payment Gateway (Recommended)",
    "Demand Draft in favor of 'Lokmanya Tilak College'",
    "Bank Transfer to College Account",
    "Cash Payment at College Office (Limited hours)",
  ]

  return (
    <section className="section-padding">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="heading-secondary">Fee Structure</h2>
          <p className="text-body text-lg">Transparent and affordable fee structure for all courses</p>
        </div>

        {/* UG Fee Structure */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Undergraduate Programs (Annual Fees)</h3>
          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-lg shadow-lg overflow-hidden">
              <thead className="bg-primary-600 text-white">
                <tr>
                  <th className="px-6 py-4 text-left">Course</th>
                  <th className="px-6 py-4 text-center">Tuition Fee</th>
                  <th className="px-6 py-4 text-center">Other Fees</th>
                  <th className="px-6 py-4 text-center">Total Fee</th>
                  <th className="px-6 py-4 text-center">Concessions</th>
                </tr>
              </thead>
              <tbody>
                {ugFees.map((fee, index) => (
                  <tr key={index} className="border-b border-gray-100 hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium">{fee.course}</td>
                    <td className="px-6 py-4 text-center">₹{fee.tuitionFee}</td>
                    <td className="px-6 py-4 text-center">₹{fee.otherFees}</td>
                    <td className="px-6 py-4 text-center font-bold text-primary-600">₹{fee.totalFee}</td>
                    <td className="px-6 py-4 text-center text-sm">{fee.concession}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* PG Fee Structure */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Postgraduate Programs (Annual Fees)</h3>
          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-lg shadow-lg overflow-hidden">
              <thead className="bg-secondary-600 text-white">
                <tr>
                  <th className="px-6 py-4 text-left">Course</th>
                  <th className="px-6 py-4 text-center">Tuition Fee</th>
                  <th className="px-6 py-4 text-center">Other Fees</th>
                  <th className="px-6 py-4 text-center">Total Fee</th>
                  <th className="px-6 py-4 text-center">Concessions</th>
                </tr>
              </thead>
              <tbody>
                {pgFees.map((fee, index) => (
                  <tr key={index} className="border-b border-gray-100 hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium">{fee.course}</td>
                    <td className="px-6 py-4 text-center">₹{fee.tuitionFee}</td>
                    <td className="px-6 py-4 text-center">₹{fee.otherFees}</td>
                    <td className="px-6 py-4 text-center font-bold text-secondary-600">₹{fee.totalFee}</td>
                    <td className="px-6 py-4 text-center text-sm">{fee.concession}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Other Fees */}
          <div className="card">
            <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
              <FileText className="h-6 w-6 mr-2 text-primary-600" />
              Additional Fees & Charges
            </h3>
            <div className="space-y-3">
              {otherFees.map((fee, index) => (
                <div
                  key={index}
                  className="flex justify-between items-center py-2 border-b border-gray-100 last:border-b-0"
                >
                  <div>
                    <span className="font-medium text-gray-900">{fee.item}</span>
                    <p className="text-xs text-gray-500">{fee.note}</p>
                  </div>
                  <span className="font-bold text-primary-600">₹{fee.amount}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Payment Methods */}
          <div className="card">
            <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
              <CreditCard className="h-6 w-6 mr-2 text-primary-600" />
              Payment Methods
            </h3>
            <div className="space-y-3">
              {paymentMethods.map((method, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <DollarSign className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">{method}</span>
                </div>
              ))}
            </div>

            <div className="mt-6 p-4 bg-green-50 border border-green-200 rounded-lg">
              <h4 className="font-semibold text-green-800 mb-2">Bank Details for Transfer:</h4>
              <div className="text-sm text-green-700 space-y-1">
                <p>
                  <strong>Account Name:</strong> Lokmanya Tilak College
                </p>
                <p>
                  <strong>Account Number:</strong> XXXXXXXXXXXX
                </p>
                <p>
                  <strong>IFSC Code:</strong> XXXXXXXX
                </p>
                <p>
                  <strong>Bank:</strong> [Bank Name], Sevli Branch
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Important Notes */}
        <div className="mt-12">
          <div className="card bg-blue-50 border-blue-200">
            <h3 className="text-xl font-bold text-blue-900 mb-4 flex items-center">
              <Info className="h-6 w-6 mr-2" />
              Important Information
            </h3>
            <div className="text-blue-800 space-y-2">
              <p>• Fees once paid will not be refunded under any circumstances.</p>
              <p>• Late fee of ₹100 per day will be charged after the due date.</p>
              <p>• Students availing government scholarships need to submit relevant documents.</p>
              <p>• Fee structure is subject to revision as per university guidelines.</p>
              <p>• Hostel fees are separate and not included in the above structure.</p>
              <p>• For any fee-related queries, contact the accounts office during working hours.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FeeStructure
