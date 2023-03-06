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

// LandingPageContext is an object with all the generated data for a landing page
export const LandingPageContext = React.createContext();

function App({ Component, pageProps }) {
  const initialLandingPageData = {
    business_name: 'Your Startup Name',
    tagline_1: 'We can do it!',
    advertising_text_1: `Ullamcorper eget nulla facilisi etiam. Aliquet enim tortor
            at auctor urna nunc id cursus metus. Morbi enim nunc
            faucibus a pellentesque sit amet. Risus quis varius quam
            quisque id diam. Vitae suscipit tellus mauris a diam
            maecenas. Vulputate ut pharetra sit amet aliquam.`,
    tagline_2: 'Tagline 2 is the best tagline!',
    advertising_text_2: `Praesent tristique magna sit amet purus gravida quis.
            Turpis cursus in hac habitasse platea. Ultrices sagittis
            orci a scelerisque purus semper eget duis at. Odio eu
            feugiat pretium nibh ipsum consequat nisl vel pretium.
            Dolor magna eget est lorem ipsum dolor. Mus mauris vitae
            ultricies leo. Dictum fusce ut placerat orci nulla.`,
    tagline_3: 'No, tagline 3 is actually the best tagline ever!',
    advertising_text_3: `Ullamcorper eget nulla facilisi etiam. Aliquet enim tortor
            at auctor urna nunc id cursus metus. Morbi enim nunc
            faucibus a pellentesque sit amet. Risus quis varius quam
            quisque id diam. Vitae suscipit tellus mauris a diam
            maecenas. Vulputate ut pharetra sit amet aliquam.`,
    review:
      'This business is the best one ever! You should give them all your money! --Jane Satisfiedcustomer',
    image1: `../../public/dog-taxi.png`,
    image2: '../../public/dog-taxi.png',
    image3: '../../public/dog-taxi.png',
    idea: 'idea placeholder',
  };
  const [landingPageData, setLandingPageData] = React.useState(
    initialLandingPageData
  );

  // Pass an object through context, containing both
  // the state value and the state-setter function.
  const landingPageDataValue = {
    landingPageData,
    setLandingPageData,
  };

  return (
    <LandingPageContext.Provider value={landingPageDataValue}>
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
            </main>
          </GeistProvider>
        </SSRProvider>
      </ClerkProvider>
    </LandingPageContext.Provider>
  );
}

export default App;
