// import Link from 'next/link';
import styles from './Footer.module.scss';

import { ContactDetails } from './ContactDetails';
import { RecentNews } from './RecentNews';
import { SocialIcons } from './SocialIcons';
import { EmailEntry } from './EmailEntry';

export function Footer() {
  return (
    <footer className={styles.footerContainer}>
      <ContactDetails />

      <RecentNews />
      <div className="w-full">
        <SocialIcons />
        <div className="mt-6 inline-block w-3/4">
          <EmailEntry />
        </div>
      </div>
    </footer>
  );
}
