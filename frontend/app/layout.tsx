import './globals.css'
import { Lora, Aboreto } from 'next/font/google'
import { Providers } from '../components/providers';
import { Animation } from '@/components/animation';
import Footer from '@/components/footer';

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

const lora = Lora({ 
  weight: "variable",
  subsets: ['latin'],
  variable: '--font-lora'
 })

const aboreto = Aboreto({ 
  weight: "400",
  subsets: ['latin'],
  variable: '--font-aboreto'
 })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${lora.variable} ${aboreto.variable} relative overscroll-contain`}>
      <body >
      <Animation mode={'wait'} initial={false}>
        <Providers>
          {children}
          <Footer/>
        </Providers>
        </Animation>
      </body>
    </html>
  )
}
