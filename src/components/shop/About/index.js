import { Container, Row, Col } from "reactstrap";
import OurMembers from "./member";

import 'bootstrap/dist/css/bootstrap.css';
import Layout from "../layout";
import React, { Fragment} from "react";
import CommonSection from "./commonsection";

const AboutComponent = () => {
    return (
        <Fragment>
              <CommonSection title="About Us" />
              <Container>
        <Row>
        <Col lg="6" md="6">
            <div className="about__img  mt-5">
              <img src='asset/gg.jpeg' alt="" className="w-100" />
            </div>
          </Col>
          <Col lg="6" md="6">
            <div className="about__section-content mt-5">
             
              <h2 className="section__title">ABOUT US</h2><br></br>
              <h4 className="section__subtitle">"With you, throughout Has HASTAKALA journey"</h4><br></br>
              <p className="section__description">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Voluptatum blanditiis esse accusantium dignissimos labore
                laborum. Veniam, corporis mollitia temporibus, in quaerat vero
                deleniti amet dolorem repudiandae, pariatur nam dolore! Impedit
                neque sit ad temporibus quam similique dolor ipsam praesentium
                sunt.
              </p>

              <div className="about__section-item d-flex align-items-center ">
                <p className="section__description d-flex align-items-center gap-2">
                  <i class="ri-checkbox-circle-line text-danger"></i> Lorem ipsum dolor sit
                  amet.
                </p>

                <p className="section__description d-flex align-items-center gap-2">
                  <i class="ri-checkbox-circle-line text-danger"></i> Lorem ipsum dolor sit
                  amet.
                </p>
              </div>

              <div className="about__section-item d-flex align-items-center">
                <p className="section__description d-flex align-items-center gap-2">
                  <i class="ri-checkbox-circle-line text-danger"></i> Lorem ipsum dolor sit
                  amet.
                </p>

                <p className="section__description d-flex align-items-center gap-2">
                  <i class="ri-checkbox-circle-line text-danger"></i> Lorem ipsum dolor sit
                  amet.
                </p>
              </div>
            </div>
          </Col>

          
        </Row>
      </Container>
      <br></br>
      <section className="about__page-section mt-5">
        <Container>
          <Row>
            

            <Col lg="6" md="6" sm="12">
              <div className="about__page-content">
                <h2 className="section__title">
                  Smart You, Smart Shopping !!
                </h2>

                <p className="section__description mt-5">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Eveniet veniam assumenda aperiam accusantium ex autem
                  perferendis repellendus nostrum delectus. Nemo et dolore est
                  tempore rem minima adipisci magni dolorum ipsam.
                </p>

                <p className="section__description">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Eveniet veniam assumenda aperiam accusantium ex autem
                  perferendis repellendus nostrum delectus. Nemo et dolore est
                  tempore rem minima adipisci magni dolorum ipsam.
                </p>

                <div className=" d-flex align-items-center gap-3 mt-4">
                  <span className="fs-4">
                    <i class="ri-phone-line"></i>
                  </span>

                  <div>
                    <h6 className="section__subtitle">Need Any Help?</h6>
                    <h4>+ 977 9818696705</h4>
                  </div>
                </div>
              </div>
            </Col>

            <Col lg="6" md="6" sm="12">
              <div className="about__page-img ">
                <img src="asset/about.gif" alt="" className="w-110 rounded-3" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <br></br>
      <br></br>
      <section>
        <Container>
          <Row>
            <Col lg="12" className="mb-5 text-center">
              <h6 className="section__subtitle">Experts</h6>
              <h2 className="section__title">Our Members</h2>
            </Col>
            <OurMembers />
          </Row>
        </Container>
      </section>
      <br></br>
      <br></br>

        </Fragment>
  
      
        

        
       
        
      
    );
  };


const About = () => {
  return (
    <Fragment>
      
        <Layout children={<AboutComponent />} />
     
    </Fragment>
  );
};

export default About;

