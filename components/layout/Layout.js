import Link from "next/link";
import styles from "./Layout.module.css";
export default function Layout({ children }) {
  return (
    <>
      <header className={styles.header}>
        <Link href="/">
          <h2>555 Car</h2>
          <p>Choose and Buy your car</p>
        </Link>
      </header>
      <div className={styles.container} >{children}</div>
    </>
  );
}
