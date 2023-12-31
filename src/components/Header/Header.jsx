import { useDispatch } from "react-redux";
import styles from "./Header.module.css";
import { setFilter } from "../../Redux/eventsSlice";

export const Header = () => {
  const dispatch = useDispatch();

  const handleChange = (e) => {
    dispatch(setFilter(e.target.value));
  };

  return (
    <header className={styles.container}>
      <div className={styles.inner}>
        <div className={styles.innerInner}>
          <div className={styles.header}>
            <div className={styles.logoContainer}>
              <a className={styles.logo} href="/event-planner">
                Event Planner
              </a>
            </div>
            <div className={styles.inputContainer}>
              <input
                type="text"
                placeholder="Search by keywords"
                className={styles.input}
                onChange={handleChange}
              />
            </div>
            <select className={styles.select} name="language" id="language">
              <option value="UA">UA</option>
              <option value="EN">EN</option>
            </select>
          </div>
        </div>
      </div>
    </header>
  );
};
