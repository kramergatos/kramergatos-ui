import Head from 'next/head'
import Header from './Header'
import Footer from './Footer'
export default function Layout(props) {
  return (
    <div className="container">
      <Head>
        <title>Joe - Kramer Gatos</title>
        <meta name="description" content="Kramer Gatos" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>
      <Header />
      <main>
        {props.children}
      </main>
      <Footer />
    </div>
  )
}
