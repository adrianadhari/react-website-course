import { Container, Row, Col } from "react-bootstrap";
import HeroImage from "../assets/img/hero.png";
import { kelasTerbaru, dataSwiper } from "../data";
import { useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import FaqComponent from "../components/FaqComponent";

const HomePage = () => {
  let navigate = useNavigate();
  return (
    <div className="homepage">
      {/* Header */}
      <header className="w-100 min-vh-100 pt-5 overflow-hidden">
        <Container>
          <Row className="header-box d-flex align-items-center">
            <Col lg="6">
              <h1 className="mb-4 animate__animated animate__fadeInUp animate__delay-1s">
                Temukan <br />
                <span>Bakat Kreatifmu</span> <br /> Bersama Kami!
              </h1>
              <p className="mb-4 animate__animated animate__fadeInUp animate__delay-1s">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic
                assumenda, tenetur alias dicta nulla corrupti.
              </p>
              <button
                className="btn btn-danger rounded-1 btn-lg me-2 animate__animated animate__fadeInUp animate__delay-1s"
                onClick={() => navigate("/kelas")}
              >
                Lihat Kelas
              </button>
              <button className="btn btn-outline-danger rounded-1 btn-lg animate__animated animate__fadeInUp animate__delay-1s">
                Lihat Promo
              </button>
            </Col>
            <Col lg="6" className="pt-lg-0 pt-5">
              <img
                src={HeroImage}
                alt="hero"
                className="animate__animated animate__fadeInUp"
              />
            </Col>
          </Row>
        </Container>
      </header>
      {/* Header */}

      {/* Kelas */}
      <div className="kelas w-100 min-vh-100">
        <Container>
          <Row className="pb-5">
            <Col>
              <h1 className="text-center fw-bold">Kelas Terbaru</h1>
              <p className="text-center">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              </p>
            </Col>
          </Row>
          <Row>
            {kelasTerbaru.map((kelas) => {
              return (
                <Col
                  md={6}
                  lg={4}
                  key={kelas.id}
                  className="mb-4"
                  data-aos="fade-up"
                  data-aos-duration="1500"
                >
                  <div className="card border-0 shadow-sm">
                    <img
                      src={kelas.image}
                      alt="unsplash.com"
                      className="w-100 mb-1 rounded-top-2 mb-5"
                      style={{ height: "250px" }}
                    />
                    <div className="star text-warning px-3">
                      <i className={kelas.star1}></i>
                      <i className={kelas.star2}></i>
                      <i className={kelas.star3}></i>
                      <i className={kelas.star4}></i>
                      <i className={kelas.star5}></i>
                    </div>
                    <h5 className="mb-5 px-3">{kelas.title}</h5>
                    <div className="ket d-flex justify-content-between align-items-center px-3 pb-3">
                      <p className="m-0 text-primary fw-bold">{kelas.price}</p>
                      <button className="btn btn-danger rouned-1">
                        {kelas.buy}
                      </button>
                    </div>
                  </div>
                </Col>
              );
            })}
          </Row>
          <Row className="pt-5">
            <Col
              className="text-center"
              data-aos="fade-up"
              data-aos-duration="1500"
            >
              <button
                className="btn btn-success rounded-5 btn-lg"
                onClick={() => navigate("/kelas")}
              >
                Lihat Semua Kelas
                <i className="fa-solid fa-chevron-right ms-1"></i>
              </button>
            </Col>
          </Row>
        </Container>
      </div>
      {/* Kelas */}

      {/* Testimonial */}
      <div className="testimonial py-5">
        <Container>
          <Row>
            <Col>
              <h1 className="text-center fw-bold my-5">Testimonial</h1>
            </Col>
          </Row>
          <Row>
            <Swiper
              slidesPerView={1}
              spaceBetween={10}
              pagination={{
                clickable: true,
              }}
              breakpoints={{
                640: {
                  slidesPerView: 1,
                  spaceBetween: 20,
                },
                768: {
                  slidesPerView: 2,
                  spaceBetween: 40,
                },
                992: {
                  slidesPerView: 2,
                  spaceBetween: 50,
                },
                1200: {
                  slidesPerView: 3,
                  spaceBetween: 50,
                },
              }}
              modules={[Pagination]}
              className="mySwiper"
            >
              {dataSwiper.map((data) => {
                return (
                  <SwiperSlide key={data.id} className="shadow-sm rounded-3">
                    <p className="desc text-start">{data.desc}</p>
                    <div className="people justify-content-center">
                      <img src={data.image} />
                      <div>
                        <h5 className="mb-2 fw-semibold">{data.name}</h5>
                        <p className="fw-bold">{data.skill}</p>
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </Row>
        </Container>
      </div>
      {/* Testimonial */}

      {/* FAQ */}
      <FaqComponent />
      {/* FAQ */}
    </div>
  );
};

export default HomePage;
