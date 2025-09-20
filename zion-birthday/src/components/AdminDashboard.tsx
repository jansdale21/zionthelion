import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { FaDownload, FaCheck, FaTimes, FaChartBar } from 'react-icons/fa'
import { rsvpService } from '../services/rsvpService'
import type { RSVPData } from '../services/rsvpService'

const AdminDashboard = () => {
  const [rsvps, setRsvps] = useState<RSVPData[]>([])
  const [stats, setStats] = useState<any>(null)
  const [showDashboard, setShowDashboard] = useState(false)
  const [isAdmin, setIsAdmin] = useState(false)
  const [adminKey, setAdminKey] = useState('')

  useEffect(() => {
    loadRSVPs()
    // Check if user is already authenticated as admin
    const adminStatus = localStorage.getItem('zion-admin-authenticated')
    if (adminStatus === 'true') {
      setIsAdmin(true)
    }
  }, [])

  const handleAdminLogin = () => {
    // Simple admin key check (you can change this key)
    if (adminKey === 'zion2025') {
      setIsAdmin(true)
      localStorage.setItem('zion-admin-authenticated', 'true')
      setShowDashboard(true)
    } else {
      alert('Invalid admin key')
    }
  }

  const handleLogout = () => {
    setIsAdmin(false)
    setShowDashboard(false)
    setAdminKey('')
    localStorage.removeItem('zion-admin-authenticated')
  }

  const loadRSVPs = () => {
    const allRSVPs = rsvpService.getAllRSVPs()
    const rsvpStats = rsvpService.getRSVPStats()
    setRsvps(allRSVPs)
    setStats(rsvpStats)
  }

  const handleExport = () => {
    rsvpService.exportRSVPsAsCSV()
  }

  // Don't show anything if not admin
  if (!isAdmin) {
    return null
  }

  // Show login form if admin but not authenticated
  if (isAdmin && !showDashboard) {
    return (
      <div className="fixed bottom-4 left-4 z-50">
        <button
          onClick={() => setShowDashboard(true)}
          className="bg-jungle-600 text-white p-3 rounded-full shadow-lg hover:bg-jungle-700 transition-colors"
          title="Admin Dashboard"
        >
          <FaChartBar className="w-5 h-5" />
        </button>
      </div>
    )
  }

  // Show login form if not authenticated
  if (!isAdmin) {
    return (
      <div className="fixed bottom-4 left-4 z-50">
        <div className="bg-white rounded-lg shadow-lg p-4 max-w-xs">
          <h3 className="font-semibold text-gray-800 mb-2">Admin Access</h3>
          <input
            type="password"
            value={adminKey}
            onChange={(e) => setAdminKey(e.target.value)}
            placeholder="Enter admin key"
            className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm mb-2"
            onKeyPress={(e) => e.key === 'Enter' && handleAdminLogin()}
          />
          <button
            onClick={handleAdminLogin}
            className="w-full bg-jungle-600 text-white py-2 px-3 rounded-md text-sm hover:bg-jungle-700 transition-colors"
          >
            Login
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden"
      >
        {/* Header */}
        <div className="bg-jungle-600 text-white p-6">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-bold">RSVP Admin Dashboard</h2>
            <div className="flex gap-2">
              <button
                onClick={handleLogout}
                className="text-white/80 hover:text-white text-sm px-3 py-1 border border-white/30 rounded"
              >
                Logout
              </button>
              <button
                onClick={() => setShowDashboard(false)}
                className="text-white/80 hover:text-white text-2xl"
              >
                ×
              </button>
            </div>
          </div>
        </div>

        {/* Stats */}
        {stats && (
          <div className="p-6 bg-gray-50">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-jungle-600">{stats.total}</div>
                <div className="text-sm text-gray-600">Total RSVPs</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600">{stats.attending}</div>
                <div className="text-sm text-gray-600">Attending</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-red-600">{stats.notAttending}</div>
                <div className="text-sm text-gray-600">Not Attending</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600">{stats.totalGuests}</div>
                <div className="text-sm text-gray-600">Total Guests</div>
              </div>
            </div>
          </div>
        )}

        {/* Actions */}
        <div className="p-6 border-b">
          <div className="flex gap-4">
            <button
              onClick={handleExport}
              className="btn-primary flex items-center"
            >
              <FaDownload className="w-4 h-4 mr-2" />
              Export CSV
            </button>
            <button
              onClick={loadRSVPs}
              className="btn-secondary flex items-center"
            >
              <FaChartBar className="w-4 h-4 mr-2" />
              Refresh
            </button>
          </div>
        </div>

        {/* RSVP List */}
        <div className="p-6 max-h-96 overflow-y-auto">
          {rsvps.length === 0 ? (
            <div className="text-center text-gray-500 py-8">
              No RSVPs yet
            </div>
          ) : (
            <div className="space-y-4">
              {rsvps.map((rsvp) => (
                <div key={rsvp.id} className="border rounded-lg p-4">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h3 className="font-semibold text-lg">{rsvp.name}</h3>
                      <p className="text-gray-600">{rsvp.email}</p>
                    </div>
                    <div className="flex items-center gap-2">
                      {rsvp.attendance === 'yes' ? (
                        <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-sm flex items-center">
                          <FaCheck className="w-3 h-3 mr-1" />
                          Attending
                        </span>
                      ) : (
                        <span className="bg-red-100 text-red-800 px-2 py-1 rounded-full text-sm flex items-center">
                          <FaTimes className="w-3 h-3 mr-1" />
                          Not Attending
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="text-sm text-gray-600">
                    <p>Guests: {rsvp.guestCount}</p>
                    {rsvp.phone && <p>Phone: {rsvp.phone}</p>}
                    {rsvp.message && <p>Message: {rsvp.message}</p>}
                    <p className="text-xs text-gray-400 mt-2">
                      Submitted: {new Date(rsvp.submittedAt).toLocaleString()}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </motion.div>
    </div>
  )
}

export default AdminDashboard
