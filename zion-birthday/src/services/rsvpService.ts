// RSVP Service - Multiple storage options for production use
export interface RSVPData {
  id: string
  name: string
  email: string
  phone: string
  guestCount: number
  attendance: 'yes' | 'maybe' | 'no'
  dietaryNotes: string
  message: string
  submittedAt: string
  ipAddress?: string
  userAgent?: string
}

class RSVPService {
  private readonly STORAGE_KEY = 'zion-rsvp-responses'
  private readonly API_ENDPOINT = 'https://api.zionbirthday.com/rsvp' // Replace with your backend

  // Get all RSVPs from localStorage
  getAllRSVPs(): RSVPData[] {
    try {
      const stored = localStorage.getItem(this.STORAGE_KEY)
      return stored ? JSON.parse(stored) : []
    } catch (error) {
      console.error('Error loading RSVPs:', error)
      return []
    }
  }

  // Save RSVP to localStorage (immediate backup)
  saveRSVPLocal(rsvpData: Omit<RSVPData, 'id' | 'submittedAt'>): RSVPData {
    const newRSVP: RSVPData = {
      ...rsvpData,
      id: this.generateId(),
      submittedAt: new Date().toISOString(),
      ipAddress: this.getClientIP(),
      userAgent: navigator.userAgent
    }

    const existingRSVPs = this.getAllRSVPs()
    const updatedRSVPs = [...existingRSVPs, newRSVP]
    
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(updatedRSVPs))
    return newRSVP
  }

  // Send RSVP to backend API
  async saveRSVPToBackend(rsvpData: RSVPData): Promise<{ success: boolean; error?: string }> {
    try {
      const response = await fetch(this.API_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(rsvpData)
      })

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }

      return { success: true }
    } catch (error) {
      console.error('Error saving to backend:', error)
      return { 
        success: false, 
        error: error instanceof Error ? error.message : 'Unknown error'
      }
    }
  }

  // Send RSVP via email (using EmailJS or similar)
  async sendRSVPEmail(rsvpData: RSVPData): Promise<{ success: boolean; error?: string }> {
    try {
      // Option 1: Using EmailJS (free service)
      const emailData = {
        to_email: 'princess.yusi1203@gmail.com', // Your email
        from_name: rsvpData.name,
        from_email: rsvpData.email,
        guest_count: rsvpData.guestCount,
        attendance: rsvpData.attendance,
        message: rsvpData.message,
        phone: rsvpData.phone,
        submitted_at: rsvpData.submittedAt
      }

      // This would require EmailJS setup
      // const response = await emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', emailData)
      
      // For now, simulate success
      console.log('Email data prepared:', emailData)
      return { success: true }
    } catch (error) {
      console.error('Error sending email:', error)
      return { 
        success: false, 
        error: error instanceof Error ? error.message : 'Email send failed'
      }
    }
  }

  // Export RSVPs as CSV for download
  exportRSVPsAsCSV(): void {
    const rsvps = this.getAllRSVPs()
    if (rsvps.length === 0) {
      alert('No RSVPs to export')
      return
    }

    const headers = ['Name', 'Email', 'Phone', 'Guest Count', 'Attendance', 'Message', 'Submitted At']
    const csvContent = [
      headers.join(','),
      ...rsvps.map(rsvp => [
        `"${rsvp.name}"`,
        `"${rsvp.email}"`,
        `"${rsvp.phone}"`,
        rsvp.guestCount,
        rsvp.attendance,
        `"${rsvp.message.replace(/"/g, '""')}"`,
        rsvp.submittedAt
      ].join(','))
    ].join('\n')

    const blob = new Blob([csvContent], { type: 'text/csv' })
    const url = window.URL.createObjectURL(blob)
    const link = document.createElement('a')
    link.href = url
    link.download = `zion-birthday-rsvps-${new Date().toISOString().split('T')[0]}.csv`
    link.click()
    window.URL.revokeObjectURL(url)
  }

  // Get RSVP statistics
  getRSVPStats() {
    const rsvps = this.getAllRSVPs()
    const total = rsvps.length
    const attending = rsvps.filter(r => r.attendance === 'yes').length
    const notAttending = rsvps.filter(r => r.attendance === 'no').length
    const totalGuests = rsvps.reduce((sum, r) => sum + r.guestCount, 0)

    return {
      total,
      attending,
      notAttending,
      totalGuests,
      attendanceRate: total > 0 ? (attending / total) * 100 : 0
    }
  }

  // Generate unique ID
  private generateId(): string {
    return Math.random().toString(36).substr(2, 9) + Date.now().toString(36)
  }

  // Get client IP (simplified)
  private getClientIP(): string {
    // In production, you'd get this from your backend
    return 'unknown'
  }
}

export const rsvpService = new RSVPService()
