import React from 'react';
import { Stack, Card, Form } from 'react-bootstrap';

function WebpageSidebar() {
  return (
    <Stack gap={3}>
      <Card
        style={{
          display: 'flex',
          justifyContent: 'flex-start',
          alignItems: 'center',
          padding: '0.5rem',
        }}
      >
        <Card.Title>Title</Card.Title>
        <Card.Text>Your Startup Name</Card.Text>
      </Card>
      <Card
        style={{
          display: 'flex',
          justifyContent: 'flex-start',
          alignItems: 'center',
          padding: '0.5rem',
        }}
      >
        <Card.Title>Tagline</Card.Title>
        <Card.Text>
          Some quick example text that says how great your startup is.
        </Card.Text>
      </Card>
      <Card
        style={{
          display: 'flex',
          justifyContent: 'flex-start',
          alignItems: 'center',
          padding: '0.5rem',
        }}
      >
        <Card.Title>Image</Card.Title>
        <Form.Control type="file" style={{ fontSize: '0.8rem' }} />
      </Card>
    </Stack>
  );
}

export default WebpageSidebar;
