import type { AppProps } from 'next/app';
import Head from 'next/head';
import '@/styles/globals.css';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="theme-color" content="#0d0d0e" />
        {/* Link previews need an absolute PNG address. Update the host when the custom domain is attached. */}
        <meta property="og:image" content="https://echoesofjustice.netlify.app/images/brand/echoes-of-justice-social.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:site_name" content="Echoes of Justice" />
        <meta name="twitter:card" content="summary_large_image" />
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

