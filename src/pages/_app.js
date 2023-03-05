//import '@/styles/globals.css';
import './App.scss';
import React from 'react';
import { ClerkProvider } from '@clerk/clerk-react';
import { Dosis } from '@next/font/google';
import SSRProvider from 'react-bootstrap/SSRProvider';
import { GeistProvider } from '@geist-ui/core';
import Head from 'next/head';
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
config.autoAddCss = false;

const dosis = Dosis({ subsets: ['latin'] });
export const UserDataContext = React.createContext();

function App({ Component, pageProps }) {
  const [userData, setUserData] = React.useState({});

  // Pass an object through context, containing both
  // the state value and the state-setter function.
  const userValue = {
    userData,
    setUserData,
  };

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
            <UserDataContext.Provider value={userValue}>
              <Component {...pageProps}>
                <Head>
                  <title>
                    GeniusPage - AI Generated Landing Pages
                  </title>
                  <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                  />
                  <link rel="icon" href="/favicon.ico" />
                </Head>
              </Component>
            </UserDataContext.Provider>
          </main>
        </GeistProvider>
      </SSRProvider>
    </ClerkProvider>
  );
}

export default App;
