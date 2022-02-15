import Image from 'next/image';

export function BlogSummary({ blogThumbImgUrl, blogTitle, blogDate }) {
  return (
    <div className="flex my-3 bg-bluegray-800">
      <div className="w-56 aspect-[5/4] h-auto mr-2 relative">
        <Image src={blogThumbImgUrl} objectFit="cover" layout="fill" />
      </div>
      <div className="pr-2 ssm:ml-4 flex flex-col justify-around">
        <p className="text-xs smd:text-sm  leading-5">{blogTitle}</p>
        <p className="text-sm text-sand  mt-5">{blogDate}</p>
      </div>
    </div>
  );
}
