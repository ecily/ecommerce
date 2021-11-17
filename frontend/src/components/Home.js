import React, { Fragment, useEffect, useState } from "react";
import { Carousel, Modal, Button } from "react-bootstrap"
// import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../actions/productActions";
import Product from "./product/Product";
import { useAlert } from "react-alert";
import "rc-slider/assets/index.css";
import MetaData from './layouts/MetaData'




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

  function Example() {
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    return (
      <>
     
        <Button className="lab-btn"  onClick={handleShow}>
          AGB & Datenschutz
        </Button>
  
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>AGB & Datenschutz</Modal.Title>
          </Modal.Header>
          <Modal.Body>

                                      AGB
                            Diese Allgemeinen Geschäftsbedingungen beinhaltet eine Belehrung des Kunden über seine Rechte nach dem Fern- und Auswärtsgeschäfte-Gesetz (FAGG) dar.
                            
                            1. Geltungsbereich
                            1.1. Diese Allgemeinen Geschäftsbedingungen gelten für alle Geschäftsbeziehung zwischen Christbaumhandel Timmer . Inhaber: Willibald Timmer, (nachfolgend „Verkäufer“) und dem Kunden (nachfolgend „Kunde“). Abweichungen von diesen Geschäftsbedingungen sind nur gültig wenn sie durch schriftliche Erklärung des Verkäufers bestätigt werden. Geschäftsbedingungen des Kunden haben keine Gültigkeit, auch wenn der Verkäufer diesen nicht widersprochen hat. Die Allgemeinen Geschäftsbedingungen gelten in ihrer zum Zeitpunkt der Bestellung gültigen Fassung.
                            1.2. Verbraucher im Sinne dieser AGB ist jede natürliche Person, die ein Rechtsgeschäft zu einem Zwecke abschließt, der weder ihrer gewerblichen noch ihrer selbstständigen beruflichen Tätigkeit zugerechnet werden kann.
                            
                            2. Produkte
                            2.1. Die im Online-Shop dargestellten Produkte sind nicht als rechtlich bindendes Angebot zu verstehen, sondern stellen eine Aufforderung an den Kunden zur Angebotslegung (Bestellung) dar. Leistungsbeschreibungen auf der Website des Verkäufers beinhalten keine Zusicherung oder Garantie, sondern dienen ausschließlich der Kundeninformation.
                            2.2. Sämtliche Produkte sind nur „solange der Vorrat reicht“ verfügbar, wenn nicht bei den Produkten etwas anderes vermerkt ist. Der Verkäufer behält sich diesbezüglich Irrtümer vor.
                            
                            3. Vertragsabschluss
                            3.1. Die Auswahl der Produkte durch den Kunden auf der Website ist unverbindlich. Diese Auswahl wird im Warenkorb für den späteren verbindlichen Bestellvorgang gespeichert. In weiterer Folge kann der Kunde im Warenkorb seine vorläufige Bestellung bearbeiten.
                            3.2. Über die Schaltfläche “Kaufen” gibt der Kunde ein verbindliches Angebot zum Kauf der im Warenkorb befindlichen Waren ab. Vor Abschicken der Bestellung kann der Kunde die Daten jederzeit ändern und einsehen. Notwendige Angaben sind mit einem Sternchen (*) gekennzeichnet.
                            3.3. Der Kunde erhält nach der erfolgten verbindlichen Bestellung eine Empfangsbestätigung per E-Mail (Bestellbestätigung). Die automatische Empfangsbestätigung dokumentiert lediglich, dass die Bestellung des Kunden beim Verkäufer eingegangen ist und stellt keine Annahme des Angebots dar. Der Kaufvertrag kommt erst mit Versendung der Ware an den Kunden oder durch Zusendung einer ausdrücklichen Auftragsbestätigung oder durch Zusendung der Rechnung zustande.
                            
                            4. Zahlungsmodalitäten
                            Dem Kunden stehen sämtliche auf der Website angeführten Zahlungsarten zur Verfügung. Sämtliche Zahlungen sind vom Kunden im Voraus ohne Abzug an den Verkäufer zu tätigen. Sofern eine Zahlungsvorgang über einen Drittanbieter erfolgt, gelten zusätzlich deren Allgemeine Geschäftsbedingungen.
                            
                            5. Lieferung, Warenverfügbarkeit
                            Sofern ein ausgewähltes Produkt im Zeitpunkt der Bestellung nicht verfügbar ist, so teilt der Verkäufer dem Kunden dies mit gesondertem Schreiben mit. Ist das Produkt dauerhaft nicht lieferbar, wird das Angebot des Kunden nicht angenommen, diesfalls kommt kein Vertrag zustande. Ist das vom Kunden bestellte Produkt nur vorübergehend nicht verfügbar, teilt der Verkäufer dem Kunden dies ebenfalls unverzüglich mit und gibt einen möglichen Ersatzliefertermin bekannt. Sollte bei der Lieferung eine Verzögerung von mehr als zwei Wochen bestehen, hat der Kunde das Recht, vom Vertrag zurückzutreten. Diesfalls hat der Verkäufer ebenfalls das Recht vom Vertrag zurückzutreten.
                            
                            6. Preise und Versandkosten
                            Sämtliche Preisangaben, auf der Website des Verkäufers, verstehen sich einschließlich der jeweils gültigen gesetzlichen Umsatzsteuer. Die Zusendung der Ware an den Kunden erfolgt Versandkostenfrei für den Kunden.
                            
                            7. Eigentumsvorbehalt
                            Bis zur vollständigen Bezahlung verbleiben die gelieferten Waren im Eigentum des Verkäufers.
                            
                            8. Informationen zur Ausübung des Rücktrittsrechts
                            8.1. Das Rücktrittsrecht für Kunden nach dem Fern- und Auswärtsgeschäfte-Gesetz (FAGG) besteht nicht bei der Bestellung von Christbäumen. Gemäß § 18 Abs 1 Z4 FAGG sind Waren die schnell verderben können vom Rücktrittsrecht ausgenommen. Schnell verderbliche Waren sind insbesondere Blumen und Pflanzen.
                            8.2. Für Waren bei denen keine Ausnahme vom Rücktrittsrecht gemäß § 18 FAGG besteht gelten die gesetzlichen Bestimmungen. Der Kunde hat das Recht binnen vierzehn Tagen ab Zustandekommen des Vertrags ohne Angabe von Gründen vom Vertrag zurückzutreten. Um Ihr Rücktrittsrecht auszuüben, muss der Kunde dem Verkäufer mittels einer eindeutigen Erklärung (z. B. ein mit der Post versandter Brief oder E-Mail) über seinen Entschluss, von diesem Vertrag zurückzutreten, informieren. Zur Wahrung der Rücktrittsfrist reicht es aus, dass der Kunde die Mitteilung über die Ausübung des Rücktrittrechts vor Ablauf der Rücktrittsfrist absendet.
                            8.3. Wenn der Kunde von einem Vertrag ordnungsgemäß zurücktritt oder eine Rücktritt gemäß Punkt 5 dieser Allgemeinen Geschäftsbedingungen erfolgt, hat der Verkäufer Ihm alle Zahlungen, die der Verkäufer von Ihm erhalten hat, unverzüglich und spätestens binnen vierzehn Tagen ab dem Tag zurückzuzahlen, an dem die Mitteilung über den Rücktritt vom Vertrag beim Verkäufer eingegangen ist.
                            8.4. Der Kunde hat die Waren unverzüglich und in jedem Fall spätestens binnen vierzehn Tagen ab dem Tag, an dem er uns über den Rücktritt vom Vertrag unterrichten, an den Verkäufer zurückzusenden oder zu übergeben. Die Frist ist gewahrt, wenn der Kunde die Waren vor Ablauf der Frist von vierzehn Tagen absendet. Im Falle der Ausübung eines Rücktrittsrechts trägt der Kunde sämtliche Kosten der Rücksendung.
                            8.5. Der Kunde muss für einen etwaigen Wertverlust der Waren nur aufkommen, wenn dieser Wertverlust auf einen zur Prüfung der Beschaffenheit, Eigenschaften und Funktionsweise der Waren nicht notwendigen Umgang mit ihnen zurückzuführen ist.
                            
                            9. Haftung, Gewährleistung
                            Es gelten die gesetzlichen Gewehrleistungsbestimmungen. Es bestehen keinerlei Garantiezusagen seitens des Verkäufers. Die Haftung für leichte Fahrlässigkeit (ausgenommen Personenschäden) ist ausgeschlossen.
                            
                            10. Vertrag
                            Der Vertragstext der Bestellung wird vom Verkäufer gespeichert. Der Kunde kann den Vertragstext vor der Abgabe der Bestellung an den Verkäufer ausdrucken, indem er im letzten Schritt der Bestellung die Druckfunktion seines Browsers nutzt. Der Verkäufer sendet dem Kunden außerdem eine Bestellbestätigung mit allen Bestelldaten an die von Ihm angegebene E-Mail-Adresse zu. Die AGB sind jederzeit auf der Website des Verkäufers abrufbar.
                            
                            11. Datenschutz
                            Die vom Kunden zur Verfügung gestellten persönlichen Daten werden vom Verkäufer ausschließlich zweckgebunden und gemäß den gesetzlichen Bestimmungen verarbeitet. Die angegebenen persönlichen Daten (wie zum Beispiel Name, E-Mail-Adresse, Anschrift, Zahlungsdaten) verwendet der Verkäufer ausschließlich zur Erfüllung und Abwicklung des Vertrags. Eine Weitergabe an Dritte, die nicht am Bestell-, Auslieferungs- und Zahlungsvorgang beteiligt sind findet nicht statt. Der Kunde hat das Recht, auf Antrag Auskunft zu erhalten über die personenbezogenen Daten, die vom Verkäufer über ihn gespeichert wurden. Zusätzlich hat er das Recht auf Berichtigung unrichtiger Daten, Sperrung und Löschung seiner personenbezogenen Daten, soweit keine gesetzliche Aufbewahrungspflicht entgegensteht.
                            
                            12. Kontaktdaten für Wünsche, Anregungen und Berschwerden
                            Christbaumhandel Timmer .
                            Geschäftsführer: Willibald Timmer
                            Schirning 70
                            8112 Gratwein Straßengel
                            +43 664 5129323
                            Willibald.timmer@aon.at
                            
                            13. Erfüllungsort, Gerichtsstand, Anwendbares Recht
                            Als Gerichtstand wird das sachlich und örtlich Zuständige Gericht am Sitz des Verkäufers vereinbart. Erfüllungsort ist der Sitz des Verkäufers. Es gilt das Recht der Republik Österreich. Dies gilt nicht, wenn zwingende Verbraucherschutzvorschriften einer solchen Anwendung entgegenstehen.


          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            </Modal.Footer>
        </Modal>
      </>
    );
  }


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
                  <img className="pricing_pic" src="/images/pricing/tree.jpg" alt="christmas tree" />
                </div>
              </div>
            </div>
            <div
            className="section-header text-center wow fadeInUp"
            data-wow-delay="0.4s"
          >

            <span className="section-subtitle theme-color">
              wählen Sie Ihre gewünschte Größe
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
                  <img className="qr" src="/images/santa_qr.png" alt="QR code" />
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
                <p className="mb-3 mt-3 text-white">Kontaktadresse</p>
                <div>
                  <p className="mb-0 text-white">
                  <Example />
                  </p>
                
                </div>
                <Button href="/login" className="mt-3 lab-btn">
                {/* <Link to="/login">Admin</Link> */}
                Admin
                </Button >
                </div>                              
              </div>
            </div>
          </div>
      </footer>
    
    </Fragment>
  );
};

export default Home;
