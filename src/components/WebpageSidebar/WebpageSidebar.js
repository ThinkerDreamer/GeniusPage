import React from 'react';
import { Stack, Card, Form } from 'react-bootstrap';
import { LandingPageContext } from '../../pages/_app';

function WebpageSidebar() {
  const { landingPageData, setLandingPageData } = React.useContext(
    LandingPageContext
  );
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
    <Form>
      <Stack gap={2}>
        <Card>
          <Card.Header style={{ padding: '0.5rem' }}>
            <Card.Title style={{ marginBottom: 0 }}>Name</Card.Title>
          </Card.Header>
          <Card.Body>
            <Card.Text>
              <Form.Control
                type="text"
                value={name}
                // onChange={(e) => setUserData({startUpData[name] = {e.target.value}, ...userData})}
              ></Form.Control>
            </Card.Text>
          </Card.Body>
        </Card>
        <Card>
          <Card.Header style={{ padding: '0.5rem' }}>
            <Card.Title style={{ marginBottom: 0 }}>
              Tagline
            </Card.Title>
          </Card.Header>
          <Card.Body>
            <Card.Text>
              <Form.Control
                type="textArea"
                value={tagline1}
                //onChange={(e) => setStartupTagline(e.target.value)}
              ></Form.Control>
            </Card.Text>
          </Card.Body>
        </Card>
        <Card>
          <Card.Header style={{ padding: '0.5rem' }}>
            <Card.Title style={{ marginBottom: 0 }}>Image</Card.Title>
          </Card.Header>
          <Card.Body>
            <Form.Control
              type="file"
              style={{ fontSize: '0.8rem' }}
            />
          </Card.Body>
        </Card>
      </Stack>
    </Form>
  );
}

export default WebpageSidebar;
