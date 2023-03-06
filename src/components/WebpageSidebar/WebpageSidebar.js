import React from 'react';
import { Stack, Card, Form } from 'react-bootstrap';
import { LandingPageContext } from '../../pages/_app';

function WebpageSidebar() {
  const { landingPageData, setLandingPageData } = React.useContext(
    LandingPageContext
  );

  return (
    <Form>
      <Stack gap={2}>
        {/* TODO: Rewrite this page mapping over the data.
          The code below doesn't show anything on the page. */}

        {/* {Object.keys(landingPageData).map((key) => {
          <Card key={key}>
            <Card.Header style={{ padding: '0.5rem' }}>
              <Card.Title style={{ marginBottom: 0 }}>
                {landingPageData[key]}
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
                value={landingPageData['business_name']}
                onChange={(e) => {
                  const nextBusinessName = e.target.value;
                  const nextLandingPageData = {
                    ...landingPageData,
                    business_name: nextBusinessName,
                  };
                  setLandingPageData(nextLandingPageData);
                }}
              ></Form.Control>
            </Card.Text>
          </Card.Body>
        </Card>

        <Card>
          <Card.Header style={{ padding: '0.5rem' }}>
            <Card.Title style={{ marginBottom: 0 }}>
              Tagline 1
            </Card.Title>
          </Card.Header>
          <Card.Body>
            <Card.Text>
              <Form.Control
                type="textArea"
                value={landingPageData['tagline_1']}
                onChange={(e) => {
                  const nextTagline1 = e.target.value;
                  const nextLandingPageData = {
                    ...landingPageData,
                    tagline_1: nextTagline1,
                  };
                  setLandingPageData(nextLandingPageData);
                }}
              ></Form.Control>
            </Card.Text>
          </Card.Body>
        </Card>

        <Card>
          <Card.Header style={{ padding: '0.5rem' }}>
            <Card.Title style={{ marginBottom: 0 }}>
              Image 1
            </Card.Title>
          </Card.Header>
          <Card.Body>
            <Form.Control
              type="file"
              style={{ fontSize: '0.8rem' }}
            />
          </Card.Body>
        </Card>

        <Card>
          <Card.Header style={{ padding: '0.5rem' }}>
            <Card.Title style={{ marginBottom: 0 }}>
              Body Text 1
            </Card.Title>
          </Card.Header>
          <Card.Body>
            <Card.Text>
              <Form.Control
                as="textarea"
                value={landingPageData['advertising_text_1']}
                onChange={(e) => {
                  const nextAdText1 = e.target.value;
                  const nextLandingPageData = {
                    ...landingPageData,
                    advertising_text_1: nextAdText1,
                  };
                  setLandingPageData(nextLandingPageData);
                }}
              ></Form.Control>
            </Card.Text>
          </Card.Body>
        </Card>

        <Card>
          <Card.Header style={{ padding: '0.5rem' }}>
            <Card.Title style={{ marginBottom: 0 }}>
              Tagline 2
            </Card.Title>
          </Card.Header>
          <Card.Body>
            <Card.Text>
              <Form.Control
                type="textArea"
                value={landingPageData['tagline_2']}
                onChange={(e) => {
                  const nextTagline2 = e.target.value;
                  const nextLandingPageData = {
                    ...landingPageData,
                    tagline_2: nextTagline2,
                  };
                  setLandingPageData(nextLandingPageData);
                }}
              ></Form.Control>
            </Card.Text>
          </Card.Body>
        </Card>

        <Card>
          <Card.Header style={{ padding: '0.5rem' }}>
            <Card.Title style={{ marginBottom: 0 }}>
              Image 2
            </Card.Title>
          </Card.Header>
          <Card.Body>
            <Form.Control
              type="file"
              style={{ fontSize: '0.8rem' }}
            />
          </Card.Body>
        </Card>

        <Card>
          <Card.Header style={{ padding: '0.5rem' }}>
            <Card.Title style={{ marginBottom: 0 }}>
              Body Text 2
            </Card.Title>
          </Card.Header>
          <Card.Body>
            <Card.Text>
              <Form.Control
                as="textarea"
                value={landingPageData['advertising_text_2']}
                onChange={(e) => {
                  const nextAdText2 = e.target.value;
                  const nextLandingPageData = {
                    ...landingPageData,
                    advertising_text_2: nextAdText2,
                  };
                  setLandingPageData(nextLandingPageData);
                }}
              ></Form.Control>
            </Card.Text>
          </Card.Body>
        </Card>

        <Card>
          <Card.Header style={{ padding: '0.5rem' }}>
            <Card.Title style={{ marginBottom: 0 }}>
              Tagline 3
            </Card.Title>
          </Card.Header>
          <Card.Body>
            <Card.Text>
              <Form.Control
                type="textArea"
                value={landingPageData['tagline_3']}
                onChange={(e) => {
                  const nextTagline3 = e.target.value;
                  const nextLandingPageData = {
                    ...landingPageData,
                    tagline_3: nextTagline3,
                  };
                  setLandingPageData(nextLandingPageData);
                }}
              ></Form.Control>
            </Card.Text>
          </Card.Body>
        </Card>

        <Card>
          <Card.Header style={{ padding: '0.5rem' }}>
            <Card.Title style={{ marginBottom: 0 }}>
              Image 3
            </Card.Title>
          </Card.Header>
          <Card.Body>
            <Form.Control
              type="file"
              style={{ fontSize: '0.8rem' }}
            />
          </Card.Body>
        </Card>

        <Card>
          <Card.Header style={{ padding: '0.5rem' }}>
            <Card.Title style={{ marginBottom: 0 }}>
              Body Text 3
            </Card.Title>
          </Card.Header>
          <Card.Body>
            <Card.Text>
              <Form.Control
                as="textarea"
                value={landingPageData['advertising_text_3']}
                onChange={(e) => {
                  const nextAdText3 = e.target.value;
                  const nextLandingPageData = {
                    ...landingPageData,
                    advertising_text_3: nextAdText3,
                  };
                  setLandingPageData(nextLandingPageData);
                }}
              ></Form.Control>
            </Card.Text>
          </Card.Body>
        </Card>
      </Stack>
    </Form>
  );
}

export default WebpageSidebar;
