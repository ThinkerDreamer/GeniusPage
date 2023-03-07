import React from 'react';
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

  React.useEffect(() => {
    window.localStorage.setItem(
      'landingPageData',
      JSON.stringify(landingPageData)
    );
  }, [landingPageData]);

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

    if (result.response.status === 'ok') {
      const newData = { ...landingPageData, ...result.response.data };
      setLandingPageData(newData);
      setStatus('success');

      if (isSignedIn) {
        alert('is signed in, pushing to /genpage');
        router.push('/generatedPage');
      } else {
        alert('isnt signed in, showing modal');
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
