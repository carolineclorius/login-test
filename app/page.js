import Link from "next/link";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main>
      <section className={styles.hero}>
        <h1>Supabase Suth in Next.js</h1>
        <p>
          Sign up or log in to get started. On your profile you can see your
          account details and log out again.
        </p>
      </section>

      <h2 className={styles.heading}>Routes</h2>
      <ul className={styles.routes}>
        <li>
          <Link href="/signup">/signup</Link>
          <span>Create an account with your email and a password.</span>
          <em>Public</em>
        </li>
        <li>
          <Link href="/login">/login</Link>
          <span>Log in to your existing account.</span>
          <em>Public</em>
        </li>
        <li>
          <Link href="/profile">/profile</Link>
          <span>See your account details and log out. Requires you to be logged in.</span>
          <em className={styles.protected}>Login required</em>
        </li>
 <li>
          <Link href="/members">/members</Link>
          <span>A page for members only.</span>
          <em className={styles.protected}>Login required</em>
        </li>
      </ul>
    </main>
  );
}
