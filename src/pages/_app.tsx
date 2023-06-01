// import { PrismicPreview } from '@prismicio/next'
import type { AppProps } from 'next/app'
import { DefaultSeo } from 'next-seo'
import 'swiper/css/bundle'
import '../styles/index.scss'

export default function MyApp({ Component, pageProps }: AppProps) {
  
  return (
    <>
      <DefaultSeo
        title="_____SiteName_____"
        description="___SiteDescription___    "
        canonical="https://vercel.app/"
        openGraph={{
          url: 'https://vercel.app/',
          title: '_____SiteName_____',
          description: '___SiteDescription___',
          images: [
            {
              url: '/img/seo.png',
              width: 1200,
              height: 627,
              alt: '_____SiteName_____',
              type: 'image/png',
            },
          ],
          siteName: 'gilmarcasepatentes.com.br',
        }}
        twitter={{
          handle: '@GilmarcaEPatentes',
          site: '@site',
          cardType: 'summary_large_image',
        }}
      />

      <Component {...pageProps} />
    </>
  )
}
