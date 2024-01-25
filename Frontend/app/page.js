"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

function page() {
  const { push } = useRouter();
  useEffect(() => {
    push("/buy-file");
  }, []);
  return <></>;
}

export default page;
