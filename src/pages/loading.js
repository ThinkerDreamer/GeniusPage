import React from 'react';
import RainbowContainer from '@/components/RainbowContainer';
import { Container } from 'react-bootstrap';
import { useRouter } from 'next/router';

export default function LoadingPage() {
  const router = useRouter();
  const { idea } = router.query;

  // idle | loading | success | error
  const [status, setStatus] = React.useState('idle');
  // setTimeout(() => {
  //   router.push({ pathname: '/dashboard', query: { idea: idea } });
  // }, 3000);
  React.useEffect(() => {
    const postIdea = async function (idea) {
      setStatus('loading');
      const url = new URL('/api/generate-idea', location.href);
      const jsonObject = {
        text: idea,
      };
      const endPoint = url;
      const options = {
        method: 'POST',
        body: jsonObject,
      };
      const response = await fetch(endPoint, options);
      const result = await response.json();
      if (!result.ok) {
        setStatus('error');
      } else {
        setStatus('success');
      }
    };

    postIdea();
  }, []);

  return (
    <Container>
      <RainbowContainer>{`Loading for ${idea}...`}</RainbowContainer>
    </Container>
  );
}
