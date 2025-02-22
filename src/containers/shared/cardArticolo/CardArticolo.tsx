import React from "react";
import styles from "./CardArticolo.module.scss";

interface ArticleCardProps {
  title: string;
  description: string;
  image: string;
  link: string;
  autore:string;
  dataPost:string;
  categoria:string;
}

const CardArticolo: React.FC<ArticleCardProps> = ({ title, description, image, link, autore, dataPost, categoria }) => {
  
    return (
        <div className={styles.card}>
          <div className={styles.cardContent}>
            <div>
              <h3 className={styles.title}>{title}</h3>
              <p className={styles.subtitle}>{autore} - {dataPost}</p>
            </div>
            <p className={styles.categoria}>{categoria}</p>
          </div>
        </div>
      );
};

export default CardArticolo;
