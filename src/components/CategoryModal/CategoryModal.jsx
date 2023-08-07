import styles from "./CategoryModal.module.css";
import { ReactComponent as Category } from "../../icons/category.svg";
import { useEffect } from "react";

export const CategoryModal = ({
  isOpen,
  onClose,
  onCategoryChange,
  anchorElement,
}) => {
  useEffect(() => {
    const handleKeyPress = (event) => {
      if (event.key === "Escape" && isOpen) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyPress);
    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const sortIconRect = anchorElement.getBoundingClientRect();
  const modalStyle = {
    position: "absolute",
    top: sortIconRect.bottom - 55 + "px",
    left: sortIconRect.left - 10 + "px",
  };

  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div className={styles.modalContent} style={modalStyle}>
        <button
          className={`${styles.btn} ${styles.borderBottom}`}
          onClick={() => {
            onCategoryChange("Category");
            onClose();
          }}
        >
          <Category className={styles.icon} /> Category
        </button>
        <button
          className={styles.btn}
          onClick={() => {
            onCategoryChange("Art");
            onClose();
          }}
        >
          Art
        </button>
        <button
          className={styles.btn}
          onClick={() => {
            onCategoryChange("Music");
            onClose();
          }}
        >
          Music
        </button>
        <button
          className={styles.btn}
          onClick={() => {
            onCategoryChange("Business");
            onClose();
          }}
        >
          Business
        </button>
        <button
          className={styles.btn}
          onClick={() => {
            onCategoryChange("Conference");
            onClose();
          }}
        >
          Conference
        </button>
        <button
          className={styles.btn}
          onClick={() => {
            onCategoryChange("Workshop");
            onClose();
          }}
        >
          Workshop
        </button>
        <button
          className={styles.btn}
          onClick={() => {
            onCategoryChange("Party");
            onClose();
          }}
        >
          Party
        </button>
        <button
          className={styles.btn}
          onClick={() => {
            onCategoryChange("Sport");
            onClose();
          }}
        >
          Sport
        </button>
      </div>
    </div>
  );
};
