import React, { Fragment } from "react";
import 'bootstrap/dist/css/bootstrap.css';


import { Container, Row, Col} from "reactstrap";
import "./style.css";
import moment from "moment";

const Footer = (props) => {
  return (
    <Fragment>
      
      <footer className="footer">
      <Container>
        <Row>
          <Col lg="4" md="4" sm="12">
            <div className="logo footer__logo">
              <h1>
               
                
                  <span>
                    HASTAKALA SHOP
                  </span>
                
              </h1>
            </div>
            <p className="footer__logo-content">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consequuntur, distinctio, itaque reiciendis ab cupiditate harum ex
              quam veniam, omnis expedita animi quibusdam obcaecati mollitia?
              Delectus et ad illo recusandae temporibus?
            </p>
          </Col>

          <Col lg="2" md="4" sm="6">
            <div className="mb-4">
              <h5 className="footer__link-title mb-4">Quick Links</h5>
              <p className="office__info">About</p>
              <p className="office__info">Privacy Policy</p>

              <p className="office__info">Contact</p>

              <p className="office__info">Blog</p>
            </div>
          </Col>

          <Col lg="3" md="4" sm="6">
            <div className="mb-4">
              <h5 className="footer__link-title mb-4">Visit Us</h5>
              <p className="office__info">Jawalakhel, lalitpur, Nepal</p>
              <p className="office__info">Phone: 9818696705</p>

              <p className="office__info">Email: hastakalshop12@gmail.com</p>

              <p className="office__info">Open Time: 10am - 7pm</p>
            </div>
          </Col>

          <Col lg="3" md="4" sm="12">
            <div className="mb-4 san">
              <h5 className="footer__link-title">Newsletter</h5>
              <p className="section__description">Subscribe our newsletter</p>
              <div className="newsletter">
                <input type="email" placeholder="Email" />
                <span>
                  <i class="ri-send-plane-line"></i>
                </span>
              </div>
            </div>
          </Col>
          <br></br>

          <Col lg="12">
            <div className="footer__bottom">
              <p className="section__description d-flex align-items-center justify-content-center gap-1 pt-4">
                <i class="ri-copyright-line"></i>Copyright 2022, Developed by
                Sanju Maharjan. All rights reserved.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
    </Fragment>
  );
};

export default Footer;
