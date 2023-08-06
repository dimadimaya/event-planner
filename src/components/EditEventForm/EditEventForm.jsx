import { useDispatch, useSelector } from "react-redux";
import { editEvent } from "../../Redux/eventsSlice";
import styles from "./EditEventForm.module.css";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { ButtonBack } from "../ButtonBack/ButtonBack";

export const EditEventForm = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { eventId } = useParams();
  const backLinkHref = location.state?.location ?? `/event/${eventId}`;
  console.log(eventId);

  const selectEventById = (state, eventId) => {
    return state.events.events.find((event) => event.id === eventId);
  };
  console.log(selectEventById);
  const event = useSelector((state) => selectEventById(state, eventId));
  console.log(event);

  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;
    dispatch(
      editEvent({
        id: eventId,
        updatedEvent: {
          [name]: value,
        },
      })
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/event/${eventId}`, { replace: true });
  };

  return (
    <div className={styles.container}>
      <div className={styles.inner}>
        <ButtonBack backLinkHref={backLinkHref} />
        <h2 className={styles.title}>Edit event</h2>
        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.formContent}>
            <label htmlFor="title">
              <p className={styles.labelText}>Title</p>
              <input
                type="text"
                id="title"
                name="title"
                value={event.title}
                onChange={handleChange}
              />
            </label>

            <label htmlFor="description" className={styles.description}>
              <p className={styles.labelText}>Description</p>
              <textarea
                cols="1"
                rows="8"
                name="description"
                id="description"
                value={event.description}
                onChange={handleChange}
              ></textarea>
            </label>
            <label htmlFor="date">
              <p className={styles.labelText}>Select date</p>
              <input
                type="date"
                name="date"
                id="date"
                value={event.date}
                onChange={handleChange}
              />
            </label>
            <label htmlFor="select time">
              <p className={styles.labelText}>Select time</p>
              <input
                type="time"
                name="time"
                id="time"
                value={event.time}
                onChange={handleChange}
              />
            </label>
            <label htmlFor="location">
              <p className={styles.labelText}>Location</p>
              <input
                type="text"
                name="location"
                id="location"
                value={event.location}
                onChange={handleChange}
              />
            </label>
            <label htmlFor="category">
              <p className={styles.labelText}>Category</p>
              <select name="category" id="category" onChange={handleChange}>
                <option value="Art">Art</option>
                <option value="Music">Music</option>
                <option value="Business">Business</option>
                <option value="Conference">Conference</option>
                <option value="Workshop">Workshop</option>
                <option value="Party">Party</option>
                <option value="Sport">Sport</option>
              </select>
            </label>
            <label htmlFor="priority">
              <p className={styles.labelText}>Priority</p>
              <select name="priority" id="priority" onChange={handleChange}>
                <option value="High">High</option>
                <option value="Medium">Medium</option>
                <option value="Low">Low</option>
              </select>
            </label>
          </div>
          <div className={styles.btn}>
            <button className={styles.addEvent}>Save</button>
          </div>
        </form>
      </div>
    </div>
  );
};
