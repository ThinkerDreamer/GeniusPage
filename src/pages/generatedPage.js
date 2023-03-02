import React from 'react';
import { Page } from '@geist-ui/core';
import { useAuth } from '@clerk/clerk-react';
import NavBar from '@/components/NavBar';
import WebpageSidebar from '@/components/WebpageSidebar';
import { Container, Row, Col, Card } from 'react-bootstrap';

export default function GeneratedPage() {
  const { isSignedIn } = useAuth();
  const [startupData, setStartupData] = React.useState({
    name: 'Your Startup Name',
    tagline: 'We get things done',
  });
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
            <WebpageSidebar startUpData={startupData} />
          </Col>
          <Col xs={9}>
            <Container
              style={{
                margin: '0 auto',
                width: '100%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <Card border="primary" style={{ width: '80%' }}>
                <Card.Header rtl="true">
                  Web Browser ➖⬜✖{' '}
                </Card.Header>
                <Card.Body>
                  <Card.Title as="h1">{startupData.name}</Card.Title>
                  <Card.Subtitle
                    style={{
                      textAlign: 'center',
                      margin: '1rem',
                    }}
                  >
                    {startupData.tagline}
                  </Card.Subtitle>
                  <Card.Img
                    src="logo-dark.svg"
                    height={200}
                    width={200}
                  />
                  <Card.Text>
                    Lorem ipsum dolor sit amet, consectetur adipiscing
                    elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua. Dui nunc mattis enim ut.
                    Purus in mollis nunc sed id semper risus. Vitae
                    justo eget magna fermentum iaculis eu non diam
                    phasellus. Interdum posuere lorem ipsum dolor sit
                    amet consectetur. Eu lobortis elementum nibh
                    tellus molestie nunc non blandit massa.
                  </Card.Text>
                  <Card.Img src="dog-taxi.png" />
                  <Card.Text>
                    Ullamcorper eget nulla facilisi etiam. Aliquet
                    enim tortor at auctor urna nunc id cursus metus.
                    Morbi enim nunc faucibus a pellentesque sit amet.
                    Risus quis varius quam quisque id diam. Vitae
                    suscipit tellus mauris a diam maecenas. Vulputate
                    ut pharetra sit amet aliquam.
                  </Card.Text>
                  <Card.ImgOverlay></Card.ImgOverlay>
                  <Card.Text>
                    Praesent tristique magna sit amet purus gravida
                    quis. Turpis cursus in hac habitasse platea.
                    Ultrices sagittis orci a scelerisque purus semper
                    eget duis at. Odio eu feugiat pretium nibh ipsum
                    consequat nisl vel pretium. Dolor magna eget est
                    lorem ipsum dolor. Mus mauris vitae ultricies leo.
                    Dictum fusce ut placerat orci nulla.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Container>
          </Col>
        </Row>
      </Container>
    </>
  );
}
