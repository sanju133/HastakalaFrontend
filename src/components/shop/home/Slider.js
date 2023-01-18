import React, { Fragment, useEffect, useContext, useState } from "react";
import { Container, Row, Col } from "reactstrap";
// import Slider from "react-slick";
import OrderSuccessMessage from "./OrderSuccessMessage";
import 'bootstrap/dist/css/bootstrap.css';
import { HomeContext } from "./";
import { sliderImages } from "../../admin/dashboardAdmin/Action";
import ServicesList from "./service";
import { prevSlide, nextSlide } from "./Mixins";
import "./style.css";


const apiURL = process.env.REACT_APP_API_URL;

const Slider = (props) => {

  const { data, dispatch } = useContext(HomeContext);
  const [slide, setSlide] = useState(0);
  

  useEffect(() => {
    sliderImages(dispatch);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  

  return (
    
    <Fragment>
      <div className="relative mt-16 bg-gray-100 border-2">
        {data.sliderImages.length > 0 ? (
          <img
            className="w-full"
            src={`${apiURL}/uploads/customize/${data.sliderImages[slide].slideImage}`}
            alt="sliderImage"
          />
        ) : (
          ""
        )}

        {data?.sliderImages?.length > 0 ? (
          <>
            <svg
              onClick={(e) =>
                prevSlide(data.sliderImages.length, slide, setSlide)
              }
              className={`z-10 absolute top-0 left-0 mt-64 flex justify-end items-center box-border flex justify-center w-12 h-12 text-gray-700  cursor-pointer hover:text-yellow-700`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
            <svg
              onClick={(e) =>
                nextSlide(data.sliderImages.length, slide, setSlide)
              }
              className={`z-10 absolute top-0 right-0 mt-64 flex justify-start items-center box-border flex justify-center w-12 h-12 text-gray-700 cursor-pointer hover:text-yellow-700`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
            {/* <div className="absolute inset-0 flex items-center justify-center">
              <a
                href="#shop"
                style={{ background: "#303031" }}
                className="cursor-pointer box-border text-2xl text-white px-4 py-2 rounded"
              >
                Shop Now
              </a>
            </div> */}
          </>
        ) : null}
      </div>
      <br></br>
      <section
      className="about__section mt-5"
      
    >
      <Container>
        <Row>
          <Col lg="6" md="6">
            <div className="about__section-content">
             
              <h2 className="section__title">ABOUT US</h2><br></br>
              <h4 className="section__subtitle">"With you, throughout HASTAKALA journey"</h4><br></br>
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

          <Col lg="6" md="6">
            <div className="about__img">
              <img src='asset/gg.jpeg' alt="" className="w-100" />
            </div>
          </Col>
        </Row>
      </Container>
      
    </section>
    <br></br>
    <Container>
          <Row>
            <Col lg="12" className="mt-5 mb-5 text-center">
              <h6 className="section__subtitle">See our</h6>
              <h2 className="section__title">Popular Services</h2>
            </Col>

            <ServicesList />
          </Row>
        </Container>
        <br></br>
    
    <section className="become__driver mt-5">
      <Container>
        <Row>
          <Col lg="6" md="6" sm="12" className="become__driver-img">
            <img src='asset/join2.png' alt="" className="join" />
          </Col>

          <Col lg="6" md="6" sm="12">
            <h2 className="section__title become__driver-title">
              Welcome to the world of HASTAKALA!! 
            </h2>
            <p className="shopnow">HASTAKALA shopping brings to you one of the most popular and genuine product around the world
              with the lowest price gurantee.You can expect the best and cheap quality product.
            </p>

            <button className="btn become__driver-btn mt-4">
              Shop Now
            </button>
          </Col>
        </Row>
      </Container>
      <br></br>

    </section>
    <br></br>
    
      

    



      
      <OrderSuccessMessage />
      
    </Fragment>
    
  );
};

export default Slider;
