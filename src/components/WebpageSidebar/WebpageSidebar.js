import React from 'react';
import { Stack, Card, Form } from 'react-bootstrap';
import { LandingPageContext } from '../../pages/_app';

function WebpageSidebar() {
  const { landingPageData, setLandingPageData } = React.useContext(
    LandingPageContext
  );
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

  console.log(`lpd in sidebar: ${JSON.stringify(landingPageData)}`);
  console.log(`lpd keys: ${Object.keys(landingPageData)}`);
  console.log(
    `typeof lpd keys: ${typeof Object.keys(landingPageData)}`
  );
  return (
    <Form>
      <Stack gap={2}>
        {/* {Object.keys(landingPageData).map((key) => {
          <Card key={key}>
            <Card.Header style={{ padding: '0.5rem' }}>
              <Card.Title style={{ marginBottom: 0 }}>
                {key}
              </Card.Title>
            </Card.Header>
            <Card.Body>
              <Card.Text>
                <Form.Control
                  type="text"
                  value={landingPageData[key]}
                  onChange={(e) => {
                    const nextValue = e.target.value;
                    const nextLandingPageData = {
                      ...landingPageData,
                      key: nextValue,
                    };
                    setLandingPageData(nextLandingPageData);
                  }}
                ></Form.Control>
              </Card.Text>
            </Card.Body>
          </Card>;
        })} */}
        <Card>
          <Card.Header style={{ padding: '0.5rem' }}>
            <Card.Title style={{ marginBottom: 0 }}>Name</Card.Title>
          </Card.Header>
          <Card.Body>
            <Card.Text>
              <Form.Control
                type="text"
                value={business_name}
                onChange={(e) => {
                  const nextBusinessName = e.target.value;
                  const nextLandingPageData = {
                    ...landingPageData,
                    business_name: nextBusinessName,
                  };
                  setUserData(nextLandingPageData);
                }}
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
                value={tagline_1}
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
