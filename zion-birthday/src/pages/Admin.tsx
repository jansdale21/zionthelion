import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { FaDownload, FaCheck, FaTimes, FaLock, FaTrash } from 'react-icons/fa'
import { rsvpService } from '../services/rsvpService'
import type { RSVPData } from '../services/rsvpService'

const AdminPage = () => {
  const [rsvps, setRsvps] = useState<RSVPData[]>([])
  const [stats, setStats] = useState<any>(null)
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [adminKey, setAdminKey] = useState('')

  useEffect(() => {
    // Check if already authenticated
    const adminStatus = localStorage.getItem('zion-admin-authenticated')
    if (adminStatus === 'true') {
      setIsAuthenticated(true)
      loadRSVPs()
    }
  }, [])

  const handleLogin = () => {
    // Admin key: zion2025 (you can change this)
    if (adminKey === 'zion2025') {
      setIsAuthenticated(true)
      localStorage.setItem('zion-admin-authenticated', 'true')
      loadRSVPs()
    } else {
      alert('Invalid admin key')
    }
  }

  const handleLogout = () => {
    setIsAuthenticated(false)
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

  const handleDeleteRSVP = (rsvpId: string) => {
    if (window.confirm('Are you sure you want to delete this RSVP?')) {
      rsvpService.deleteRSVP(rsvpId)
      loadRSVPs() // Reload the list
    }
  }

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-50 via-green-100 to-emerald-100 flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-white rounded-2xl shadow-2xl p-8 max-w-md w-full mx-4"
        >
          <div className="text-center mb-6">
            <div className="w-16 h-16 bg-jungle-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <FaLock className="w-8 h-8 text-jungle-600" />
            </div>
            <h1 className="text-2xl font-bold text-jungle-800">Admin Access</h1>
            <p className="text-gray-600">Enter admin key to access RSVP dashboard</p>
          </div>

          <div className="space-y-4">
            <div>
              <input
                type="password"
                value={adminKey}
                onChange={(e) => setAdminKey(e.target.value)}
                placeholder="Enter admin key"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-jungle-500 focus:border-transparent"
                onKeyPress={(e) => e.key === 'Enter' && handleLogin()}
              />
            </div>
            <button
              onClick={handleLogin}
              className="w-full bg-jungle-600 text-white py-3 px-4 rounded-lg font-semibold hover:bg-jungle-700 transition-colors"
            >
              Login
            </button>
          </div>
        </motion.div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-green-100 to-emerald-100">
      {/* Header */}
      <div className="bg-jungle-600 text-white p-4 sm:p-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold">RSVP Admin Dashboard</h1>
            <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 w-full sm:w-auto">
              <button
                onClick={handleExport}
                className="bg-white/20 text-white px-3 py-2 rounded-lg hover:bg-white/30 transition-colors flex items-center justify-center text-sm sm:text-base"
              >
                <FaDownload className="w-4 h-4 mr-2" />
                Export CSV
              </button>
              <button
                onClick={handleLogout}
                className="bg-white/20 text-white px-3 py-2 rounded-lg hover:bg-white/30 transition-colors text-sm sm:text-base"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto p-4 sm:p-6">
        {/* Stats */}
        {stats && (
          <div className="bg-white rounded-2xl shadow-lg p-4 sm:p-6 mb-6">
            <h2 className="text-lg sm:text-xl font-bold text-gray-800 mb-4">Statistics</h2>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-3 sm:gap-4">
              <div className="text-center p-2 sm:p-3 bg-gray-50 rounded-lg">
                <div className="text-2xl sm:text-3xl font-bold text-jungle-600">{stats.total}</div>
                <div className="text-xs sm:text-sm text-gray-600">Total RSVPs</div>
              </div>
              <div className="text-center p-2 sm:p-3 bg-gray-50 rounded-lg">
                <div className="text-2xl sm:text-3xl font-bold text-green-600">{stats.attending}</div>
                <div className="text-xs sm:text-sm text-gray-600">Attending</div>
              </div>
              <div className="text-center p-2 sm:p-3 bg-gray-50 rounded-lg">
                <div className="text-2xl sm:text-3xl font-bold text-blue-600">{stats.totalGuests}</div>
                <div className="text-xs sm:text-sm text-gray-600">Total Guests</div>
              </div>
            </div>
          </div>
        )}

        {/* RSVP List */}
        <div className="bg-white rounded-2xl shadow-lg p-4 sm:p-6">
          <h2 className="text-lg sm:text-xl font-bold text-gray-800 mb-4">All RSVPs</h2>
          {rsvps.length === 0 ? (
            <div className="text-center text-gray-500 py-8">
              No RSVPs yet
            </div>
          ) : (
            <div className="space-y-3 sm:space-y-4 max-h-96 overflow-y-auto">
              {rsvps.map((rsvp) => (
                <div key={rsvp.id} className="border rounded-lg p-3 sm:p-4">
                  <div className="flex flex-col sm:flex-row justify-between items-start mb-2 gap-2">
                    <div className="flex-1">
                      <h3 className="font-semibold text-base sm:text-lg">{rsvp.name}</h3>
                      <p className="text-gray-600 text-sm sm:text-base">{rsvp.email}</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="bg-green-100 text-green-800 px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm flex items-center">
                        <FaCheck className="w-3 h-3 mr-1" />
                        Attending
                      </span>
                      <button
                        onClick={() => handleDeleteRSVP(rsvp.id)}
                        className="bg-red-100 text-red-800 px-2 py-1 rounded-full text-xs sm:text-sm hover:bg-red-200 transition-colors"
                        title="Delete RSVP"
                      >
                        <FaTrash className="w-3 h-3" />
                      </button>
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
      </div>
    </div>
  )
}

export default AdminPage
