import Head from 'next/head';
import Image from 'next/image';
import { Inter } from '@next/font/google';
import styles from '@/styles/Home.module.css';
import { useClerk } from '@clerk/clerk-react';
import { Button } from 'react-bootstrap';

const inter = Inter({ subsets: ['latin'] });
// const rightArrow = `&#10132;`;

const SignUpButton = () => {
  const { openSignUp } = useClerk();

  return <Button onClick={openSignUp}>Sign up</Button>;
};

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.description}>
          <h2>Future Home of GeniusPage</h2>
        </div>

        <div className={styles.center}>
          <Image
            className={styles.logo}
            src="/next.svg"
            alt="Next.js Logo"
            width={180}
            height={37}
            priority
          />
          <div className={styles.thirteen}>
            <Image
              src="/thirteen.svg"
              alt="13"
              width={40}
              height={31}
              priority
            />
          </div>
        </div>
        {SignUpButton()}
        <div className={styles.grid}>
          <div className={styles.card}>
            <a
              href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h2>
                Docs <span>&#10132;</span>
              </h2>
            </a>
            <p>
              Find in-depth information about Next.js features
              and&nbsp;API.
            </p>
          </div>

          <div className={styles.card}>
            <a
              href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h2>
                Learn <span>&#10132;</span>
              </h2>
            </a>
            <p>
              Learn about Next.js in an interactive course
              with&nbsp;quizzes!
            </p>
          </div>

          <div className={styles.card}>
            <a
              href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h2>
                Templates <span>&#10132;</span>
              </h2>
            </a>
            <p>
              Discover and deploy boilerplate example
              Next.js&nbsp;projects.
            </p>
          </div>

          <div className={styles.card}>
            <a
              href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h2>
                Deploy <span>&#10132;</span>
              </h2>
            </a>
            <p>
              Instantly deploy your Next.js site to a shareable URL
              with&nbsp;Vercel.
            </p>
          </div>
        </div>
      </main>
    </>
  );
}
