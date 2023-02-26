import Head from 'next/head';
import Image from 'next/image';
import { Inter } from '@next/font/google';
import styles from '@/styles/Home.module.css';
import { useClerk } from '@clerk/clerk-react';
import { Button, Navbar, Container } from 'react-bootstrap';

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
        <title>GeniusPage - AI Generated Landing Pages</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar>
        <Container fluid>
          <Navbar.Brand href="#home">
            <img
              src="/logo-dark.svg"
              width="30"
              height="30"
              className="d-inline-block align-top"
              alt="GeniusPage Logo"
            />{' '}
            GeniusPage
          </Navbar.Brand>
        </Container>
      </Navbar>

      <Container fluid>
        <main className={styles.main}>
          <div className={styles.description}>
            <h2>Future Home of GeniusPage</h2>
            <Image
              src="/logo-dark.svg"
              width={150}
              height={150}
              priority
              alt="GeniusPage Logo"
            ></Image>
          </div>

          {SignUpButton()}
        </main>
      </Container>
    </>
  );
}
