import styles from "./GhostTitle.module.css"

export default function GhostTitle({content}) {
  return (
    <h3 className={styles.ghostTitle}>
      {content}
    </h3>
  );
}