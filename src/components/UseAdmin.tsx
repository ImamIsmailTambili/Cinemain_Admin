"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { api } from "@/lib/api";

export function useAdmin() {
    const router = useRouter();
    const [admin, setAdmin] = useState<any>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        api.get("/admin/me", { withCredentials: true })
            .then(res => {
                setAdmin(res.data.admin);
            })
            .catch(() => {
                router.replace("/Login");
            })
            .finally(() => setLoading(false));
    }, []);

    return { admin, loading };
}
