import styles from "@/pages/Pages.module.scss";

const AdminProductFormPage = () => {
  return (
    <main className={styles.page}>
      <section className={styles.section}>
        <div className={styles.sectionHeader}>
          <div>
            <p className={styles.eyebrow}>Admin editor</p>
            <h1 className={styles.sectionTitle}>Product form preview</h1>
          </div>
        </div>

        <div className={styles.card}>
          <div className={styles.formPreview}>
            <div className={styles.field}>
              <span className={styles.label}>Product name</span>
              <div className={styles.input}>Minimal Sneakers</div>
            </div>
            <div className={styles.split}>
              <div className={styles.field}>
                <span className={styles.label}>Price</span>
                <div className={styles.input}>$94</div>
              </div>
              <div className={styles.field}>
                <span className={styles.label}>Stock</span>
                <div className={styles.input}>16 units</div>
              </div>
            </div>
            <div className={styles.field}>
              <span className={styles.label}>Description</span>
              <div className={`${styles.input} ${styles.textarea}`}>
                Short product copy can be previewed here until the real form is wired up.
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default AdminProductFormPage;
