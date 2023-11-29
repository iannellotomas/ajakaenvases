import styles from "./PrimaryButton.module.css";

export default function PrimaryButton({ content, href, showArrow = true }) {
  const ButtonElement = href ? 'a' : 'button';

  return (
    <ButtonElement
      className={styles.primaryButton}
      href={href}
    >
      <span>{content}</span>
      {showArrow && <ion-icon name="arrow-forward-outline"></ion-icon>}
    </ButtonElement>
  );
}