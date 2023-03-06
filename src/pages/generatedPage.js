import React from 'react';
import { Page } from '@geist-ui/core';
import { useAuth } from '@clerk/clerk-react';
import NavBar from '@/components/NavBar';
import WebpageSidebar from '@/components/WebpageSidebar';
import { Container, Row, Col } from 'react-bootstrap';
import WebBrowserWindow from '@/components/WebBrowserWindow';

export default function GeneratedPage() {
  const { isSignedIn } = useAuth();

  return (
    <>
      <Page.Header>
        <NavBar isUserLoggedIn={isSignedIn} />
      </Page.Header>
      <Container
        style={{
          margin: '0 auto',
          width: '100vw',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          marginBottom: '1rem',
        }}
      >
        <Row>
          <Col xs={3}>
            <WebpageSidebar />
          </Col>
          <Col xs={9}>
            <WebBrowserWindow />
          </Col>
        </Row>
      </Container>
    </>
  );
}
