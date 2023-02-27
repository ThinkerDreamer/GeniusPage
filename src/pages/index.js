import React from 'react';
import styles from '@/styles/Home.module.css';
import { useClerk, useAuth } from '@clerk/clerk-react';
import { Page } from '@geist-ui/core';
import RainbowContainer from '@/components/RainbowContainer';
import NavBar from '@/components/NavBar';
import StartUpIdeaForm from '@/components/StartUpIdeaForm';

export default function Home() {
  const { isSignedIn, userId } = useAuth();
  const { openSignUp } = useClerk();

  // TODO: Actually handle submitting idea to the backend
  async function handleGenerateSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const ideaSubmitted = formData.get('ideaTextArea');

    if (!isSignedIn) {
      openSignUp({ afterSignInUrl: '/loading' });
    }
    if (isSignedIn) {
      console.log(`userId is ${userId}`);
    }
    alert(`${ideaSubmitted}? That's a great idea!`);
  }

  return (
    <>
      <Page.Header>
        <NavBar isUserLoggedIn={isSignedIn} />
        {!isSignedIn && (
          <div className={styles.description}>
            <p style={{ fontWeight: 600 }}>
              GeniusPage is an AI-powered landing page builder that
              helps users quickly and easily create beautiful and
              effective landing pages for their websites.
            </p>
            <p style={{ fontWeight: 600 }}>
              By leveraging the power of artificial intelligence and
              machine learning, GeniusPage provides a user-friendly
              interface that allows users to customize their pages
              with ease.
            </p>
          </div>
        )}
      </Page.Header>
      <RainbowContainer>
        <StartUpIdeaForm
          handleGenerateSubmit={handleGenerateSubmit}
        />
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
