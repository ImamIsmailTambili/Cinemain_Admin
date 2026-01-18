import { cookies } from 'next/headers';
import { api } from '@/lib/api';

async function getUser() {
    try {
        const cookieStore = await cookies();
        console.log("Cookie:", cookieStore.getAll())

        const token = cookieStore.get("jwt")?.value;
        console.log("JWT:", token);

        if (!token) {
            console.log("NO TOKEN");
            return null;
        };

        const res = await fetch("https://cinemain-backend.up.railway.app/auth/me", {
            headers: {
                cookie: `jwt=${token}`,
            },
            cache: "no-store",
            next: { revalidate: 0 },
        });

        const data = await res.json();
        return data?.admin ?? null;
    } catch {
        return null;
    }
}

export default getUser
