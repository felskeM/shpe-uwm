import '../globals.css'
import { ReactNode } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'

interface Props {
  children: ReactNode
}

export default function RootLayout({ children }: Props) {
  return (
    <html lang="en">
      <body className="antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
