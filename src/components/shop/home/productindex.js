import React, { Fragment, createContext, useReducer } from "react";
import Layout from "../layout";
import Slider from "./Slider";
import ProductCategory from "./ProductCategory";
import { homeState, homeReducer } from "./HomeContext";
import SingleProduct from "./SingleProduct";
import Testimonial from "./testimonals";

import { Container, Row, Col } from "reactstrap";

export const HomeContext = createContext();

const HomeComponent = () => {
  return (
    <Fragment>
      <Slider />
      
      {/* Category, Search & Filter Section */}
      <br></br>
      <section className="m-4 md:mx-8 md:my-6">
        <ProductCategory />
      </section>
      {/* Product Section */}
      <section className="m-5 md:mx-10 md:my-8 grid grid-cols-3 md:grid-cols-3 lg:grid-cols-3">
        <SingleProduct />
      </section>
      <section className="m-5">
      <Container>
          <Row>
            <Col className=" text-center">
             
            <div className="">
      <h1>TESTIMONIAL</h1><br></br>
      <p >"What our client says"</p>

    
      </div>
            </Col>

           
          </Row>
        </Container>
        <Testimonial />
      </section>
      <br></br>
    </Fragment>
    
  );
};

const Home = (props) => {
  const [data, dispatch] = useReducer(homeReducer, homeState);
  return (
    <Fragment>
      <HomeContext.Provider value={{ data, dispatch }}>
        <Layout children={<HomeComponent />} />
      </HomeContext.Provider>
    </Fragment>
  );
};

export default Home;
