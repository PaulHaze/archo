import Image from 'next/image';

import styles from './Footer.module.scss';

export function BlogSummary({ blogThumbImgUrl, blogTitle, blogDate }) {
  return (
    <div className={styles.blogSummaryContainer}>
      <div className={styles.imgContainer}>
        <Image src={blogThumbImgUrl} objectFit="cover" layout="fill" />
      </div>
      <div className={styles.textContainer}>
        <p>{blogTitle}</p>
        <p className="text-sm text-sand  mt-5">{blogDate}</p>
      </div>
    </div>
  );
}
