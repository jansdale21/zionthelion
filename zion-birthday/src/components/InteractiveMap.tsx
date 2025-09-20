import { useEffect, useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import L from 'leaflet'

// (Embed map via Google Maps iframe)

const InteractiveMap = () => {
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  // Venue details
  const venue = {
    name: "Galano's Farm",
    address: "5MJ2+2MV, Unnamed Road, Mexico, Pampanga",
    coordinates: [15.1801248, 120.6491009] as [number, number],
    phone: "+63 932 414 0498",
    hours: "3:00 PM onwards",
    email: "princess.yusi1203@gmail.com"
  }

  const openDirections = () => {
    const q = encodeURIComponent(venue.address)
    const url = `https://www.google.com/maps/dir/?api=1&destination=${q}`
    window.open(url, '_blank')
  }

  // Custom lion divIcon for marker
  const lionIcon = useMemo(() => L.divIcon({
    className: 'lion-marker',
    html: `<div class="relative flex items-center justify-center">
             <span style="font-size: 34px; line-height: 1;">🦁</span>
             <span class="lion-pulse"></span>
           </div>`,
    iconSize: [36, 36],
    iconAnchor: [18, 36],
    popupAnchor: [0, -36]
  }), [])

  if (!isClient) {
    return (
      <section id="map" className="py-20 bg-gradient-to-b from-white to-jungle-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-jungle-800 mb-4">
              Location
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Loading map...
            </p>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section id="map" className="py-20 bg-gradient-to-b from-white to-jungle-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center mb-4">
            <span className="text-5xl mr-4">🦁</span>
            <h2 className="text-4xl md:text-5xl font-bold text-jungle-800">
              Safari Location
            </h2>
            <span className="text-5xl ml-4">🦁</span>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join us at our magical safari celebration venue! Click the map for directions 
            and find all the details you need to get there. The pride awaits! 🦁
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 items-start">
          {/* Embedded Google Map */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="h-96 lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl relative z-10"
          >
            <MapContainer center={[venue.coordinates[0], venue.coordinates[1]]} zoom={15} scrollWheelZoom={false} className="h-full w-full">
              <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              <Marker position={[venue.coordinates[0], venue.coordinates[1]]} icon={lionIcon}>
                <Popup>
                  <div className="text-sm">
                    <div className="font-semibold text-jungle-700">{venue.name}</div>
                    <div className="text-forest-700">{venue.address}</div>
                  </div>
                </Popup>
              </Marker>
            </MapContainer>
          </motion.div>

          {/* Venue Information */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="card p-6">
              <h3 className="text-2xl font-bold text-jungle-800 mb-4 flex items-center">
                <span className="text-3xl mr-3">🦁</span>
                Venue Details
              </h3>
              
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-700 mb-1">Address</h4>
                  <p className="text-gray-600">{venue.name}</p>
                  <p className="text-gray-600">{venue.address}</p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-700 mb-1">Phone</h4>
                  <a 
                    href={`tel:${venue.phone}`}
                    className="text-jungle-600 hover:text-jungle-700 transition-colors"
                  >
                    {venue.phone}
                  </a>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-700 mb-1">Email</h4>
                  <a 
                    href={`mailto:${venue.email}`}
                    className="text-jungle-600 hover:text-jungle-700 transition-colors"
                  >
                    {venue.email}
                  </a>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-700 mb-1">Event Time</h4>
                  <p className="text-gray-600">{venue.hours}</p>
                </div>
              </div>
            </div>

            <div className="card p-6">
              <h3 className="text-xl font-bold text-jungle-800 mb-4 flex items-center">
                <span className="text-2xl mr-3">🦁</span>
                Getting There
              </h3>
              
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <span className="text-2xl mt-1">🚗</span>
                  <div>
                    <h4 className="font-semibold text-gray-700">By Car</h4>
                    <p className="text-gray-600 text-sm">
                      Free parking available on-site. Additional street parking nearby.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <span className="text-2xl mt-1">⏰</span>
                  <div>
                    <h4 className="font-semibold text-gray-700">Arrival Time</h4>
                    <p className="text-gray-600 text-sm">
                      Please arrive 15 minutes early to get settled in.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={openDirections}
              className="w-full btn-primary flex items-center justify-center space-x-2"
            >
              <span className="text-xl">🦁</span>
              <span>Get Directions</span>
            </motion.button>
          </motion.div>
        </div>

        {/* Additional Information */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <div className="card p-8 bg-gradient-to-r from-jungle-100 to-forest-100">
            <h3 className="text-2xl font-bold text-jungle-800 mb-6 text-center flex items-center justify-center">
              <span className="text-3xl mr-3">🦁</span>
              Important Information
              <span className="text-3xl ml-3">🦁</span>
            </h3>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-semibold text-jungle-700 mb-3 flex items-center">
                  <span className="text-xl mr-2">🚗</span>
                  Parking
                </h4>
                <ul className="text-gray-600 space-y-1 text-sm">
                  <li>• Free parking available on-site</li>
                  <li>• Additional street parking nearby</li>
                  <li>• Carpooling encouraged</li>
                  <li>• Handicap accessible parking available</li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold text-jungle-700 mb-3 flex items-center">
                  <span className="text-xl mr-2">♿</span>
                  Accessibility
                </h4>
                <ul className="text-gray-600 space-y-1 text-sm">
                  <li>• Wheelchair accessible entrance</li>
                  <li>• Accessible restrooms available</li>
                  <li>• Stroller-friendly venue</li>
                  <li>• Quiet area available if needed</li>
                </ul>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Floating Lion Elements */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute text-4xl opacity-20"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -20, 0],
                rotate: [0, 5, -5, 0],
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 6 + Math.random() * 4,
                repeat: Infinity,
                delay: Math.random() * 3,
                ease: "easeInOut",
              }}
            >
              🦁
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default InteractiveMap
