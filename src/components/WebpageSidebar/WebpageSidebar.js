import React from 'react';
import { Stack, Card, Form } from 'react-bootstrap';

function WebpageSidebar({ startUpData }) {
  const [startupName, setStartupName] = React.useState(
    startUpData?.name || 'Your Startup Name'
  );
  const [startupTagline, setStartupTagline] = React.useState(
    startUpData?.tagline || 'Your Startup Tagline'
  );

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
                value={startupName}
                onChange={(e) => setStartupName(e.target.value)}
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
                value={startupTagline}
                onChange={(e) => setStartupTagline(e.target.value)}
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
