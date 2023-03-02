import React from 'react';
import RainbowContainer from '@/components/RainbowContainer';
import { Container } from 'react-bootstrap';
import { useRouter } from 'next/router';

export default function LoadingPage() {
  const router = useRouter();
  const { idea } = router.query;

  setTimeout(() => {
    router.push({ pathname: '/dashboard', query: { idea: idea } });
  }, 3000);

  return (
    <Container>
      <RainbowContainer>{`Loading for ${idea}...`}</RainbowContainer>
    </Container>
  );
}
