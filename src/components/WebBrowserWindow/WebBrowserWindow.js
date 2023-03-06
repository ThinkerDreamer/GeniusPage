import React from 'react';
import Script from 'next/script';
import styles from '../../styles/WebBrowserWindow.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareFull } from '@fortawesome/free-regular-svg-icons';
import { faMinus, faXmark } from '@fortawesome/free-solid-svg-icons';
import { Container, Card } from 'react-bootstrap';
import { LandingPageContext } from '../../pages/_app';

function WebBrowserWindow() {
  const { landingPageData } = React.useContext(LandingPageContext);

  return (
    <>
      <Script
        src="https://kit.fontawesome.com/26456b3d35.js"
        crossorigin="anonymous"
      ></Script>

      <Container className={styles.outsideContainer}>
        <Card border="primary" style={{ width: '80%' }}>
          {/* Card.Header is the top bar of the window */}
          <Card.Header className={styles.windowTopBar}>
            <Card.Text className={styles.browserNameText}>
              Web Browser
            </Card.Text>
            <div className={styles.windowControlIcons}>
              {' '}
              <FontAwesomeIcon icon={faMinus} />{' '}
              <FontAwesomeIcon icon={faSquareFull} />{' '}
              <FontAwesomeIcon icon={faXmark} />{' '}
            </div>
          </Card.Header>

          {/* Card.Body is the webpage */}
          <Card.Body>
            <Card.Title as="h1">
              {landingPageData['business_name']}
            </Card.Title>
            <Card.Subtitle className={styles.tagline}>
              {landingPageData['tagline_1']}
            </Card.Subtitle>
            <Card.Img
              src={landingPageData['image1']}
              height={'auto'}
              width={200}
            />
            <Card.Text>
              {landingPageData['advertising_text_1']}
            </Card.Text>
            <Card.Subtitle className={styles.tagline}>
              {landingPageData['tagline_2']}
            </Card.Subtitle>
            <Card.Img
              src={landingPageData['image2']}
              height={'auto'}
              width={200}
            />
            <Card.Text>
              {landingPageData['advertising_text_2']}
            </Card.Text>
            <Card.Subtitle className={styles.tagline}>
              {landingPageData['tagline_3']}
            </Card.Subtitle>
            <Card.Img
              src={landingPageData['image3']}
              height={'auto'}
              width={200}
            />
            <Card.Text>
              {landingPageData['advertising_text_3']}
            </Card.Text>
            <Card.Text>{landingPageData['review']}</Card.Text>
          </Card.Body>
        </Card>
      </Container>
    </>
  );
}

export default WebBrowserWindow;
