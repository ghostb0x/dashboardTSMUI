import * as React from 'react';
import { signIn, signOut, useSession } from 'next-auth/react';

function Login() {
  const { data: session } = useSession();

  if (session) {
    return (
      <>
        Signed in as {session?.user?.name} {"("}{session?.user?.email}{")"} <br />
        <button onClick={() => signOut()}>Sign out</button>
      </>
    );
  }

  return (
    <>
      {"Hello stranger"} <br />
      <button onClick={() => signIn()}>Sign in</button>
    </>
  );
}

export default Login;
