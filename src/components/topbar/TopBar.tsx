import NotifTopbar from './NotifTopbar';
import Link from 'next/link';
import UsernameAdmin from '../UsernameAdmin';

const TopBar = () => {
    return (
        <header className="h-16 bg-white border-b border-slate-200 flex items-center justify-between md:justify-end px-3 md:px-10">
            {/* Logo */}
            <Link href="/Dashboard" className="md:hidden text-2xl font-logo text-blue-950">
                Cinemain
            </Link>

            <div className="flex items-center gap-3 md:gap-4">
                <Link href="/Notif">
                    <NotifTopbar />
                </Link>

                <UsernameAdmin />
            </div>
        </header>
    );
}

export default TopBar
