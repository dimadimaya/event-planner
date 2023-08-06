import styles from "./CategoryModal.module.css";

export const CategoryModal = ({
  isOpen,
  onClose,
  onCategoryChange,
  anchorElement,
}) => {
  if (!isOpen) return null;

  const sortIconRect = anchorElement.getBoundingClientRect();
  const modalStyle = {
    position: "absolute",
    top: sortIconRect.bottom - 55 + "px",
    left: sortIconRect.left - 80 + "px",

    "@media (minWidth: 768px)": {
      top: sortIconRect.bottom - 55 + "px",
      left: sortIconRect.left - 500 + "px",
    },
  };

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalContent} style={modalStyle}>
        <button
          className={`${styles.btn} ${styles.borderBottom}`}
          onClick={() => {
            onCategoryChange("all");
            onClose();
          }}
        >
          All
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
