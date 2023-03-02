import { Container } from 'react-bootstrap';
import { useRouter } from 'next/router';
import Link from 'next/link';

export default function Dashboard() {
  const router = useRouter();
  const { idea } = router.query;

  return (
    <Container>
      Hey, you&apos;re logged in!
      <br />
      Here&apos;s your dashboard!
      <Container>{idea}</Container>
      <Link href={'/'}>Go home</Link>
    </Container>
  );
}
