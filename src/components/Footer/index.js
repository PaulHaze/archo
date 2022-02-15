import Link from 'next/link';
import styles from './Footer.module.scss';

import { ContactDetails } from './ContactDetails';

export function Footer() {
  return (
    <footer className={styles.footerContainer}>
      <ContactDetails />
      <ContactDetails />
      <ContactDetails />
    </footer>
  );
}
