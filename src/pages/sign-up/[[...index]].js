import { SignUp } from '@clerk/clerk-react';
import { Container } from 'react-bootstrap';

// Render the sign in component in your
// custom sign in page.
export default function SignUpPage() {
  return (
    <Container
      style={{
        margin: '1rem auto',
        width: 'fit-content',
        maxWidth: '90%',
      }}
    >
      <SignUp path="/sign-up" routing="path" signInUrl="/sign-in" />
    </Container>
  );
}
