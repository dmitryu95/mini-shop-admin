import styles from "@/pages/Pages.module.scss";

const AdminProductsPage = () => {
  return (
    <main className={styles.page}>
      <section className={styles.section}>
        <div className={styles.sectionHeader}>
          <div>
            <p className={styles.eyebrow}>Admin products</p>
            <h1 className={styles.sectionTitle}>Product cards preview</h1>
            <p className={styles.sectionText}>
              A neat grid works well here even before real data is connected.
            </p>
          </div>
        </div>

        <div className={styles.grid}>
          {["Daily Tee", "Canvas Bag", "City Cap"].map((item) => (
            <article key={item} className={styles.card}>
              <h2 className={styles.cardTitle}>{item}</h2>
              <p className={styles.cardText}>
                Stock amount, price, and visibility flags can be placed into this card.
              </p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
};

export default AdminProductsPage;
