import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const FooterComponent = () => {
  return (
    <div className="footer py-5">
      <Container>
        <Row className="d-flex justify-content-between">
          <Col lg={5}>
            <h3 className="fw-bold">zet.</h3>
            <p className="desc">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
              illum ipsa amet! Quas dolore neque ullam maiores minus ea totam!
            </p>
            <div className="nomor mb-1 mt-4">
              <Link className="text-decoration-none">
                <i className="fa-brands fa-whatsapp"></i>
                <p className="mb-0">+6288312392</p>
              </Link>
            </div>
            <div className="email">
              <Link className="text-decoration-none">
                <i className="fa-regular fa-envelope"></i>
                <p className="mb-0">anjay@gmail.com</p>
              </Link>
            </div>
          </Col>
          <Col
            lg={2}
            className="d-flex flex-column mt-lg-0 mt-5"
            style={{ gap: 10 }}
          >
            <h5 className="fw-bold">Menu</h5>
            <Link to="/">Home</Link>
            <Link to="kelas">Kelas</Link>
            <Link to="testimonial">Testimonial</Link>
            <Link to="faq">FAQ</Link>
            <Link to="syaratketen">Syarat dan Ketentuan</Link>
          </Col>
          <Col lg={4} className="mt-lg-0 mt-5">
            <h5 className="fw-bold mb-3">Subscribe untuk info menarik</h5>
            <div className="subscribes">
              <input type="text" placeholder="Subscribe..." />
              <button className="btn btn-danger rounded-end rounded-0">
                Subscribe
              </button>
            </div>
            <div className="social mt-3">
              <i className="fa-brands fa-facebook"></i>
              <i className="fa-brands fa-twitter"></i>
              <i className="fa-brands fa-linkedin"></i>
              <i className="fa-brands fa-youtube"></i>
            </div>
          </Col>
        </Row>
        <Row className="pt-5">
          <Col>
            <p className="fw-bold text-center px-3">
              &copy; zet. {new Date().getFullYear()} All Right Reserved
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default FooterComponent;
