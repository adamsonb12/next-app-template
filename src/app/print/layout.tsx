import styles from "./styles.module.css";

export default function ReadPagesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={styles.content}>
      <section className={styles.gridContent}>{children}</section>
    </div>
  );
}
