import Layout from '@/Component/Layout/Layout'
import '@/styles/globals.css'
import 'tailwindcss/tailwind.css'

export default function App({ Component, pageProps }) {
  return <>
    <Layout> <Component {...pageProps} /></Layout>
  </>
}
