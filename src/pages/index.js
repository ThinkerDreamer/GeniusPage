import Head from 'next/head';
import Image from 'next/image';
import { Inter } from '@next/font/google';
import styles from '@/styles/Home.module.css';
import { useClerk } from '@clerk/clerk-react';
import {
  Button,
  Nav,
  Navbar,
  NavDropdown,
  Container,
  Form,
  FloatingLabel,
} from 'react-bootstrap';
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] });
// const rightArrow = `&#10132;`;

const SignUpButton = () => {
  const { openSignUp } = useClerk();

  return <Button onClick={openSignUp}>Sign up</Button>;
};

// TODO: Integrate Clerk logged in hook
const isUserLoggedIn = false;

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
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
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
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav>
              {/* If user is logged in, show sites bar, map over user's sites,
                  if no sites, show create new site button */}
              {isUserLoggedIn && (
                <NavDropdown
                  title="Sites"
                  id="collasible-nav-dropdown"
                >
                  <NavDropdown.Item href="#action/3.1">
                    Site #1
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    Site #2
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">
                    Site #3
                  </NavDropdown.Item>
                </NavDropdown>
              )}
            </Nav>
            <Nav>
              <Nav.Link href="/login">Login</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

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
          <p>
            GeniusPage is an AI-powered landing page builder that
            helps users quickly and easily create beautiful and
            effective landing pages for their websites.
          </p>
          <p>
            By leveraging the power of artificial intelligence and
            machine learning, GeniusPage provides a user-friendly
            interface that allows users to customize their pages with
            ease.
          </p>
        </div>
        <Container fluid>
          <div className={styles.rainbowContainer}>
            <div className={styles.transparencyOverRainbow}>
              <Form>
                <FloatingLabel
                  controlId="floatingTextarea"
                  label="Put your startup idea here!"
                >
                  <Form.Control
                    as="textarea"
                    placeholder="Put your startup idea here!"
                    style={{ height: '100px' }}
                  />
                </FloatingLabel>
                <p>
                  Need an idea?{' '}
                  <a href="#">Here are some examples!</a>
                </p>
              </Form>
              {/* End transparency-over-rainbow */}
            </div>
          </div>
        </Container>
      </main>
    </>
  );
}
