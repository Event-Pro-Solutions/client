import MobileLanding from '../mobile/pages/MobileLanding'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <MobileLanding />
      <h2 className="title">
        <Link href="/auth/login">Login</Link>
      </h2>
      <h2 className="title">
        <Link href="/auth/create-customer">Create Customer</Link>
      </h2>
      <h2 className="title">
        <Link href="/auth/create-organizer">Create Organizer</Link>
      </h2>
      <h2 className="title">
        <Link href="/user/profile">Profile</Link>
      </h2>
    </main>
  )
}
