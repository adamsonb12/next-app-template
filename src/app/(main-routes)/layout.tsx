import styles from "./styles.module.css";

export default function ReadPagesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <main className={styles.mainContainer}>
        <section className={styles.gridContent}>{children}</section>
      </main>
    </>
  );
}
