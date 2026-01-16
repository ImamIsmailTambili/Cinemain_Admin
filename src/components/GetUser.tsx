import { cookies } from 'next/headers';

async function getUser() {
    try {
        const cookieStore = await cookies();
        const token = cookieStore.get("jwt")?.value;

        if (!token) return null;

        const res = await fetch("http://localhost:3001/admin/me", {
            headers: {
                cookie: `jwt=${token}`,
            },
            cache: "no-store",
        });

        if (!res.ok) return null;

        const data = await res.json();
        return data?.admin ?? null;
    } catch {
        return null;
    }
}

export default getUser