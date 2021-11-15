import React, { Fragment, useEffect, useState } from "react";
import { Carousel } from "react-bootstrap"
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../actions/productActions";
import Product from "./product/Product";
import { useAlert } from "react-alert";
import "rc-slider/assets/index.css";
import MetaData from './layouts/MetaData'


const Home = ({ match }) => {
  const [currentPage] = useState(1);
  const [price] = useState([1, 1000]);
  const [category] = useState('');
  const [rating] = useState(0);

  const alert = useAlert();
  const dispatch = useDispatch();

  const { products, error } = useSelector((state) => state.products);

  const keyword = match.params.keyword;

  useEffect(() => {
    if (error) {
      return alert.error(error);
    }
    dispatch(getProducts(keyword, currentPage, price, category, rating));
  }, [dispatch, alert, error, keyword, currentPage, price, category, rating]);
  


  
  return (
    
    <Fragment>
 
    <MetaData title={"christbaum-timmer.at"} />
  
      <a href=" #" className="scrollToTop">
        <i className="icofont-rounded-up"></i>
      </a>

      <div className="bg-theme position-relative">
      <div
          className="shape-top-left  d-xxl-block wow fadeInDown"
          data-wow-delay="0.4s"
        >
          <img src="/images/shape/01.png" alt="" />
        </div>
        <div
          className="shape-bottom-right d-none d-xxl-block wow fadeInUp"
          data-wow-delay="0.4s"
        >
          <img src="/images/shape/02.png" alt="" />
        </div>
        <div className="shape-bottom wow fadeInUp" data-wow-delay="0.4s">
          <img src="/images/shape/03.png" alt="" />
        </div>
        <div className="container">
          <div className="row align-items-center position-relative z-index-1">
            <div
              className="col-lg-6 col-12 wow fadeInLeft"
              data-wow-delay="0.4s"
            >
              <div className="banner-content">
              <span className="banner-sub-title text-white">
                  Christbaum-Timmer wünscht
                </span>
                <h2 className="banner-title">Frohe Weihnachten!</h2>
                <p className="banner-desc text-white">
                  Die Nordmann-Tanne (Abies nordmanniana), standardsprachlich
                  Nordmanntanne, auch Nordmanns Tanne und Kaukasus-Tanne
                  genannt, ist eine Pflanzenart aus der Gattung Tannen (Abies)
                  in der Familie der Kieferngewächse (Pinaceae). Die
                  Nordmanntanne ist heute die meistgenutzte Baumart als
                  Weihnachtsbaum.
                </p>
                <div className="banner-button-group d-inline-flex">
                  <a href="#pricing" className="lab-btn mb-5">
                    <span>Jetzt einkaufen!</span>
                  </a>
                </div>
              </div>
            </div>
            <div
              className="col-lg-6 col-12 mt-5 mt-lg-0 wow fadeInRight"
              data-wow-delay="0.4s"
            >
              <div className="banner-thumb">
                <img src="/images/banner/01.png" alt="ChampEvent" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Product Section REACT */}

      {/* <!-- ==========Pricing Section Starts Here========== --> */}
      <div
        className="pricing-section pt-5 position-relative"
        id="pricing"
      >
        <div className="container">
          <div
            className="section-header text-center wow fadeInUp"
            data-wow-delay="0.4s"
          >
            <span className="section-subtitle theme-color">
              bis zum 20. Dezember bequem online bestellen und rechtzeitig vor dem Fest geliefert bekommen
            </span>
            
          </div>
          <div className="section-wrapper">
            {/* <!-- Nordmanntanne hier --> */}
            <div className="col-12">
              <div className="section-wrapper text-center">
                <div style={{marginBottom: "2rem"}}>
                  <img src="/images/pricing/tree.jpg" alt="christmas tree" />
                </div>
              </div>
            </div>
            <div
            className="section-header text-center wow fadeInUp"
            data-wow-delay="0.4s"
          >

            <span className="section-subtitle theme-color">
              wählen Sie einfach die gewünschte Größe
            </span>
            </div>

            <div className="row justify-content-center justify-content-center g-4">
              {products &&
                products.map((product) => (
                  <Product key={product._id} product={product} col={3} />
                ))}
            </div>
          </div>
        </div>
      </div>

      {/* <!-- ==========About Section Starts Here========== --> */}
      <div
        className="about-section padding-top position-relative"
        id="about"
      >
        {/* <div className="shape-bottom-right d-none d-xxl-block wow fadeInUp" data-wow-delay="0.8s">
			
            <img src="/images/shape/02.png" alt="ChampEvent"/>
		</div> */}
{/* 
        <div
          className="shape-bottom-right d-xxl-block wow fadeInUp"
          data-wow-delay="0.8s"
        >

          <img src="/images/shape/05.png" alt="ChampEvent" />
        </div> */}
        <div className="container">
          <div className="row align-items-center justify-content-center position-relative z-index-1">
            <div
              className="col-lg-6 col-12 wow fadeInLeft"
              data-wow-delay="0.4s"
            >
              <div className="about-thumb ml-xxl-450">
              <Carousel variant="dark">
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="/images/Timm_1.jpg?text=First slide&bg=f5f5f5"
      alt="First slide"
    />
    
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="/images/Timm_3.jpg?text=Second slide&bg=eee"
      alt="Second slide"
    />
   
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="/images/Timm_2.jpg?text=Third slide&bg=e5e5e5"
      alt="Third slide"
    />
   
  </Carousel.Item>
</Carousel>

                {/* <img
                  src="/images/about/01.jpg"
                  alt="ChampEvent"
                  className="w-xxl-none"
                /> */}
              </div>
            </div>
            <div className="col-lg-6 col-12 wow fadeInUp" data-wow-delay="0.4s">
              <div className="about-content">
                <span className="about-subtitle theme-color">Über uns</span>
                <h2 className="about-title">Timmer's Nordmann-Tannen</h2>
                <p className="about-desc">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Nostrum harum alias vero, quos error quia ea eum tempora ex
                  similique reiciendis, dolore temporibus, suscipit maxime
                  asperiores rerum molestiae! Voluptatum, quod.
                </p>
                <p className="about-desc">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
                  ut natus voluptatem vero architecto quas rerum ad sit expedita
                  est repellat provident maxime distinctio aliquid totam
                  molestiae eum, quae doloribus.
                </p>
                <ul className="about-list">
                  <li>
                    <i className="icofont-checked"></i> We providing different.
                  </li>
                  <li>
                    <i className="icofont-checked"></i> We are one of leading.
                  </li>
                  <li>
                    <i className="icofont-checked"></i> Learn how to grow you.
                  </li>
                  <li>
                    <i className="icofont-checked"></i> We providing different.
                  </li>
                  <li>
                    <i className="icofont-checked"></i> Learn how to grow you.
                  </li>
                  <li>
                    <i className="icofont-checked"></i> We are one of leading.
                  </li>
                </ul>
                <a href="#pricing" className="lab-btn">
                  <span>Unsere Tannen</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- ==========About Section Ends Here========== --> */}

      {/* <!-- ==========Newsletter Section Starts Here========== --> */}
      <footer className="footer-section position-relative bg-theme">
        <div className="shape-top wow fadeInDown" data-wow-delay="0.4s">
          <img src="/images/shape/09.png" alt="ChampEvent" />
        </div>
        <div className="shape-bottom wow fadeInUp" data-wow-delay="0.8s">
          <img src="/images/shape/08.png" alt="ChampEvent" />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="section-wrapper text-center">
                <div className="footer-logo wow fadeInUp" data-wow-delay="0.4s">
                  <img src="/images/logo/Wiesenseppl.png" alt="ChampEvent" />
                </div>
                <br/>
                <img src="/images/qr_christbaum-timmer.png" alt="ChampEvent" />
                <br />
                <br/>
                <div>
                  <p className="mb-0 text-white">
                    Firmenname - Impressum & Datenschutz - Cookiehinweis
                  </p>
                  <p className="mb-0 text-white">Kontaktadresse</p>
                </div>
                <Link to="/login">Admin</Link>

                
                
                </div>
              </div>
            </div>
          </div>
        
      </footer>
      {/* <!-- ==========Newsletter Section Ends Here========== --> */}
    </Fragment>
  );
};

export default Home;
