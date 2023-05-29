import Footer from '@/components/footer/footer'
import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  metadataBase: new URL('https://infojobs-tech.vercel.app/'),
  title: 'Infojobs Tech',
  description:
    'Descubre una nueva forma de encontrar trabajo para los amantes de la tecnología',
  keywords: [
    'portal empleo',
    'trabajo',
    'tecnología',
    'desarrollo',
    'programación',
    'data science',
    'análisis datos',
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body>
        {children}
        <Footer />
      </body>
    </html>
  )
}
