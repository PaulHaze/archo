import aboutUsData from '@/data/about-us.json';

export function AboutUs() {
  return (
    <section className="about py-[100px] bg-white">
      <div className="container">
        <div className="flex flex-col md:flex-row">
          {/* IMAGE */}
          <div className="w-full mx-auto md:w-5/12 sm:max-w-xs">
            <div
              className="exp-img wow fadeInUp"
              data-wow-delay=".3s"
              data-wow-duration="1s"
            >
              <div
                className="img bg-img wow imago"
                style={{ backgroundImage: `url(${aboutUsData.image})` }}
              >
                <div className="since playfont">
                  <span>Since</span>
                  <span>{aboutUsData.exp.since}</span>
                </div>
                <div className="years playfont">
                  <h2>{aboutUsData.exp.nmb}</h2>
                  <h5>Years Experience</h5>
                </div>
              </div>
            </div>
          </div>

          {/* TEXT */}
          <div className="w-full mx-auto md:w-7/12 sm:max-w-xs md:max-w-lg ">
            <div className="exp-content md:mt-0 px-2 h-full flex flex-col justify-between">
              <h6 className="sub-title wow fadeInUp" data-wow-delay=".6s">
                About Us
              </h6>
              <div className=" wow fadeInUp" data-wow-delay=".9s">
                <h2 className="mb-20 playfont">
                  {aboutUsData.title.first} <br /> {aboutUsData.title.second}
                </h2>
                <p>{aboutUsData.content}</p>
              </div>
              <div className="numbers mt-0 wow fadeInUp" data-wow-delay="1.2s">
                <div className="row">
                  {aboutUsData.numbers.map(item => (
                    <div className="col-md-4" key={item.id}>
                      <div className="item">
                        <h3>
                          <span className="nbr playfont">{item.number}</span>
                        </h3>
                        <h6>{item.name}</h6>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
