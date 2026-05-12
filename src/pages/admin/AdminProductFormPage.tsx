import styles from "@/pages/Pages.module.scss";
import {useState} from "react";
import {useMutation} from "@tanstack/react-query";
import {ADD_POST, createData, DELETE_POST, deleteData} from "@/api/products.ts";

type Post = {
  title: string,
  body: string,
}

const AdminProductFormPage = () => {
  const [post, setPost] = useState<Post>({
    title: '',
    body: '',
  });

  const [createdPostId, setCreatedPostId] = useState<string>('')

  const handleChangePost = (field: keyof Post, value: string) => {
    setPost((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const clear = () => {
    setPost({
      title: '',
      body: '',
    })
  }

  const deletePost = useMutation({
    mutationFn: () => deleteData(DELETE_POST, Number(createdPostId))
  })

  const createPostMutation = useMutation({
    mutationFn: async () => {
      return await createData(ADD_POST, post.title, post.body);
    },
    onSuccess: (data) => {
      console.log('Success request', data.createPost)
      if (data.createPost.id) {
        setCreatedPostId(data.createPost.id);
      }
      clear();
    },
    onError: () => {
      console.log('Catch error')
    },
    onSettled: () => {
      console.log('Finish create request')
    }
  });

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
              <span className={styles.label}>{post?.title}</span>
              <input
                className={styles.input}
                value={post.title}
                onChange={(e) => handleChangePost('title', e.target.value)}
              />
              <span className={styles.label}>{post?.body}</span>
              <input
                className={styles.input}
                value={post.body}
                onChange={(e) => handleChangePost('body', e.target.value)}
              />
            </div>
            <button className={styles.label} onClick={() => createPostMutation.mutate()}>
              Create Post
            </button>
            <span className={styles.label}>NEW POST WITH ID: {createdPostId}</span>
            <button className={styles.label} onClick={() => deletePost.mutate()}>
              delete Post
            </button>


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
