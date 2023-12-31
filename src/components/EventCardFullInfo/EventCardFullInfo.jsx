import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { deleteEvent } from "../../Redux/eventsSlice";
import styles from "./EventCardFullInfo.module.css";
import { ButtonBack } from "../ButtonBack/ButtonBack";
import { formatDate } from "../../utils/formatDate";
import { selectEventById } from "../../Redux/selectors";

export const EventCardFullInfo = () => {
  const locat = useLocation();
  const navigate = useNavigate();
  const backLinkHref = locat.state?.location ?? "/";
  const { eventId } = useParams();
  const event = useSelector((state) => selectEventById(state, eventId));

  const {
    title,
    image,
    category,
    priority,
    date,
    time,
    location,
    description,
  } = event;
  const dispatch = useDispatch();
  const handleDelete = () => {
    dispatch(deleteEvent({ eventId }));
    navigate("/", { replace: true });
  };

  const handleEdit = () => {
    navigate(`/edit/${eventId}`, { replace: true });
  };
  return (
    <>
      <div className={styles.container}>
        <div className={styles.inner}>
          <ButtonBack backLinkHref={backLinkHref} />
          <div className={styles.eventCardContainer}>
            <div className={styles.eventCardContainerInner}>
              <div>
                <h3 className={styles.title}>{title}</h3>
              </div>
              <div className={styles.eventCard}>
                <div>
                  <img className={styles.img} src={image} alt={title} />
                </div>
                <div className={styles.eventCardInfo}>
                  <h3 className={styles.description}>{description}</h3>
                  <div className={styles.info}>
                    <h3 className={styles.category}>{category}</h3>
                    <h3
                      className={`${styles.priority} ${
                        styles[`${priority.toLowerCase()}-priority`]
                      }`}
                    >
                      {priority}
                    </h3>
                    <h3 className={styles.location}>{location}</h3>
                    <div className={styles.time}>
                      <span>{formatDate(date)}</span>
                      <span> at </span>
                      <span>{time}</span>
                    </div>
                  </div>
                  <div className={styles.btns}>
                    <button onClick={handleEdit} className={styles.edit}>
                      Edit
                    </button>
                    <button onClick={handleDelete} className={styles.delete}>
                      Delete event
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
