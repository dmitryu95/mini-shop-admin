import styles from "@/pages/Pages.module.scss";

const CheckoutPage = () => {
  return (
    <main className={styles.page}>
      <section className={styles.hero}>
        <p className={styles.eyebrow}>Checkout</p>
        <h1 className={styles.title}>A clean handoff into payment and delivery</h1>
        <p className={styles.description}>
          This page keeps the flow readable: contacts, shipping step, and final confirmation.
        </p>
      </section>

      <section className={styles.section}>
        <div className={styles.grid}>
          <article className={styles.card}>
            <h2 className={styles.cardTitle}>1. Contact details</h2>
            <p className={styles.cardText}>
              Name, phone, and email can be grouped into the first step.
            </p>
          </article>
          <article className={styles.card}>
            <h2 className={styles.cardTitle}>2. Delivery method</h2>
            <p className={styles.cardText}>
              Courier, pickup, or postal delivery would fit naturally into the second block.
            </p>
          </article>
          <article className={styles.card}>
            <h2 className={styles.cardTitle}>3. Payment</h2>
            <p className={styles.cardText}>
              Final confirmation, payment option, and order comment can live here.
            </p>
          </article>
        </div>
      </section>
    </main>
  );
};

export default CheckoutPage;
