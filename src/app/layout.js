import './globals.css'
import localFont from 'next/font/local'

const monumentextended = localFont({
  src: [
    {
      path: '../../public/fonts/MonumentExtended-Regular.otf',
      weight: '400'
    },
  ],
  variable: '--font-poppins'
})

export const metadata = {
  title: 'ABExplorer',
  description: 'We make your old vehicle to the digital world creating unimagineable utility.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={ monumentextended.className}>{children}</body>
    </html>
  )
}
