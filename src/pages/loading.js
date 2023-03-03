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

  //2a09:8280:1::1:f0f7
  React.useEffect(() => {
    async function postIdea(idea) {
      //const res = await fetch(`https://[2a09:8280:1::1:f0f7]/hello`);

      // setStatus('loading');
      // //const url = new URL('/api/generate-idea', location.href);
      const jsonObject = {
        text: idea,
      };
      // const endPoint = 'https://geniuspage.fly.dev/hello';
      const endPoint = `https://[2a09:8280:1::1:f0f7]/hello`;
      // const options = {
      //   method: 'POST',
      //   headers: {
      //     'content-type': 'application/json',
      //   },
      //   body: JSON.stringify(jsonObject),
      //   //body: jsonObject,
      // };
      //console.log(options);
      //const response = await fetch(endPoint, options);
      const response = await fetch(endPoint);
      const result = await response.json();
      console.log(result);
      // if (!result.ok) {
      //   setStatus('error');
      // } else {
      //   setStatus('success');
      // }
    }

    postIdea(idea);
    console.log(status);
  }, []);

  return (
    <Container>
      <RainbowContainer>{`Loading for ${idea}...`}</RainbowContainer>
    </Container>
  );
}
