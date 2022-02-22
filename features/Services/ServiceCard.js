import Link from 'next/link';

export function ServiceCard({ id, title, content }) {
  return (
    <div
      className="item-bx flex flex-col w-full p-3 md:flex-50 md:max-w-[50%]  lg:flex-25 lg:max-w-[25%] "
      key={id}
    >
      <h2 className="numb my-5">{id}</h2>
      <h6 className="mb-20 font-bold text-lg">{title}</h6>
      <p>{content}</p>
      <Link href="/about">
        <a className="more mt-30 mb-10">Read More</a>
      </Link>
    </div>
  );
}
