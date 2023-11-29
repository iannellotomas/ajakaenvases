import styles from "./SectionTitle.module.css"

export default function SectionTitle({content}) {
  return (
    <h2 className={styles.sectionTitle}>
      ~ {content} ~
    </h2>
  );
}