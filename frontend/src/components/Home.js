import React, { Fragment, useEffect, useState } from "react";
import { Carousel, Button } from "react-bootstrap";
// import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../actions/productActions";
import Product from "./product/Product";
import { useAlert } from "react-alert";
import "rc-slider/assets/index.css";
import MetaData from "./layouts/MetaData";
import Agb from "./Agb";

import SalesPlaces from "../salesPlaces.json";
import SalesPlaceCard from "./SalesPlaceCard";

const Home = ({ match }) => {
  const [currentPage] = useState(1);
  const [price] = useState([1, 1000]);
  const [category] = useState("");
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

      <div className="bg-theme position-relative">
        <div className="shape-bottom wow fadeInUp top-img-container">
          <img src="/images/shape/03.png" alt="" className="top-img" />
        </div>
        <div className="container" style={{ paddingBottom: "100px" }}>
          <div className="row align-items-center position-relative z-index-1">
            <div className="col-lg-4 col-12">
              <img className="timmerlogo" src="/images/3.png" alt="Main Logo" />
            </div>
            <div className="col-lg-6 col-12" data-wow-delay="0.4s">
              <div className="banner-content">
                <span className="banner-sub-title text-white">
                  Herzlich Willkommen bei
                </span>
                <h2 style={{color: "#9DD692"}}>Christbaumhandel <br/> Timmer</h2>
                <p className="banner-sub-title text-white">
                Wir haben die perfekte Nordmanntanne für Ihr Weihnachtsfest!
                </p>
                <p className="banner-desc text-white mb-5">
                Wir freuen uns auf Ihren Besuch an einem unserer vielen Verkaufsstände in
                Graz und Umgebung. Bis einschließlich 20. Dezember können Sie Ihren
                Christbaum jetzt auch online bestellen. 
                </p>
                {/* <div className="banner-button-group d-inline-flex"> */}
                <div className="mb-5">
                  <a href="#pricing" className="lab-btn mr-2 main-btn">
                    <span>Online kaufen</span>
                  </a>
                  <a href="#stand" className="lab-btn main-btn">
                    <span>Unsere Verkaufsstände</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="pricing-section pt-5 position-relative" id="pricing">
        <div className="container">
          <div
            className="section-header text-center wow fadeInUp"
            data-wow-delay="0.4s"
          >
            <h2 className="banner-title timmerrot">
            Auch im Lockdown: Der Ab-Hof-Verkauf startet am 08. Dezember!
            </h2>
            <p>
              Wie jedes Jahr eröffnen wir unseren Christbaumverkauf am 08.
              Dezember bei uns am Hof in Schirning.
              <br />
              Spazieren Sie gemütlich durch die große Ausstellung und suchen Sie
              sich Ihren schönen Weihnachtsbaum aus.
              <br />
              Nehmen Sie den Baum gleich mit oder nutzen Sie die Möglichkeit,
              ihn kurz vor Weihnachten liefern zu lassen.
              <br />
              Ab 10. Dezember startet der Verkauf wie gewohnt an allen <a href="#stand" style={{ color: "red" }}>unseren
              Verkaufsständen</a>.
            </p>
            {/* <a href="#stand" className="lab-btn main-btn">
              <span>Unsere Verkaufsstände</span>
            </a> */}
          </div>
          <div className="section-wrapper">
            <div className="justify-content-center justify-content-center g-4 mb-5 ">
              {products &&
                products.map((product) => (
                  <Product key={product._id} product={product} col={3} />
                ))}
            </div>
          </div>
        </div>
      </div>
      <div
        className="about-section pt-5 position-relative timmerweiss"
        id="about"
      >
        <div className="container">
          <div className="row align-items-center justify-content-center position-relative z-index-1">
            <div
              className="col-lg-12 col-12"
            >
              <div className="mb-4">
                <Carousel fade={true} indicators={false}>
                  <Carousel.Item>
                    <img
                      className="d-block w-100"
                      src="/images/Timmer_Slider-01.jpg"
                    />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      className="d-block w-100"
                      src="/images/Timmer_Slider-02.jpg"
                    />
                  </Carousel.Item>
                  <Carousel.Item>
                     <img
                        className="d-block w-100"
                        src="/images/Timmer_Slider-03.jpg"
                      />
                  </Carousel.Item>
                  <Carousel.Item>
                     <img
                        className="d-block w-100"
                        src="/images/Timmer_Slider-04.jpg"
                      />
                  </Carousel.Item>
                  <Carousel.Item>
                     <img
                        className="d-block w-100"
                        src="/images/Timmer_Slider-05.jpg"
                      />
                  </Carousel.Item>
                  <Carousel.Item>
                     <img
                        className="d-block w-100"
                        src="/images/Timmer_Slider-06.jpg"
                      />
                  </Carousel.Item>
                  <Carousel.Item>
                     <img
                        className="d-block w-100"
                        src="/images/Timmer_Slider-07.jpg"
                      />
                  </Carousel.Item>
                  <Carousel.Item>
                     <img
                        className="d-block w-100"
                        src="/images/Timmer_Slider-08.jpg"
                      />
                  </Carousel.Item>
                  <Carousel.Item>
                     <img
                        className="d-block w-100"
                        src="/images/Timmer_Slider-09.jpg"
                      />
                  </Carousel.Item>
                </Carousel>
              </div>
            </div>
            <div className="col-lg-12 ml-4 col-12">
              <div className="about-content">
                  <h2 className="about-title mt-4">
                  <span style={{ color: "#E1D13C" }}>
                    Über Timmer's Nordmann-Tannen
                  </span>
                </h2>
                <p className="about-desc">
                 Waltraud und Willibald Timmer führen Ihr Unternehmen seit nunmehr 30 Jahren in zweiter Generation.
                 Die Premium-Qualität ihrer Nordmanntannen, persönliche Beratung und der bewährte Rundum-Service haben
                 dem Familienbetrieb <span style={{ color: "#9DD692" }}>Christbaumhandel Timmer </span>Jahr für Jahr einen stetig wachsenden Kundenstamm beschert.
                </p>

                <span className="about-subtitle">
                  <span style={{ color: "#9DD692" }}>
                  Frische-Tipps vom Christbaum-Profi
                  </span>
                </span>

                <ul>
                  <li className="mb-3">
                    Nordmanntannen sollten bis zu ihrem Aufputz kühl gelagert sein!
                  </li>
                  <li className="mb-3">
                    Je niedriger die Raumtemperatur, desto länger ist ihre Haltbarkeit.
                  </li>
                  <li className="mb-3">
                    Das Verpackungsnetz ist von unten nach oben abzuziehen!
                  </li>
                  <li className="mb-3">
                    Idealerweise steht der Baum in einem konischen Wasserbehälter.
                  </li>
                  <li className="mb-3">
                    Nordmanntannen haben einen Wasserbedarf von zwei bis drei Litern pro Tag: dieser Richtpegel sollte nicht unterschritten werden!
                  </li>
                  <li className="mb-3">
                    Stetes Wassersprühen hält des Nordmanns Tanne frisch und grün ...
                  </li>
                  {/* <img
                    className="qr"
                    src="/images/timmer_qr_final.png"
                    alt="QR code"
                  /> */}
                </ul>
                <a href="#pricing" className="lab-btn mb-5 main-btn">
                  <span>Online kaufen</span>
                </a>
              </div>
            </div>
          </div>

          <div
            id="stand"
            className="row align-items-center justify-content-center position-relative z-index-1"
          >
            {SalesPlaces.map((place) => (
              <SalesPlaceCard key={place.title} place={place} />
            ))}
          </div>
        </div>
      </div>

      <footer className="footer-section position-relative bg-theme">
        <div className="shape-top footer-img-container">
          <img
            src="/images/shape/09.png"
            alt="ChampEvent"
            className="footer-img"
          />
        </div>
        <div className="shape-bottom wow fadeInUp footer-img-container">
          <img
            src="/images/shape/08.png"
            alt="ChampEvent"
            className="footer-img"
          />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="section-wrapper text-center">
                <div
                  className="footer-logo wow fadeInUp footer-img-container"
                  data-wow-delay="0.4s"
                >
                  <img src="/images/logo/Wiesenseppl.png" alt="ChampEvent" />
                </div>
                
                <p className="mb-3 mt-3 text-white">Willibald Timmer <br/>Schirning 70, 8112 Gratwein Straßengel<br/>Mobil: 0664 512 93 23</p>
                
                <div>
                  <p className="mb-0 text-white">
                    <Agb />
                  </p>
                </div>
                <Button href="/login" className="mt-3 lab-btn main-btn">
                  Admin
                </Button>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </Fragment>
  );
};

export default Home;
