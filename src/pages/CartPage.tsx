import styles from "@/pages/Pages.module.scss";
import {useParams} from "react-router-dom";
import {fetchData, GET_PHOTO, GET_POST} from "@/api/products.ts";
import {useQuery} from "@tanstack/react-query";

const CartPage = () => {
  const params = useParams()

  console.log('params', params)

  const id = params.id;

  const postQuery = useQuery({
    queryKey: ['post', id],
    queryFn: () => fetchData(GET_POST, Number(id)),
    enabled: Boolean(id),
  })

  const photoQuery = useQuery({
    queryKey: ['photo', id],
    queryFn: () => fetchData(GET_PHOTO, Number(id)),
    enabled: Boolean(id),
  })

  const post = postQuery?.data?.post;
  const photo = photoQuery?.data?.photo

  if (postQuery.isLoading || photoQuery.isLoading) {
    return <div>Загрузка ...</div>
  }

  if (postQuery.error || photoQuery.error) return <div>Error loading post</div>;

  return (
    <main className={styles.page}>
      <section className={styles.hero}>
        <p className={styles.eyebrow}>Cart</p>

        <h1 className={styles.title}>
          {post?.title}
        </h1>

        <p className={styles.description}>
          Post id: {post?.id}
        </p>
      </section>

      <section className={styles.hero}>
        <p className={styles.eyebrow}>Photo</p>

        <h1 className={styles.title}>
          {photo?.title}
        </h1>

        <p className={styles.description}>
          Post id: {photo?.id}
        </p>

        <img src={photo.url} alt="photo"/>
      </section>
    </main>
  );
};

export default CartPage;
