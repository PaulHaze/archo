import Image from 'next/image';

export function BlogSummary({ blogThumbImgUrl, blogTitle, blogDate }) {
  return (
    <div className="flex">
      <div className="h-20 aspect-[5/4] mr-2 relative">
        {/* <img src="/assets/img/blog/blog_1.jpg" alt="" /> */}
        <Image src={blogThumbImgUrl} objectFit="cover" layout="fill" />
      </div>
      <div className="pr-2 flex flex-col justify-between">
        <p className="text-xs smd:text-sm text-right">{blogTitle}</p>
        <p className="text-sm text-sand text-right">{blogDate}</p>
      </div>
    </div>
  );
}
