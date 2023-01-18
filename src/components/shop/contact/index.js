
import { Container, Row, Col, Form, FormGroup, Input } from "reactstrap";
import "./style.css";
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import Layout from "../layout";
import React, { Fragment} from "react";
import CommonSection from "../About/commonsection";

const socialLinks = [
    {
      url: "#",
      icon: "ri-facebook-line",
    },
    {
      url: "#",
      icon: "ri-instagram-line",
    },
    {
      url: "#",
      icon: "ri-linkedin-line",
    },
    {
      url: "#",
      icon: "ri-twitter-line",
    },
  ];
  

const ContactComponent = () => {
    return (
        <Fragment>
              <CommonSection title="Contact Us" />
              <br></br>
              <section>
        <Container>
          <Row>
            <Col lg="7" md="7">
              <h1 className="fw-bold mb-4">Get In Touch</h1>

              <Form>
                <FormGroup className="contact__form mt-5">
                  <Input placeholder="Your Name" type="text" />
                </FormGroup>
                <FormGroup className="contact__form">
                  <Input placeholder="Email" type="email" />
                </FormGroup>
                <FormGroup className="contact__form">
                  <textarea
                    rows="5"
                
                    placeholder="Message"
                    className="textarea"
                  ></textarea>
                </FormGroup>

                <button className=" contact__btn" type="submit">
                  Send Message
                </button>
              </Form>
            </Col>

            <Col lg="5" md="5">
              <div className="contact__info">
                <h1 className="fw-bold">Contact Information</h1>
                <p className="section__description mb-0 mt-5">
                 Jawalakhel,lalitpur,Nepal
                </p>
                <div className=" d-flex align-items-center gap-2">
                  <h6 className="fs-6 mb-0">Phone:</h6>
                  <p className="section__description mb-0">+977 9818696705</p>
                </div>

                <div className=" d-flex align-items-center gap-2">
                  <h6 className="mb-0 fs-6">Email:</h6>
                  <p className="section__description mb-0">hastakalashop12@gmail.com</p>
                </div>

                <h6 className="fw-bold mt-4">Follow Us</h6>

                <div className=" d-flex align-items-center gap-4 mt-3">
                  {socialLinks.map((item, index) => (
                    <Link
                      to={item.url}
                      key={index}
                      className="social__link-icon"
                    >
                      <i class={item.icon}></i>
                    </Link>
                  ))}
                </div>
              </div>
            </Col>
          </Row>
        </Container>
       

       
      </section>
    

      <br></br>
      <br></br>
             

        </Fragment>
  
      
        

        
       
        
      
    );
  };


const Contact = () => {
  return (
    <Fragment>
      
        <Layout children={<ContactComponent />} />
     
    </Fragment>
  );
};

export default Contact;

