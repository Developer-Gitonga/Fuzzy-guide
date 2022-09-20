import Link from "next/link"
import Image from "next/image";

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="logo">
            <img src="/logo.jpg" width={208} height={177} />
            </div>
            <Link href="/">Home</Link>
            <Link href="/profile">Profile</Link>
            <Link href="/about">About</Link>
        </div>
    );
};

export default Navbar;