import { useState } from "react";
import { useDispatch } from "react-redux";
import { addEvent } from "../../Redux/eventsSlice";
import shortid from "shortid";
import image from "../../images/1.jpg";
import styles from "./CreateEvent.module.css";
import { useLocation, useNavigate } from "react-router-dom";
import { ButtonBack } from "../ButtonBack/ButtonBack";

export const CreateEventForm = () => {
  const location = useLocation();
  const backLinkHref = location.state?.location ?? "/";
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    date: "",
    time: "",
    location: "",
    category: "Art",
    priority: "Medium",
    image: image,
  });

  const [inputErrors, setInputErrors] = useState({
    title: false,
    location: false,
  });

  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;

    console.log("Value:", value);
    console.log("checkValidity:", e.target.checkValidity());
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));

    setInputErrors((prevErrors) => ({
      ...prevErrors,
      [name]: value.trim().length < 3,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      addEvent({
        id: shortid(),
        title: formData.title,
        description: formData.description,
        date: formData.date,
        time: formData.time,
        location: formData.location,
        category: formData.category,
        priority: formData.priority,
        image: formData.image,
      })
    );
    navigate("/", { replace: true });
  };

  return (
    <div className={styles.container}>
      <div className={styles.inner}>
        <ButtonBack backLinkHref={backLinkHref} />
        <h2 className={styles.title}>Create new event</h2>
        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.formContent}>
            <label htmlFor="title">
              <p className={styles.labelText}>Title</p>
              <input
                className={`${styles.input} ${
                  inputErrors.title ? styles.invalidInput : ""
                }`}
                pattern="[A-Za-zА-Яа-яЁёІіЇїЄєҐґ\s]{3,}"
                required
                type="text"
                id="title"
                name="title"
                value={formData.title}
                onChange={handleChange}
              />
              {inputErrors.title && (
                <span className={styles.errorMessage}>Invalid input</span>
              )}
            </label>

            <label htmlFor="description" className={styles.description}>
              <p className={styles.labelText}>Description</p>
              <textarea
                required
                cols="1"
                rows="8"
                name="description"
                id="description"
                value={formData.description}
                onChange={handleChange}
              ></textarea>
            </label>

            <label htmlFor="date">
              <p className={styles.labelText}>Select date</p>
              <input
                required
                type="date"
                name="date"
                id="date"
                value={formData.date}
                onChange={handleChange}
              />
            </label>

            <label htmlFor="select time">
              <p className={styles.labelText}>Select time</p>
              <input
                required
                type="time"
                name="time"
                id="time"
                value={formData.time}
                onChange={handleChange}
              />
            </label>

            <label htmlFor="location">
              <p className={styles.labelText}>Location</p>
              <input
                className={`${styles.input} ${
                  inputErrors.location ? styles.invalidInput : ""
                }`}
                pattern="[A-Za-zА-Яа-яЁёІіЇїЄєҐґ\s]*"
                required
                type="text"
                name="location"
                id="location"
                value={formData.location}
                onChange={handleChange}
              />
              {inputErrors.location && (
                <span className={styles.errorMessage}>Invalid input</span>
              )}
            </label>

            <label htmlFor="category">
              <p className={styles.labelText}>Category</p>
              <select
                required
                name="category"
                id="category"
                onChange={handleChange}
                value={formData.category}
              >
                <option value="Art">Art</option>
                <option value="Music">Music</option>
                <option value="Business">Business</option>
                <option value="Conference">Conference</option>
                <option value="Workshop">Workshop</option>
                <option value="Party">Party</option>
                <option value="Sport">Sport</option>
              </select>
            </label>

            <label htmlFor="picture">
              <p className={`${styles.labelText} ${styles.disabled}`}>
                Add picture
              </p>
              <input type="text" name="picture" id="picture" disabled />
            </label>

            <label htmlFor="priority">
              <p className={styles.labelText}>Priority</p>
              <select
                required
                name="priority"
                id="priority"
                onChange={handleChange}
                value={formData.priority}
              >
                <option value="High">High</option>
                <option value="Medium">Medium</option>
                <option value="Low">Low</option>
              </select>
            </label>
          </div>
          <div className={styles.btn}>
            <button className={styles.addEvent}>Add event</button>
          </div>
        </form>
      </div>
    </div>
  );
};
