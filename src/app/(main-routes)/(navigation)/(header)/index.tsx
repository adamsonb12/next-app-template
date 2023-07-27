import Link from "next/link";
import styles from "./styles.module.css";
import { AnimatedHeaderLogo } from "./header-logo";

export const Header = () => {
  return (
    <header className={styles.headerContainer}>
      <section className={styles.headerContent}>
        <Link href={"/"} className={styles.headerLink}>
          <AnimatedHeaderLogo />
          <span className={styles.headerTitle}>Next App Template</span>
        </Link>
      </section>
    </header>
  );
};
