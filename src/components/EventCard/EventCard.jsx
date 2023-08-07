import { Link, useLocation } from "react-router-dom";
import styles from "./EventCard.module.css";
import { formatDate } from "../../utils/formatDate";

export const EventCard = ({
  id,
  image,
  title,
  category,
  priority,
  date,
  time,
  location,
  description,
}) => {
  const locat = useLocation();
  return (
    <>
      <li key={id}>
        <div className={styles.card}>
          <div className={styles.cardInfo}>
            <img className={styles.img} src={image} alt={title} width={300} />
            <div className={styles.categPrior}>
              <p className={styles.category}>{category}</p>
              <p
                className={`${styles.priority} ${
                  styles[`${priority.toLowerCase()}-priority`]
                }`}
              >
                {priority}
              </p>
            </div>
            <div className={styles.timeAndLoc}>
              <div>
                <span>{formatDate(date)}</span>
                <span> at </span>
                <span>{time}</span>
              </div>
              <p>{location}</p>
            </div>
          </div>
          <div className={styles.titleAndDisk}>
            <h3 className={styles.titleCard}>{title}</h3>
            <p className={styles.description}>
              {description.slice(0, 80)}
              {description.length > 80 && "..."}
            </p>
            <Link
              to={`/event/${id}`}
              state={{ locat }}
              className={`${styles["more-info"]}`}
            >
              More info
            </Link>
          </div>
        </div>
      </li>
    </>
  );
};
