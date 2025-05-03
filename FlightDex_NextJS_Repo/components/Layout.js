import Link from 'next/link';
export default function Layout({ children }) {
  return (
    <div style={{ textAlign: 'center', fontFamily: 'Segoe UI', background: '#0c0c1c', color: '#00faff', minHeight: '100vh', padding: '2rem' }}>
      <h1>FlightDex</h1>
      <nav>
        <Link href="/">Home</Link> | <Link href="/logbook">Logbook</Link> | <Link href="/missions">Missions</Link> | <Link href="/vora">Vora</Link>
      </nav>
      <main style={{ marginTop: '2rem' }}>{children}</main>
    </div>
  );
}