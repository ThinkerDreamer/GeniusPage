import React from 'react';
import Head from 'next/head';
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
    name,
    tagline1,
    tagline2,
    tagline3,
    text1,
    text2,
    text3,
    review,
    image1,
    image2,
    image3,
  } = { landingPageData };
  return (
    <>
      <Head>
        <Script
          src="https://kit.fontawesome.com/26456b3d35.js"
          crossorigin="anonymous"
        ></Script>
      </Head>
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
            <Card.Title as="h1">{name}</Card.Title>
            <Card.Subtitle className={styles.tagline}>
              {tagline1}
            </Card.Subtitle>
            <Card.Img src={image1} height={200} width={200} />
            <Card.Text>{text1}</Card.Text>
            <Card.Subtitle className={styles.tagline}>
              {tagline2}
            </Card.Subtitle>
            <Card.Img src={image2} height={200} width={200} />
            <Card.Text>{text2}</Card.Text>
            <Card.Subtitle className={styles.tagline}>
              {tagline3}
            </Card.Subtitle>
            <Card.Img src={image3} height={200} width={200} />
            <Card.Text>{text3}</Card.Text>
            <Card.Text>{review}</Card.Text>
          </Card.Body>
        </Card>
      </Container>
    </>
  );
}

export default WebBrowserWindow;
