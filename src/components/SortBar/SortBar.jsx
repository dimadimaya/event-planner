import { NavLink } from "react-router-dom";
import { ReactComponent as Plus } from "../../icons/plus.svg";
import { ReactComponent as Sort } from "../../icons/sort.svg";
import { ReactComponent as Category } from "../../icons/category.svg";
import styles from "./SortBar.module.css";
import { useRef, useState } from "react";
import { CategoryModal } from "../CategoryModal/CategoryModal";

export const SortBar = ({ selectedCategory, onCategoryChange }) => {
  const sortIconRef = useRef(null);
  const screenWidth = window.innerWidth;

  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div className={styles.sortBar}>
      <div className={styles.category} onClick={toggleModal}>
        <span>
          <Category />
        </span>
        {screenWidth >= 768 && (
          <span className={styles.categoryText}> Category</span>
        )}
      </div>
      <div className={styles.sort} ref={sortIconRef}>
        <Sort />
        {screenWidth >= 768 && (
          <span className={styles.sortText}> Sort by</span>
        )}
      </div>
      <NavLink to="/create" className={styles.add}>
        <Plus />
        {screenWidth >= 768 && (
          <span className={styles.addText}> Add new event</span>
        )}
      </NavLink>
      <CategoryModal
        isOpen={isModalOpen}
        onClose={toggleModal}
        selectedCategory={selectedCategory}
        onCategoryChange={onCategoryChange}
        anchorElement={sortIconRef.current}
      />
    </div>
  );
};
