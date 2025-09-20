// Vercel Serverless Function for RSVP API
// This file should be in the /api directory for Vercel to recognize it

export default async function handler(req, res) {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Credentials', true)
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT')
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  )

  if (req.method === 'OPTIONS') {
    res.status(200).end()
    return
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  try {
    const rsvpData = req.body

    // Validate required fields
    const requiredFields = ['name', 'email', 'guestCount', 'attendance']
    for (const field of requiredFields) {
      if (!rsvpData[field]) {
        return res.status(400).json({ error: `Missing required field: ${field}` })
      }
    }

    // Add server-side data
    const processedRSVP = {
      ...rsvpData,
      id: Math.random().toString(36).substr(2, 9) + Date.now().toString(36),
      submittedAt: new Date().toISOString(),
      ipAddress: req.headers['x-forwarded-for'] || req.connection.remoteAddress,
      userAgent: req.headers['user-agent']
    }

    // Here you would typically save to a database
    // For now, we'll just log it and return success
    console.log('New RSVP received:', processedRSVP)

    // TODO: Save to database (MongoDB, PostgreSQL, etc.)
    // await saveToDatabase(processedRSVP)

    // TODO: Send email notification
    // await sendEmailNotification(processedRSVP)

    // TODO: Send confirmation email to guest
    // await sendConfirmationEmail(processedRSVP)

    res.status(200).json({ 
      success: true, 
      message: 'RSVP received successfully',
      id: processedRSVP.id
    })

  } catch (error) {
    console.error('RSVP API Error:', error)
    res.status(500).json({ 
      success: false, 
      error: 'Internal server error' 
    })
  }
}
