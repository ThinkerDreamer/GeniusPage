import Image from 'next/image';

export default function FourOhFour() {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        margin: '30px auto',
        width: '700',
        textAlign: 'center',
      }}
    >
      <Image src="https://http.cat/404" width={700} height={550} />
    </div>
  );
}
