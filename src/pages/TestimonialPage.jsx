import { Container, Row, Col } from "react-bootstrap";
import { testimonial } from "../data";
import FaqComponent from "../components/FaqComponent";

const TestimonialPage = () => {
  return (
    <div className="testimonial min-vh-100">
      <Container>
        <Row style={{ padding: "140px 0 100px 0" }}>
          <Col className="text-center">
            <h1 className="title fw-bold animate__animated animate__fadeInUp animate__delay-1s">
              Semua Testimonial
            </h1>
            <p className="anjay animate__animated animate__fadeInUp animate__delay-1s">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
          </Col>
        </Row>
        <Row>
          {testimonial.map((data) => {
            return (
              <Col lg={4} md={6} key={data.id} className="mb-5">
                <p
                  className="desc text-start p-3 rounded-3 shadow-sm fw-medium"
                  style={{
                    backgroundColor: "#FFF",
                    lineHeight: 2,
                  }}
                >
                  {data.desc}
                </p>
                <div className="people d-flex align-items-center py-3">
                  <img
                    src={data.image}
                    style={{ width: "80px" }}
                    className="rounded-circle me-3"
                  />
                  <div>
                    <h5 className="mb-2 fw-semibold">{data.name}</h5>
                    <p className="fw-bold mb-0 opacity-50">{data.skill}</p>
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

export default TestimonialPage;
