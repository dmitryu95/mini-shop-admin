import styles from "@/pages/Pages.module.scss";

const LoginPage = () => {
  return (
    <main className={styles.page}>
      <section className={styles.authCard}>
        <p className={styles.eyebrow}>Admin access</p>
        <h1 className={styles.sectionTitle}>Login page</h1>
        <p className={styles.sectionText}>
          A minimal auth card is enough for now: clear title, a short explanation, and room
          for the future form fields.
        </p>

        <div className={styles.section}>
          <div className={styles.formPreview}>
            <div className={styles.field}>
              <span className={styles.label}>Email</span>
              <div className={styles.input}>manager@mini-shop.dev</div>
            </div>
            <div className={styles.field}>
              <span className={styles.label}>Password</span>
              <div className={styles.input}>••••••••</div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default LoginPage;
