import styles from "@/pages/Pages.module.scss";
import ChildrenSections from "@/components/UI/ChildrenSections.tsx";
import {useMemo, useRef, useState} from "react";

const HomePage = () => {
  const count = useRef(0)
  const [simpleCount, setSimpleCount] = useState(0);
  const inputRef = useRef<HTMLInputElement | null>(null)

  const focusInput = () => {
    inputRef.current?.focus()
  }

  const handleRefClick = () => {
    console.log('handleRefClick')
    count.current++

    setInterval(() => {
      count.current++
      console.log(' count.',  count.current)
    }, 1000)
  }

  const handleSimpleClick = (value: number) => {
    const currentCount = value + 1
    setSimpleCount(currentCount)
    console.log('handleSimpleClick', currentCount)
  }

  const [counter, setCounter] = useState(0)

  const randomNumber = Math.random(); // будет изменяться
  // const randomNumber = useMemo(() => {
  //   return Math.random()
  // }, [])

  const handleClick = () => {
    console.log('click')
  }

  console.log(handleClick)
  return (
    <main className={styles.page}>
      <section className={styles.hero}>
        <p className={styles.eyebrow}>Mini Shop</p>
        <h1 className={styles.title}>Small storefront with a cleaner first screen</h1>
        <p className={styles.description}>
          This page is still static, but now it already looks like a real shop landing:
        </p>
        <ChildrenSections>
          <div className={styles.heroMeta}>
            <span className={styles.pill}>Fast delivery</span>
            <span className={styles.pill}>Season picks</span>
          </div>
        </ChildrenSections>
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
      <button onClick={handleRefClick}>
        Test ref click btn
      </button>
      <span>
        ref count: {count.current}
      </span>
      <button onClick={() => handleSimpleClick(simpleCount)}>
        Test simple click btn
      </button>
      <span>
        simple simpleCount: {simpleCount}
      </span>
      <input ref={inputRef}/>
      <button onClick={focusInput}>Focus</button>

      <button onClick={() => setCounter(counter + 1)}>
        +
      </button>
      <p>{randomNumber} - randomNumber</p>

    </main>
  );
};

export default HomePage;
