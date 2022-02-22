import Link from 'next/link';

export function ServiceCard({ id, title, content }) {
  return (
    // <div className="item-bx">
    //   <h2 className="numb">{id}</h2>
    //   <h6 className="mb-20">{title}</h6>
    //   <p>{content}</p>
    //   <Link href="/about">
    //     <a className="more mt-30">Read More</a>
    //   </Link>
    // </div>
    <div className="col-lg-3 col-md-6 item-bx" key={id}>
      <h2 className="numb">{id}</h2>
      <h6 className="mb-20">{title}</h6>
      <p>{content}</p>
      <Link href="/about">
        <a className="more mt-30">Read More</a>
      </Link>
    </div>
  );
}
