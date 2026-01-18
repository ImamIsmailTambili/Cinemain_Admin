"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { api } from "@/lib/api";

interface Props {
  children: React.ReactNode;
}

export default function CheckLogin({ children }: Props) {
  const router = useRouter();

  useEffect(() => {
    api.get("/admin/me", { withCredentials: true })
      .catch(() => router.replace("/Login"));
  }, [router]);

  return <>{children}</>;
}
