import styles from './Footer.module.scss';

export function EmailEntry() {
  return (
    <div className={styles.subscribe}>
      <input type="text" className="" placeholder="Type Your Email" />
      <span className="pe-7s-paper-plane" />
    </div>
  );
}
