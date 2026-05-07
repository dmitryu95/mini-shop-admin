import styles from "@/pages/Pages.module.scss";

const OrdersPage = () => {
  return (
    <main className={styles.page}>
      <section className={styles.hero}>
        <p className={styles.eyebrow}>Orders</p>
        <h1 className={styles.title}>Recent customer orders</h1>
        <p className={styles.description}>
          A compact list layout already makes the page feel operational and easy to scan.
        </p>
      </section>

      <section className={styles.section}>
        <div className={styles.table}>
          <div className={styles.tableRow}>
            <strong>#1032</strong>
            <span>Anna Petrova</span>
            <span>Today, 14:40</span>
            <span className={styles.badge}>Paid</span>
          </div>
          <div className={styles.tableRow}>
            <strong>#1031</strong>
            <span>Max Ivanov</span>
            <span>Today, 11:15</span>
            <span className={styles.badge}>Packing</span>
          </div>
          <div className={styles.tableRow}>
            <strong>#1030</strong>
            <span>Olga S.</span>
            <span>Yesterday</span>
            <span className={styles.badge}>Shipped</span>
          </div>
        </div>
      </section>
    </main>
  );
};

export default OrdersPage;
