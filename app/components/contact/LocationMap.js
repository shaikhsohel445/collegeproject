"use client"
import { MapPin, Navigation, Car, Bus } from "lucide-react"

const LocationMap = () => {
  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="heading-secondary">Find Us</h2>
          <p className="text-body text-lg">
            Located in the heart of Sevli, easily accessible by various modes of transport
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Map */}
          <div className="lg:col-span-2">
            <div className="card p-0 overflow-hidden">
              <div className="h-96 bg-gray-200 flex items-center justify-center relative">
                <div className="text-center">
                  <MapPin className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-gray-600 mb-2">Interactive Map</h3>
                  <p className="text-gray-500 mb-4">Replace this section with actual Google Maps embed</p>
                  <button className="btn-primary">Open in Google Maps</button>
                </div>
              </div>
            </div>
          </div>

          {/* Directions */}
          <div className="space-y-6">
            <div className="card">
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                <Navigation className="h-6 w-6 mr-2 text-primary-600" />
                How to Reach
              </h3>

              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="bg-blue-100 p-2 rounded-lg">
                    <Car className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">By Car</h4>
                    <p className="text-sm text-gray-600">
                      Take NH-XX and exit at Sevli. The college is 2km from the main road. Parking available on campus.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="bg-green-100 p-2 rounded-lg">
                    <Bus className="h-5 w-5 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">By Bus</h4>
                    <p className="text-sm text-gray-600">
                      Regular bus services from major cities. Sevli Bus Stand is 1km from college. Auto-rickshaws
                      available.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="bg-purple-100 p-2 rounded-lg">
                    <Navigation className="h-5 w-5 text-purple-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">By Train</h4>
                    <p className="text-sm text-gray-600">
                      Nearest railway station is [Station Name] - 15km away. Taxi and bus services available.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="card">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Nearby Landmarks</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">District Collector Office</span>
                  <span className="font-medium">500m</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Sevli Hospital</span>
                  <span className="font-medium">800m</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Main Market</span>
                  <span className="font-medium">1.2km</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Bus Stand</span>
                  <span className="font-medium">1km</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default LocationMap
