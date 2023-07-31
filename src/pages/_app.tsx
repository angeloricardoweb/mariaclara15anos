// import { PrismicPreview } from '@prismicio/next'
import type { AppProps } from 'next/app'
import { DefaultSeo } from 'next-seo'
import 'swiper/css/bundle'
import '../styles/index.scss'
import { useEffect, useState } from 'react'
import { Analytics } from '@vercel/analytics/react';

export default function MyApp({ Component, pageProps }: AppProps) {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768)
    }
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <>
      <DefaultSeo
        title="Maria Clara 15 Anos"
        description="Venha comemorar comigo"
      />
      {isMobile ? (
        <Component {...pageProps} />
      ) : (
        <div className="flex justify-center items-center h-screen">
          <h1 className="text-3xl text-center">Acesse pelo Celular</h1>
        </div>
      )}
      <Analytics />
    </>
  )
}
