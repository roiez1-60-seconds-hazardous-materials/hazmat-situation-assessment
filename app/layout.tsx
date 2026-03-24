import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'גיבוש תמ"צ באירוע חומ"ס | כבאות והצלה לישראל',
  description: 'אפליקציה אינטראקטיבית לגיבוש תמונת מצב באירועי חומרים מסוכנים',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="he" dir="rtl">
      <body>{children}</body>
    </html>
  )
}