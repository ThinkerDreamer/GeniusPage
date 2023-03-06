import React from 'react';
import { Page } from '@geist-ui/core';
import { useAuth } from '@clerk/clerk-react';
import NavBar from '@/components/NavBar';
import WebpageSidebar from '@/components/WebpageSidebar';
import { Container, Row, Col } from 'react-bootstrap';
import WebBrowserWindow from '@/components/WebBrowserWindow';

import { LandingPageContext } from './_app';

export default function GeneratedPage() {
  const { isSignedIn } = useAuth();
  const { landingPageData } = React.useContext(LandingPageContext);
  const startUpData = landingPageData || {
    business_name: 'Your Startup Name',
    tagline_1: 'We can do it!',
    advertising_text_1: `Ullamcorper eget nulla facilisi etiam. Aliquet enim tortor
            at auctor urna nunc id cursus metus. Morbi enim nunc
            faucibus a pellentesque sit amet. Risus quis varius quam
            quisque id diam. Vitae suscipit tellus mauris a diam
            maecenas. Vulputate ut pharetra sit amet aliquam.`,
    tagline_2: 'Tagline 2 is the best tagline!',
    advertising_text_2: `Praesent tristique magna sit amet purus gravida quis.
            Turpis cursus in hac habitasse platea. Ultrices sagittis
            orci a scelerisque purus semper eget duis at. Odio eu
            feugiat pretium nibh ipsum consequat nisl vel pretium.
            Dolor magna eget est lorem ipsum dolor. Mus mauris vitae
            ultricies leo. Dictum fusce ut placerat orci nulla.`,
    tagline_3: 'No, tagline 3 is actually the best tagline ever!',
    advertising_text_3: `Ullamcorper eget nulla facilisi etiam. Aliquet enim tortor
            at auctor urna nunc id cursus metus. Morbi enim nunc
            faucibus a pellentesque sit amet. Risus quis varius quam
            quisque id diam. Vitae suscipit tellus mauris a diam
            maecenas. Vulputate ut pharetra sit amet aliquam.`,
    review:
      'This business is the best one ever! You should give them all your money! --Jane Satisfiedcustomer',
    image1: `public/dog-taxi.png`,
    image2: 'public/dog-taxi.png',
    image3: 'public/dog-taxi.png',
  };
  console.log({ startUpData });
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
            <WebBrowserWindow startUpData={startUpData} />
          </Col>
        </Row>
      </Container>
    </>
  );
}
