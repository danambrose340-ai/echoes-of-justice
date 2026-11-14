import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="icon" type="image/svg+xml" href="/images/brand/echoes-of-justice-mark.svg" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'Echoes of Justice',
              url: 'https://echoesofjustice.org',
              logo: 'https://echoesofjustice.org/images/brand/echoes-of-justice-logo.svg',
              description:
                'Born from loss and driven by truth, Echoes of Justice stands for remembrance, accountability, healing, and change.',
              areaServed: 'US-CO',
            }),
          }}
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

