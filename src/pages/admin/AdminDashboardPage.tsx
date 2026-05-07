import styles from "@/pages/Pages.module.scss";

const AdminDashboardPage = () => {
  return (
    <main className={styles.page}>
      <section className={styles.hero}>
        <p className={styles.eyebrow}>Admin</p>
        <h1 className={styles.title}>Dashboard overview</h1>
        <p className={styles.description}>
          This is a simple monitoring view for orders, products, and current shop activity.
        </p>
      </section>

      <section className={styles.section}>
        <div className={styles.stats}>
          <div className={styles.stat}>
            <span className={styles.muted}>Revenue today</span>
            <span className={styles.statValue}>$1,280</span>
          </div>
          <div className={styles.stat}>
            <span className={styles.muted}>New orders</span>
            <span className={styles.statValue}>18</span>
          </div>
          <div className={styles.stat}>
            <span className={styles.muted}>Low stock</span>
            <span className={styles.statValue}>6</span>
          </div>
        </div>
      </section>
    </main>
  );
};

export default AdminDashboardPage;
