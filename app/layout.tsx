// app/layout.tsx
import '../globals.css'
import { ReactNode } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
interface RootLayoutProps {
  children: ReactNode
}
export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body className="bg-white text-shpe-dark antialiased">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
