//import '@/styles/globals.css';
import './App.scss';
import { ClerkProvider } from '@clerk/clerk-react';
import { Dosis } from '@next/font/google';
import SSRProvider from 'react-bootstrap/SSRProvider';
import { GeistProvider } from '@geist-ui/core';
import Head from 'next/head';
import { useRouter } from 'next/router';

const dosis = Dosis({ subsets: ['latin'] });

function App({ Component, pageProps }) {
  return (
    <ClerkProvider
      publishableKey={
        'pk_test_dGhhbmtmdWwtY29sdC0xNC5jbGVyay5hY2NvdW50cy5kZXYk'
      }
      appearance={{
        variables: {
          colorPrimary: '#7447D7',
          colorText: '#271254',
          fontFamily: dosis.style.fontFamily,
        },
      }}
    >
      <SSRProvider>
        <GeistProvider>
          <main className={dosis.className}>
            <Component {...pageProps}>
              <Head>
                <title>GeniusPage - AI Generated Landing Pages</title>
                <meta
                  name="viewport"
                  content="width=device-width, initial-scale=1"
                />
                <link rel="icon" href="/favicon.ico" />
              </Head>
            </Component>
          </main>
        </GeistProvider>
      </SSRProvider>
    </ClerkProvider>
  );
}

export default App;
