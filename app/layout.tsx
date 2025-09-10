import './globals.css';
import Navbar from './components/Navbar/index';
import Footer from './components/Footer/Footer';


export const metadata = {
  metadataBase: new URL('https://www.droseo.com'),
  title: {
    default: 'Droseo | Web Development Agency',
    template: '%s | Web Dev Agency'
  },
  description: 'We build fast, scalable products using React, Next.js, Node.js, JavaScript, TypeScript, and Python. From MVPs to enterprise platforms, we ship clean code and business results.',
  keywords: ['web development agency', 'Next.js', 'React', 'Node.js', 'TypeScript', 'Python', 'full-stack', 'frontend', 'backend'],
  alternates: {
    canonical: '/' 
  },
  openGraph: {
    title: 'Droseo | Web Development Agency',
    description: 'We build fast, scalable products using modern web technologies.',
    url: '/',
    siteName: 'Droseo',
    images: [
      {
        url: '/assets/banner/dashboard.svg',
        width: 1200,
        height: 630,
        alt: 'Web Dev Agency'
      }
    ],
    locale: 'en_US',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Droseo | Web Development Agency',
    description: 'We build fast, scalable products using React, Next.js, Node.js, JavaScript, TypeScript, and Python. From MVPs to enterprise platforms, we ship clean code and business results.',
    images: ['/assets/banner/dashboard.svg']
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
