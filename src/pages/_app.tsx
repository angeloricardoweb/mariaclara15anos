// import { PrismicPreview } from '@prismicio/next'
import type { AppProps } from 'next/app'
import { DefaultSeo } from 'next-seo'
import 'swiper/css/bundle'
import '../styles/index.scss'

export default function MyApp({ Component, pageProps }: AppProps) {

  return (
    <>
      <DefaultSeo
        title="Maria Clara 15 Anos"
        description="Venha comemorar comigo"
      />
      <Component {...pageProps} />
    </>
  )
}
