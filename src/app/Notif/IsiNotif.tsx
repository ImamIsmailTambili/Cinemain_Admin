"use client"

import { useAdmin } from "@/components/UseAdmin"

type Props = {
    message: string;
}

const IsiNotif = ({ message }: Props) => {
    const { admin, loading } = useAdmin();

    if (loading) return null;

    const initials = admin?.username?.slice(0, 2)?.toUpperCase() ?? "";

    return (
        <div>
            <div className="w-10 h-10 rounded-full bg-blue-950 flex items-center justify-center">
                <span className="text-sm font-semibold text-white">
                    {initials}
                </span>
            </div>
            <div>
                <h3 className="font-semibold">
                    {admin?.username?.toUpperCase()}
                </h3>
                <p className="text-sm">
                    {message}
                </p>
            </div>
        </div>
    )
}

export default IsiNotif
