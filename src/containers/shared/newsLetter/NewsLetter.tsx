import styles from './Newsletter.module.scss'
import NewsletterForm from './newsLetterForm/NewsLetterForm'
const NewsLetter = () => {
    return(
        <div className={styles.newsLetterContainer}>
        <p className={styles.testoNewsletter}>START YOUR VIRTUAL FOOTBALL CAREER! </p>
        <NewsletterForm/>
        </div>
    )
}

export default NewsLetter