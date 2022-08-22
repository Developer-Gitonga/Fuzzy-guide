import Link from "next/link"
import styles from "../styles/Navbar.module.css";

const Navbar = () => {
    return (
        <div className={styles.navbar}>
            <div className={styles.links}>
                <Link href="/">Home</Link>
                <Link href="/profile">Profile</Link>
                <Link href="/about">About</Link>
            </div>
        </div>
    );
};

export default Navbar;