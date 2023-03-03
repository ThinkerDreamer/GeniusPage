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
    async function postIdea(idea) {
      setStatus('loading');
      // const jsonObject = {
      //   text: idea,
      // };

      const endPoint = 'https://geniuspage.fly.dev/generate-idea';
      const options = {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ idea }),
        //body: jsonObject,
      };
      const response = await fetch(endPoint, options);
      const result = await response.json();
      console.log(result);
      // if (!result.ok) {
      //   setStatus('error');
      // } else {
      //   setStatus('success');
      // }
    }
    postIdea(idea);
  }, []);

  return (
    <Container>
      <RainbowContainer>{`Loading for ${idea}...`}</RainbowContainer>
    </Container>
  );
}
