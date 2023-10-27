'use client'
import React from 'react'
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";


const Login = () => {
    const { status } = useSession();

    const router = useRouter();
  
    if (status === "loading") {
      return <div>Loading...</div>;
    }
  
    if (status === "authenticated") {
      router.push("/")
    }
  return (
    <section>
        <button onClick={() => signIn()}>Sign In With Google</button>
    </section>
  )
}

export default Login