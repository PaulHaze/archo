export function TestimonialCard({ item }) {
  return (
    <div
      className="testimonail item wow fadeInUp"
      data-wow-delay=".3s"
      key={item.id}
    >
      <span className="quote-icon">
        <img src="/assets/img/clients/quote.svg" alt="" />
      </span>
      <div className="cont">
        <p className="">&quot;{item.content}&quot;</p>
      </div>
      <div className="info">
        <div className="author">
          <img src={item.image} alt="" />
        </div>
        <h6>
          {item.username} <span>{item.usertitle}</span>
        </h6>
      </div>
    </div>
  );
}
