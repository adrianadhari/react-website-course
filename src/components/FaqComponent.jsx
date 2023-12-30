import { Container, Row, Col, Accordion } from "react-bootstrap";
import { faq } from "../data";
const FaqComponent = () => {
  return (
    <div className="faq">
      <Container>
        <Row>
          <Col>
            <h1 className="text-center fw-bold animate__animated animate__fadeInUp animate__delay-1s">
              Pertanyaan yang sering ditanyakan
            </h1>
          </Col>
        </Row>
        <Row className="pt-5 g-4">
          {faq.map((data) => {
            return (
              <Col key={data.id} lg={6} md={12}>
                <Accordion className="shadow-sm">
                  <Accordion.Item eventKey={data.eventKey}>
                    <Accordion.Header>{data.title}</Accordion.Header>
                    <Accordion.Body>{data.desc}</Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </Col>
            );
          })}
        </Row>
      </Container>
    </div>
  );
};

export default FaqComponent;
