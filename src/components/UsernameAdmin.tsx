"use client"

import { useAdmin } from "./UseAdmin"

const UsernameAdmin = () => {
    const { admin } = useAdmin()

    return (
        <div className="flex items-center gap-1 md:gap-4  pl-2 md:pl-4 border-l border-slate-200">
            <div className="text-right">
                <p className="text-sm font-semibold">{admin?.username?.toUpperCase()}</p>
            </div>
            <div className="w-9 h-9 rounded-full bg-blue-950 flex items-center justify-center">
                <span className="text-sm font-semibold text-white">{admin?.username
                    .slice(0, 2)
                    .toUpperCase()
                }</span>
            </div>
        </div>
    )
}

export default UsernameAdmin
