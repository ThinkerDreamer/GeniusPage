import React from 'react';
//import styles from '@/styles/Home.module.css'; //no styles currently used
import { Page } from '@geist-ui/core';
import NavBar from '@/components/NavBar';
import RainbowContainer from '@/components/RainbowContainer';
import StartUpIdeaForm from '@/components/StartUpIdeaForm';
import TopDescription from '@/components/TopDescription';
import { useClerk, useAuth } from '@clerk/clerk-react';
import {
  getAuth,
  clerkClient,
  buildClerkProps,
} from '@clerk/nextjs/server';
import { useRouter } from 'next/router';

export default function Home() {
  const { isSignedIn, userId } = useAuth();
  const { openSignUp } = useClerk();
  const router = useRouter();

  // TODO: Actually handle submitting idea to the backend
  async function handleGenerateSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const ideaSubmitted = formData.get('ideaTextArea');

    if (!isSignedIn) {
      openSignUp({
        afterSignUpUrl: `/loading?idea=${ideaSubmitted}`,
      });
    }
    if (isSignedIn) {
      console.log(`userId is ${userId}`);
      router.push({
        pathname: '/loading',
        query: { idea: ideaSubmitted },
      });
    }
    alert(`${ideaSubmitted}? That's a great idea!`);
  }

  return (
    <>
      <Page.Header>
        <NavBar isUserLoggedIn={isSignedIn} />
        {!isSignedIn && <TopDescription />}
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

export const getServerSideProps = async ({ req }) => {
  const { userId } = getAuth(req);
  const user = userId
    ? await clerkClient.users.getUser(userId)
    : undefined;

  return { props: { ...buildClerkProps(req, { user }) } };
};
