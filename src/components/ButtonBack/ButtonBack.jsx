import { Link } from "react-router-dom";
import { ReactComponent as Arrow } from "../../icons/arrow-left.svg";
import styles from "./ButtonBack.module.css";

export const ButtonBack = ({ backLinkHref }) => {
  return (
    <div className={styles.backContainer}>
      <Link to={backLinkHref} className={styles.back}>
        <div className={styles.arrowWrapper}>
          <Arrow />
        </div>
        BACK
      </Link>
    </div>
  );
};
