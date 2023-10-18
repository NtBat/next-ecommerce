
"use client";

import { useSession } from "next-auth/react";

export default function Home() {
  const { data } = useSession();
  return (
    <div className="text-red-500 bg-blue-500">
      {data?.user?.name}
    </div>
  )
}


