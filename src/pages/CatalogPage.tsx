import styles from "@/pages/Pages.module.scss";
import {Link} from "react-router-dom";

const CatalogPage = () => {
  const testCardId = 2;

  return (
    <main className={styles.page}>
      <section className={styles.hero}>
        <p className={styles.eyebrow}>Catalog</p>
        <h1 className={styles.title}>Product listing preview</h1>
        <p className={styles.description}>
          A simple catalog shell with a filter area, a product grid, and enough spacing to
          feel like a proper storefront instead of placeholder text.
        </p>
      </section>

      <section className={styles.section}>
        <div className={styles.gridWide}>
          <div className={styles.card}>
            <h2 className={styles.cardTitle}>Filters</h2>
            <ul className={styles.list}>
              <li className={styles.listItem}>
                <span className={styles.label}>Category</span>
                <span className={styles.badge}>All items</span>
                <Link
                  className={styles.badge}
                  to={`../cart/${testCardId}`}
                >Оpen { testCardId }</Link>
              </li>
              <li className={styles.listItem}>
                <span className={styles.label}>Price</span>
                <span className={styles.badge}>Any range</span>
              </li>
              <li className={styles.listItem}>
                <span className={styles.label}>Availability</span>
                <span className={styles.badge}>In stock</span>
              </li>
            </ul>
          </div>

          <div className={`${styles.card} ${styles.cardDark}`}>
            <h2 className={styles.cardTitle}>Sort by</h2>
            <p className={styles.cardText}>
              Newest, price, popularity, or manual collections can all fit here later.
            </p>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.grid}>
          {["Everyday Backpack", "Minimal Sneakers", "Travel Bottle", "Soft Hoodie"].map(
            (item) => (
              <article key={item} className={styles.card}>
                <h3 className={styles.cardTitle}>{item}</h3>
                <p className={styles.cardText}>
                  Short product description, current price, and CTA can be added here later.
                </p>
              </article>
            ),
          )}
        </div>
      </section>
    </main>
  );
};

export default CatalogPage;
