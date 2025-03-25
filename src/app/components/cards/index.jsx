import styles from "./card.module.css";

const Card = ({title, author, price, coverImage, rating, tags }) => {
    return (
        <div key={book.id} className={styles.bookCard}>
        <div className={styles.bookCover}>
            <img
                src={book.coverImage}
                alt={book.title}
                className={styles.coverImage}
            />
            <button className={styles.quickViewButton}>Visualizar</button>
        </div>
        <div className={styles.bookInfo}>
            <h3 className={styles.bookTitle}>{title}</h3>
            <p className={styles.bookAuthor}>por {author}</p>
            <div className={styles.bookRating}>
                {renderStars(rating)}
                <span className={styles.ratingValue}>({rating})</span>
            </div>
            <div className={styles.bookTags}>
                {book.tags.map((tag, index) => (
                    <span key={index} className={styles.tag}>
                        {tag}
                    </span>
                ))}
            </div>
            <div className={styles.bookPriceActions}>
                <span className={styles.bookPrice}>
                    R$ {book.price.toFixed(2)}
                </span>
                <div className={styles.bookActions}>
                    <button className={styles.iconButton}>❤️</button>
                    <button className={styles.iconButton}>🛒</button>
                </div>
            </div>
        </div>
    </div>
    );
}