import React from "react";
import { useParams } from "react-router-dom";
import styles from "./PostDetail.module.scss";

const dummyPosts = [
  { id: "1", title: "Post 1", content: "Contenuto del post 1", image: "https://via.placeholder.com/800x400" },
  { id: "2", title: "Post 2", content: "Contenuto del post 2", image: "https://via.placeholder.com/800x400" },
  { id: "3", title: "Post 3", content: "Contenuto del post 3", image: "https://via.placeholder.com/800x400" },
];

const PostDetail: React.FC = () => {
  const { postId } = useParams<{ postId: string }>();
  const post = dummyPosts.find((p) => p.id === postId);

  if (!post) {
    return <h2 className={styles.error}>Post non trovato</h2>;
  }

  return (
    <div className={styles.postContainer}>
      <img src={post.image} alt={post.title} className={styles.image} />
      <h1>{post.title}</h1>
      <p>{post.content}</p>
    </div>
  );
};

export default PostDetail;
