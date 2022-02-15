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
        <div className="w-full mt-4">
          <EmailEntry />
        </div>
        <p className="font-light text-sm mt-14 text-center text-sand">
          Designed and built by Artemist
        </p>
      </div>
    </footer>
  );
}
