import { cn } from '@/lib/utils'
import './globals.css'
import type { Metadata } from 'next'
import { Lexend } from 'next/font/google'
import Navbar from '@/components/Navbar'

const lexend = Lexend({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Learnify TV',
  description: "Unlock limitless learning possibilities with Learnify TV, the AI-powered course generator app. Explore a world of personalized courses tailored to your interests, skill level, and preferences. From cutting-edge technology to creative arts, embark on a transformative learning journey with Learnify TV's intelligent course recommendations.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={cn(lexend.className, "antialiased min-h-screen pt-16")}>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
