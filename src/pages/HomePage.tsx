import styles from "@/pages/Pages.module.scss";

const HomePage = () => {
  return (
    <main className={styles.page}>
      <section className={styles.hero}>
        <p className={styles.eyebrow}>Mini Shop</p>
        <h1 className={styles.title}>Small storefront with a cleaner first screen</h1>
        <p className={styles.description}>
          This page is still static, but now it already looks like a real shop landing:
          a clear intro, quick highlights, and room for categories or promotions.
        </p>
        <div className={styles.heroMeta}>
          <span className={styles.pill}>Fast delivery</span>
          <span className={styles.pill}>Season picks</span>
          <span className={styles.pill}>Simple admin flow</span>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.sectionHeader}>
          <div>
            <h2 className={styles.sectionTitle}>What can live here</h2>
            <p className={styles.sectionText}>
              A small set of cards already gives the homepage more structure.
            </p>
          </div>
        </div>
        <div className={styles.grid}>
          <article className={`${styles.card} ${styles.cardAccent}`}>
            <h3 className={styles.cardTitle}>Featured collection</h3>
            <p className={styles.cardText}>
              Use this block for a seasonal drop, a bestseller section, or a promo banner.
            </p>
          </article>
          <article className={styles.card}>
            <h3 className={styles.cardTitle}>Popular categories</h3>
            <p className={styles.cardText}>
              Sneakers, accessories, and everyday essentials can sit here as quick entry points.
            </p>
          </article>
          <article className={styles.card}>
            <h3 className={styles.cardTitle}>Store benefits</h3>
            <p className={styles.cardText}>
              Add returns, support, or loyalty messaging without overloading the layout.
            </p>
          </article>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.stats}>
          <div className={styles.stat}>
            <span className={styles.muted}>Products ready</span>
            <span className={styles.statValue}>128</span>
          </div>
          <div className={styles.stat}>
            <span className={styles.muted}>Open orders</span>
            <span className={styles.statValue}>24</span>
          </div>
          <div className={styles.stat}>
            <span className={styles.muted}>Avg. delivery</span>
            <span className={styles.statValue}>2 days</span>
          </div>
        </div>
      </section>
    </main>
  );
};

export default HomePage;
