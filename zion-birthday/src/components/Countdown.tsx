import { useEffect, useState } from 'react'

const calculateTimeLeft = (target: Date) => {
  const diff = +target - +new Date()
  if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 }
  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  }
}

interface CountdownProps {
  dateIso: string // e.g. '2025-10-05T14:00:00+08:00'
}

const Countdown = ({ dateIso }: CountdownProps) => {
  const target = new Date(dateIso)
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft(target))

  useEffect(() => {
    const t = setInterval(() => setTimeLeft(calculateTimeLeft(target)), 1000)
    return () => clearInterval(t)
  }, [dateIso])

  const Item = ({ value, label }: { value: number; label: string }) => (
    <div className="bg-white/80 backdrop-blur-sm rounded-xl px-4 py-3 text-center shadow border border-white/30">
      <div className="text-2xl md:text-3xl font-bold text-forest-800">{String(value).padStart(2, '0')}</div>
      <div className="text-xs md:text-sm text-earth-600">{label}</div>
    </div>
  )

  return (
    <section className="py-10">
      <div className="max-w-4xl mx-auto mobile-padding">
        <div className="text-center mb-4">
          <h3 className="text-xl md:text-2xl font-bold text-forest-800">Countdown to the Party</h3>
          <p className="text-earth-600">We can't wait to celebrate with you!</p>
        </div>
        <div className="grid grid-cols-4 gap-3 md:gap-4">
          <Item value={timeLeft.days} label="Days" />
          <Item value={timeLeft.hours} label="Hours" />
          <Item value={timeLeft.minutes} label="Minutes" />
          <Item value={timeLeft.seconds} label="Seconds" />
        </div>
      </div>
    </section>
  )
}

export default Countdown




