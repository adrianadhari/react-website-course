import { Container, Row, Col } from "react-bootstrap";
import { semuaKelas } from "../data";
import FaqComponent from "../components/FaqComponent";

const KelasPage = () => {
  return (
    <div className="kelas min-vh-100">
      <Container>
        <Row style={{ padding: "140px 0 130px 0" }}>
          <Col className="text-center">
            <h1 className="anjay fw-bold animate__animated animate__fadeInUp animate__delay-1s">
              Semua Kelas
            </h1>
            <p className="animate__animated animate__fadeInDown animate__delay-1s">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            </p>
          </Col>
        </Row>
        <Row>
          {semuaKelas.map((kelas) => {
            return (
              <Col
                md={6}
                lg={3}
                key={kelas.id}
                className="mb-4"
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay={kelas.delay}
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
      </Container>
      <FaqComponent />
    </div>
  );
};

export default KelasPage;
