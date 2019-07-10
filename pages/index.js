import Link from 'next/link';
function Index() {
  return (
    <section>
      <h1>Hello world from Next Js!</h1>
      <Link href="/about">
        <a title="About">About</a>
      </Link>
    </section>
  );
}

export default Index;
