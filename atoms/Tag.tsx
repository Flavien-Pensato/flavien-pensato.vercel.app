import styles from "./Tag.module.css";

const Tag = ({ children }) => {
  return <strong className={styles.tag}>{children}</strong>;
};

export default Tag;
