import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import { dataportfolio, meta } from "../../content_option";
import { motion, Reorder } from "framer-motion";
export const Portfolio = () => {
  const spring = {
    type: "spring",
    damping: 10,
    stiffness: 100
  }
  return (
    <HelmetProvider>
      <Container className="About-header">
        <Helmet>
          <meta charSet="utf-8" />
          <title> Projects | {meta.title} </title>{" "}
          <meta name="description" content={meta.description} />
        </Helmet>
        <Row className="mb-5 mt-3 pt-md-3">
          <Col lg="8">
            <h1 className="display-4 mb-4"> Projects </h1>{" "}
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>
    
        <div className="mb-5 po_items_ho">
          {dataportfolio.map((data, i) => {
    
           return (
      
        <motion.div
  whileHover={{ scale: 1.2 }}
  whileTap={{ scale: 1.1 }}
  drag
  dragConstraints={{
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  }}
  dragElastic
  transition={spring} animate={{ scale: 0.8 }}
  // dragConstraints={{ left: -100, right: 100 }}
  >
              <div key={i} className="po_item">
                <img src={data.img} alt="" />
                <div className="content">
                  <p>{data.description}</p>
                  <a href={data.link}>view project</a>
                </div>
              </div>
</motion.div>
            );
          })}

        </div>
        
      </Container>
    </HelmetProvider>
  );
};
