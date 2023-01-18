
import SingleProduct from "./SingleProduct";
import "./style.css";

import 'bootstrap/dist/css/bootstrap.css';
import Layout from "../layout";
import React, { Fragment} from "react";
import CommonSection from "../About/commonsection";



const ProductComponent = () => {
    return (
        <Fragment>
              <CommonSection title="Product" />
              <br></br>
              <section className="m-5 md:mx-10 md:my-8 grid grid-cols-3 md:grid-cols-3 lg:grid-cols-3">
        <SingleProduct />
      </section>
              
        </Fragment>
  
      
        

        
       
        
      
    );
  };


const Prod = () => {
  return (
    <Fragment>
      
        <Layout children={<ProductComponent />} />
     
    </Fragment>
  );
};

export default Prod;

