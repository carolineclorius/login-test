import Link from "next/link";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main>
      <section className={styles.hero}>
        <h1>Velkommen til din konto</h1>
        <p>
          Opret en konto eller log ind for at komme i gang. På din profil kan du
          se dine kontooplysninger og logge ud igen.
        </p>
      </section>

      <h2 className={styles.heading}>Kom godt i gang</h2>
      <ul className={styles.routes}>
        <li>
          <Link href="/signup">Opret konto</Link>
          <span>Opret en konto med din e-mail og en adgangskode.</span>
          <em>Offentlig</em>
        </li>
        <li>
          <Link href="/login">Log ind</Link>
          <span>Log ind på din eksisterende konto.</span>
          <em>Offentlig</em>
        </li>
        <li>
          <Link href="/profile">Min profil</Link>
          <span>Se dine kontooplysninger og log ud. Kræver, at du er logget ind.</span>
          <em className={styles.protected}>Log ind påkrævet</em>
        </li>
 <li>
          <Link href="/members">Medlemmer</Link>
          <span>Side kun for medlemmer</span>
          <em className={styles.protected}>Log ind påkrævet</em>
        </li>
      </ul>
    </main>
  );
}
