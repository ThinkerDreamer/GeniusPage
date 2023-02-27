import { SignIn } from '@clerk/clerk-react';
import { Container } from 'react-bootstrap';

// Render the sign in component in your
// custom sign in page.
export default function SignInPage() {
  return (
    <Container
      style={{
        margin: '1rem auto',
        width: 'fit-content',
        maxWidth: '90%',
      }}
    >
      <SignIn />
    </Container>
  );
}
