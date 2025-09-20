import { useState } from 'react'
import { motion } from 'framer-motion'
import { useForm } from 'react-hook-form'
import { FaCheck, FaEnvelope, FaUser, FaUsers, FaGift, FaDownload } from 'react-icons/fa'
import { rsvpService } from '../services/rsvpService'

interface RSVPFormData {
  name: string
  email?: string
  phone: string
  guestCount: number
  dietaryNotes: string
  message: string
}

const RSVPForm = () => {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submissionError, setSubmissionError] = useState<string | null>(null)

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<RSVPFormData>()

  const onSubmit = async (data: RSVPFormData) => {
    setIsSubmitting(true)
    setSubmissionError(null)
    
    try {
      // Add attendance as 'yes' since everyone filling the form is attending
      const rsvpData = rsvpService.saveRSVPLocal({
        ...data,
        attendance: 'yes' as const
      })
      
      // Try to save to backend API
      const backendResult = await rsvpService.saveRSVPToBackend(rsvpData)
      
      if (!backendResult.success) {
        console.warn('Backend save failed, but local save succeeded:', backendResult.error)
        // Continue anyway since we have local backup
      }
      
      // Try to send email notification
      const emailResult = await rsvpService.sendRSVPEmail(rsvpData)
      
      if (!emailResult.success) {
        console.warn('Email send failed:', emailResult.error)
        // Continue anyway
      }
      
      setIsSubmitting(false)
      setIsSubmitted(true)
      
    } catch (error) {
      console.error('RSVP submission error:', error)
      setSubmissionError('Failed to submit RSVP. Please try again.')
      setIsSubmitting(false)
    }
  }

  const guestCountOptions = [
    { value: 0, label: 'Just me' },
    { value: 1, label: '2 guests' },
    { value: 2, label: '3 guests' },
    { value: 3, label: '4 guests' },
    { value: 4, label: '5+ guests' }
  ]

  if (isSubmitted) {
    return (
      <section id="rsvp" className="py-20 bg-gradient-to-b from-lion-50 to-white">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="card p-8 text-center"
          >
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <FaCheck className="w-10 h-10 text-green-600" />
            </div>
            
            <h2 className="text-3xl font-bold text-jungle-800 mb-4">
              Roar! Thanks for joining the pride!
            </h2>
            
            <p className="text-lg text-gray-600 mb-6">
              We can't wait to celebrate little Zion with you! 
              You'll receive a confirmation email shortly.
            </p>
            
            <div className="bg-jungle-50 rounded-lg p-6 mb-6">
              <h3 className="font-semibold text-jungle-700 mb-2">What's Next?</h3>
              <ul className="text-left text-gray-600 space-y-1">
                <li>• Check your email for confirmation details</li>
                <li>• Mark your calendar for the big day</li>
                <li>• Get ready for a safari adventure!</li>
                <li>• Don't forget to bring your camera</li>
              </ul>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => {
                  setIsSubmitted(false)
                  reset()
                }}
                className="btn-secondary"
              >
                Submit Another RSVP
              </button>
              
            </div>
          </motion.div>
        </div>
      </section>
    )
  }

  return (
    <section id="rsvp" className="py-20 bg-gradient-to-b from-lion-50 to-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-jungle-800 mb-4">
            RSVP
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            How many cubs will you bring? Seats are limited — please RSVP so we know 
            how many cubs to prepare for. We can't wait to celebrate with you!
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="card p-8 max-w-2xl mx-auto"
        >
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            {/* Name */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                <FaUser className="inline w-4 h-4 mr-2" />
                Your Name *
              </label>
              <input
                {...register('name', { required: 'Name is required' })}
                type="text"
                className="w-full px-4 py-3 border border-jungle-300 rounded-lg focus:ring-2 focus:ring-jungle-500 focus:border-transparent transition-all duration-200"
                placeholder="Enter your roarsome name"
              />
              {errors.name && (
                <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
              )}
            </div>

            {/* Contact Information */}
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  <FaEnvelope className="inline w-4 h-4 mr-2" />
                  Email
                </label>
                <input
                  {...register('email', { 
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: 'Invalid email address'
                    }
                  })}
                  type="email"
                  className="w-full px-4 py-3 border border-jungle-300 rounded-lg focus:ring-2 focus:ring-jungle-500 focus:border-transparent transition-all duration-200"
                  placeholder="you@safari.com"
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Phone Number
                </label>
                <input
                  {...register('phone')}
                  type="tel"
                  className="w-full px-4 py-3 border border-jungle-300 rounded-lg focus:ring-2 focus:ring-jungle-500 focus:border-transparent transition-all duration-200"
                  placeholder="+63 9xx xxx xxx"
                />
              </div>
            </div>

            {/* Guest Count */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                <FaUsers className="inline w-4 h-4 mr-2" />
                Number of Guests *
              </label>
              <select
                {...register('guestCount', { required: 'Please select number of guests' })}
                className="w-full px-4 py-3 border border-jungle-300 rounded-lg focus:ring-2 focus:ring-jungle-500 focus:border-transparent transition-all duration-200"
              >
                <option value="">Select number of guests</option>
                {guestCountOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
              {errors.guestCount && (
                <p className="text-red-500 text-sm mt-1">{errors.guestCount.message}</p>
              )}
            </div>


            {/* Message */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                <FaGift className="inline w-4 h-4 mr-2" />
                Special Message for Zion (Optional)
              </label>
              <textarea
                {...register('message')}
                rows={3}
                className="w-full px-4 py-3 border border-jungle-300 rounded-lg focus:ring-2 focus:ring-jungle-500 focus:border-transparent transition-all duration-200"
                placeholder="Share a special message or birthday wish for our little lion king..."
              />
            </div>

            {/* Error Message */}
            {submissionError && (
              <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                <p className="text-red-600 text-sm">{submissionError}</p>
              </div>
            )}

            {/* Submit Button */}
            <motion.button
              type="submit"
              disabled={isSubmitting}
              whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
              whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
              className={`w-full py-4 px-6 rounded-lg font-semibold text-lg transition-all duration-200 ${
                isSubmitting
                  ? 'bg-gray-400 cursor-not-allowed'
                  : 'btn-primary'
              }`}
            >
              {isSubmitting ? (
                <div className="flex items-center justify-center">
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                  Submitting...
                </div>
              ) : (
                'Send RSVP'
              )}
            </motion.button>
          </form>

          {/* Additional Info */}
          <div className="mt-8 p-4 bg-jungle-50 rounded-lg">
            <h3 className="font-semibold text-jungle-800 mb-2">Important Information</h3>
            <ul className="text-sm text-forest-700 space-y-1">
              <li>• Please RSVP by October 15, 2025 to help us plan accordingly</li>
              <li>• The party will be held at Galano's Farm on October 25, 2025 at 3:00 PM onwards</li>
              <li>• Parking is available on-site</li>
              <li>• Dress code: Safari theme encouraged!</li>
              <li>• Contact us at +63 932 414 0498 or princess.yusi1203@gmail.com with any questions</li>
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default RSVPForm
