// import Link from 'next/link';
import styles from './Footer.module.scss';

import { ContactDetails } from './ContactDetails';
import { RecentNews } from './RecentNews';
import { Socials } from './Socials';

export function Footer() {
  return (
    <footer className={styles.footerContainer}>
      <ContactDetails />
      <RecentNews />
      <Socials />
    </footer>
  );
}
