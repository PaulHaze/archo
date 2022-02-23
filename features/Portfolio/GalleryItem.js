import Link from 'next/link';

export function GalleryItem({ id, filterClass, image, title, tag }) {
  return (
    <div
      key={id}
      className={`items ${filterClass} wow fadeInUp mb-10 `}
      data-wow-delay=".3s"
    >
      <div
        className="item-img bg-img wow imago"
        style={{
          backgroundImage: `url(${image})`,
        }}
      >
        <Link href="/portfolio">
          <a>
            <div className="item-img-overlay valign" />
          </a>
        </Link>
      </div>
      <div className="info">
        <h5 className="">{title}</h5>
        <span className="">{tag}</span>
      </div>
    </div>
  );
}
