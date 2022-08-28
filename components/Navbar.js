import Link from "next/link"

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="links">
                <Link href="/">Home</Link>
                <Link href="/profile">Profile</Link>
                <Link href="/about">About</Link>
            </div>
        </div>
    );
};

export default Navbar;