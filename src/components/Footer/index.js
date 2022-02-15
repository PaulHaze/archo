// import Link from 'next/link';
import styles from './Footer.module.scss';

import { ContactDetails } from './ContactDetails';
import { RecentNews } from './RecentNews';
import { Socials } from './Socials';
import { EmailEntry } from './EmailEntry';

export function Footer() {
  return (
    <footer className={styles.footerContainer}>
      <ContactDetails />
      <div className="">
        <RecentNews />
        <EmailEntry />
      </div>
      <Socials />
    </footer>
  );
}
