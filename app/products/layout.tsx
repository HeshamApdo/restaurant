
import SlideBar from '@/components/SlideBar'
import SlideBarMobile from '@/components/SlideBarMobile'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })



export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className='flex flex-row gap-3 lg:gap-10'>
        <SlideBar />
        <SlideBarMobile />
        {children}
        </div>
        </body>
    </html>
  )
}
