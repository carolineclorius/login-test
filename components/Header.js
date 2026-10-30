import Link from "next/link";
import styles from "./Header.module.css";
import AuthStatus from "./AuthStatus";

export default function Header() {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <Link href="/" className={styles.logo}>
          Supabase Auth
        </Link>
        <ul className={styles.links}>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/profile">Profile</Link>
          </li>
           <li>
            <Link href="/profile">Members</Link>
          </li>
        </ul>
        <AuthStatus />
      </nav>
    </header>
  );
}
