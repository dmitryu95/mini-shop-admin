import styles from "@/pages/Pages.module.scss";

const CartPage = () => {
  return (
    <main className={styles.page}>
      <section className={styles.hero}>
        <p className={styles.eyebrow}>Cart</p>
        <h1 className={styles.title}>Order summary before checkout</h1>
        <p className={styles.description}>
          The cart now has a readable split between selected items and a compact summary card.
        </p>
      </section>

      <section className={styles.section}>
        <div className={styles.gridWide}>
          <div className={styles.card}>
            <h2 className={styles.cardTitle}>Items in cart</h2>
            <ul className={styles.list}>
              <li className={styles.listItem}>
                <div>
                  <strong>Minimal Sneakers</strong>
                  <p className={styles.cardText}>Size 42, neutral colorway</p>
                </div>
                <span className={styles.badge}>1 x $94</span>
              </li>
              <li className={styles.listItem}>
                <div>
                  <strong>Travel Bottle</strong>
                  <p className={styles.cardText}>Lightweight metal bottle</p>
                </div>
                <span className={styles.badge}>2 x $18</span>
              </li>
            </ul>
          </div>

          <aside className={`${styles.card} ${styles.cardAccent}`}>
            <h2 className={styles.cardTitle}>Summary</h2>
            <ul className={styles.list}>
              <li className={styles.listItem}>
                <span>Subtotal</span>
                <strong>$130</strong>
              </li>
              <li className={styles.listItem}>
                <span>Delivery</span>
                <strong>$12</strong>
              </li>
              <li className={styles.listItem}>
                <span>Total</span>
                <strong>$142</strong>
              </li>
            </ul>
          </aside>
        </div>
      </section>
    </main>
  );
};

export default CartPage;
