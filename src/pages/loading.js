import React from 'react';
import RainbowContainer from '@/components/RainbowContainer';
import { Container } from 'react-bootstrap';

export default function LoadingPage() {
  return (
    <Container>
      <RainbowContainer>{`Loading...`}</RainbowContainer>
    </Container>
  );
}
