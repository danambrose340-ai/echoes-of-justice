import type { AppProps } from 'next/app';
import Head from 'next/head';
import '@/styles/globals.css';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="theme-color" content="#0d0d0e" />
        <meta property="og:image" content="/images/brand/echoes-of-justice-social.svg" />
      </Head>
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>
      <div id="main-content">
        <Component {...pageProps} />
      </div>
    </>
  );
}

