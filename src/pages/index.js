import Head from 'next/head';
import Image from 'next/image';
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
import { Page } from '@geist-ui/core';
import RainbowContainer from '@/components/RainbowContainer';
import GPLogo from '@/components/GPLogo';

const SignUpButton = () => {
  const { openSignUp } = useClerk();

  return <Button onClick={openSignUp}>Sign up</Button>;
};

// TODO: Integrate Clerk logged in hook
const isUserLoggedIn = true;

// Once ready to deploy, remove Future Home stuff
const showFutureHome = false;

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
      <Page.Header>
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
              <Nav className="me-auto">
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
                <Nav.Link href="/sign-in">Login</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>

        {showFutureHome && (
          <div>
            <h2>Future Home of GeniusPage</h2>
            <GPLogo />
          </div>
        )}
        <div className={styles.description}>
          <p style={{ fontWeight: 600 }}>
            GeniusPage is an AI-powered landing page builder that
            helps users quickly and easily create beautiful and
            effective landing pages for their websites.
          </p>
          <p style={{ fontWeight: 600 }}>
            By leveraging the power of artificial intelligence and
            machine learning, GeniusPage provides a user-friendly
            interface that allows users to customize their pages with
            ease.
          </p>
        </div>
      </Page.Header>
      <RainbowContainer>
        <Form
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            margin: '0 auto',
          }}
        >
          <FloatingLabel
            controlId="floatingTextarea"
            label="Put your startup idea here!"
          >
            <Form.Control
              as="textarea"
              placeholder="Put your startup idea here!"
              style={{ height: '200px', width: '400px' }}
            />
          </FloatingLabel>
          <p>
            Need an idea? <a href="#">Here are some examples!</a>
          </p>
          <Button>
            <Image
              src="/lightbulb-white.png"
              width={30}
              height={30}
              className={styles.lightbulbIcon}
            />{' '}
            Generate!
          </Button>
        </Form>
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
