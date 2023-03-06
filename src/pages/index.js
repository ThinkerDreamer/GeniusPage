import React from 'react';
//import styles from '@/styles/Home.module.css'; //no styles currently used
import { Page } from '@geist-ui/core';
import NavBar from '@/components/NavBar';
import RainbowContainer from '@/components/RainbowContainer';
import StartUpIdeaForm from '@/components/StartUpIdeaForm';
import TopDescription from '@/components/TopDescription';
import { useClerk, useAuth } from '@clerk/clerk-react';
import { useRouter } from 'next/router';
import { LandingPageContext } from './_app';

export default function Home() {
  const { isSignedIn } = useAuth();
  const { openSignUp } = useClerk();
  const router = useRouter();

  const { landingPageData, setLandingPageData } = React.useContext(
    LandingPageContext
  );

  // idle | loading | success | error
  const [status, setStatus] = React.useState('idle');

  async function handleGenerateSubmit(e) {
    e.preventDefault();
    setStatus('loading');
    const formData = new FormData(e.target);
    const idea = formData.get('ideaTextArea');

    const endPoint = 'https://geniuspage.fly.dev/generate-idea';
    const options = {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ idea }),
    };

    const res = await fetch(endPoint, options);
    const result = await res.json();
    //console.log(`result is: ${JSON.stringify(result)}`);

    if (result.response.status === 'ok') {
      setStatus('success');
      const newData = { ...result.response.data };
      const {
        business_name,
        tagline_1,
        advertising_text_1,
        tagline_2,
        advertising_text_2,
        tagline_3,
        advertising_text_3,
        review,
      } = { newData };
      setLandingPageData(newData);

      if (isSignedIn) {
        router.push('/generatedPage');
      } else {
        openSignUp({
          afterSignUpUrl: '/generatedPage',
          afterSignInUrl: '/generatedPage',
        });
      }
    } else {
      setStatus('error');
      console.error('there was an error fetching data');
    }
  }

  return (
    <>
      <Page.Header>
        <NavBar isUserLoggedIn={isSignedIn} />
        {!isSignedIn && <TopDescription />}
      </Page.Header>

      <RainbowContainer>
        {status === 'idle' && (
          <StartUpIdeaForm
            handleGenerateSubmit={handleGenerateSubmit}
          />
        )}
        {status === 'loading' && <h2>Loading...</h2>}
      </RainbowContainer>
      <Page.Footer>
        <a
          href="https://www.flaticon.com/free-icons/brain"
          title="brain icons"
        >
          Brain icons created by Freepik - Flaticon
        </a>
      </Page.Footer>
    </>
  );
}
