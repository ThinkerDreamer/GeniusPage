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
  const {
    business_name,
    tagline_1,
    tagline_2,
    tagline_3,
    advertising_text_1,
    advertising_text_2,
    advertising_text_3,
    review,
    image1,
    image2,
    image3,
  } = { landingPageData };
  console.log(`business_name in WebBrowserWindow: ${business_name}`);
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
            <Card.Title as="h1">{business_name}</Card.Title>
            <Card.Subtitle className={styles.tagline}>
              {tagline_1}
            </Card.Subtitle>
            <Card.Img src={image1} height={200} width={200} />
            <Card.Text>{advertising_text_1}</Card.Text>
            <Card.Subtitle className={styles.tagline}>
              {tagline_2}
            </Card.Subtitle>
            <Card.Img src={image2} height={200} width={200} />
            <Card.Text>{advertising_text_2}</Card.Text>
            <Card.Subtitle className={styles.tagline}>
              {tagline_3}
            </Card.Subtitle>
            <Card.Img src={image3} height={200} width={200} />
            <Card.Text>{advertising_text_3}</Card.Text>
            <Card.Text>{review}</Card.Text>
          </Card.Body>
        </Card>
      </Container>
    </>
  );
}

export default WebBrowserWindow;
