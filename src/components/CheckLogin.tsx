"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { api } from "@/lib/api";

export default function CheckLogin({ children }: { children: React.ReactNode }) {
    const router = useRouter();

    useEffect(() => {
        api.get("/admin/me", { withCredentials: true })
            .catch(() => router.replace("/Login"));
    }, []);

    return <>{children}</>;
}