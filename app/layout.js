import "./globals.css"
import { Inter } from "next/font/google"
import Header from "./components/Header"
import Footer from "./components/Footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Lokmanya Tilak College, Sevli - NAAC Accredited",
  description:
    "Official website of Lokmanya Tilak College, Sevli. NAAC accredited institution offering quality higher education in Arts, Commerce, and Science.",
  keywords: "Lokmanya Tilak College, Sevli, NAAC, Higher Education, Arts, Commerce, Science",
    generator: 'v0.dev'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
