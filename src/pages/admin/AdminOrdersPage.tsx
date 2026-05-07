import styles from "@/pages/Pages.module.scss";

const AdminOrdersPage = () => {
  return (
    <main className={styles.page}>
      <section className={styles.section}>
        <div className={styles.sectionHeader}>
          <div>
            <p className={styles.eyebrow}>Admin orders</p>
            <h1 className={styles.sectionTitle}>Processing queue</h1>
          </div>
        </div>

        <div className={styles.table}>
          <div className={styles.tableRow}>
            <strong>#2044</strong>
            <span>Courier delivery</span>
            <span>Needs call confirmation</span>
            <span className={styles.badge}>New</span>
          </div>
          <div className={styles.tableRow}>
            <strong>#2043</strong>
            <span>Pickup</span>
            <span>Ready for packing</span>
            <span className={styles.badge}>In work</span>
          </div>
        </div>
      </section>
    </main>
  );
};

export default AdminOrdersPage;
