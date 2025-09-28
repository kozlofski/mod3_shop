"use client"

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";

export default function Home() {
  const router = useRouter();
  const { status } = useSession();

  useEffect(() => {
    if (status === "unauthenticated") {
      router.replace("/login");
    }
  }, [status, router]);

  return (
    <>
      {status === 'authenticated' && <div className='home-container text-header text-[32px]'>
        {`Not implemented yet :(`}<br />{`Please check 'product' page`}
      </div>}
    </>
  );
}
