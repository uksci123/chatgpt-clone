import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import SideBar from './components/SideBar'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'chatGpt-clone',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className='flex'>
          {/*SideBar*/}
          <SideBar/>
          {/*Client Provider - Notification */}
          <div className='flex-1 bg-[#343541]'>
            {children}
          </div>
        </div>
      </body>
    </html>
  )
}