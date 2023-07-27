import { AsideNavigation } from "./(navigation)/(aside)";
import { Header } from "./(navigation)/(header)";
import styles from "./styles.module.css";

export default function ReadPagesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      <main className={styles.mainContainer}>
        <AsideNavigation />
        <section className={styles.gridContent}>{children}</section>
      </main>
    </>
  );
}
