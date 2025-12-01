
export default function Home() {
  return (
    <div style={{ padding: '40px', fontFamily: 'sans-serif' }}>
      <h1>DeployFlow Demo</h1>
      <p>This is a generated test project.</p>
      <p>Secret Message: <strong>{process.env.NEXT_PUBLIC_GREETING || 'Env var not set!'}</strong></p>
    </div>
  )
}
    