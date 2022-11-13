import { useSession, signIn, signOut } from "next-auth/react"

export default function SignInSignOut() {
  const { data: session } = useSession()

  if (session) {
    console.log(session)
    console.log(session.user)
    return (
      <>
        Signed in as {session.user.email} <br />
        <button onClick={() => signOut()}>Sign out</button>
      </>
    )
  }
  return (
    <>
      Not signed in <br />
      <button onClick={() => signIn()}>Sign in with Github</button>
    </>
  )
}