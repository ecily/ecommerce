import React, { Fragment, useEffect, useState } from "react";
import { Carousel, Modal, Button, Card } from "react-bootstrap"
// import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../actions/productActions";
import Product from "./product/Product";
import { useAlert } from "react-alert";
import "rc-slider/assets/index.css";
import MetaData from "./layouts/MetaData";

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
        <Button className="lab-btn" onClick={handleShow}>
          AGB & Datenschutz
        </Button>

        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>AGB & Datenschutz</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            AGB Diese Allgemeinen Geschäftsbedingungen beinhaltet eine Belehrung
            des Kunden über seine Rechte nach dem Fern- und
            Auswärtsgeschäfte-Gesetz (FAGG) dar. 1. Geltungsbereich 1.1. Diese
            Allgemeinen Geschäftsbedingungen gelten für alle Geschäftsbeziehung
            zwischen Christbaumhandel Timmer . Inhaber: Willibald Timmer,
            (nachfolgend „Verkäufer“) und dem Kunden (nachfolgend „Kunde“).
            Abweichungen von diesen Geschäftsbedingungen sind nur gültig wenn
            sie durch schriftliche Erklärung des Verkäufers bestätigt werden.
            Geschäftsbedingungen des Kunden haben keine Gültigkeit, auch wenn
            der Verkäufer diesen nicht widersprochen hat. Die Allgemeinen
            Geschäftsbedingungen gelten in ihrer zum Zeitpunkt der Bestellung
            gültigen Fassung. 1.2. Verbraucher im Sinne dieser AGB ist jede
            natürliche Person, die ein Rechtsgeschäft zu einem Zwecke
            abschließt, der weder ihrer gewerblichen noch ihrer selbstständigen
            beruflichen Tätigkeit zugerechnet werden kann. 2. Produkte 2.1. Die
            im Online-Shop dargestellten Produkte sind nicht als rechtlich
            bindendes Angebot zu verstehen, sondern stellen eine Aufforderung an
            den Kunden zur Angebotslegung (Bestellung) dar.
            Leistungsbeschreibungen auf der Website des Verkäufers beinhalten
            keine Zusicherung oder Garantie, sondern dienen ausschließlich der
            Kundeninformation. 2.2. Sämtliche Produkte sind nur „solange der
            Vorrat reicht“ verfügbar, wenn nicht bei den Produkten etwas anderes
            vermerkt ist. Der Verkäufer behält sich diesbezüglich Irrtümer vor.
            3. Vertragsabschluss 3.1. Die Auswahl der Produkte durch den Kunden
            auf der Website ist unverbindlich. Diese Auswahl wird im Warenkorb
            für den späteren verbindlichen Bestellvorgang gespeichert. In
            weiterer Folge kann der Kunde im Warenkorb seine vorläufige
            Bestellung bearbeiten. 3.2. Über die Schaltfläche “Kaufen” gibt der
            Kunde ein verbindliches Angebot zum Kauf der im Warenkorb
            befindlichen Waren ab. Vor Abschicken der Bestellung kann der Kunde
            die Daten jederzeit ändern und einsehen. Notwendige Angaben sind mit
            einem Sternchen (*) gekennzeichnet. 3.3. Der Kunde erhält nach der
            erfolgten verbindlichen Bestellung eine Empfangsbestätigung per
            E-Mail (Bestellbestätigung). Die automatische Empfangsbestätigung
            dokumentiert lediglich, dass die Bestellung des Kunden beim
            Verkäufer eingegangen ist und stellt keine Annahme des Angebots dar.
            Der Kaufvertrag kommt erst mit Versendung der Ware an den Kunden
            oder durch Zusendung einer ausdrücklichen Auftragsbestätigung oder
            durch Zusendung der Rechnung zustande. 4. Zahlungsmodalitäten Dem
            Kunden stehen sämtliche auf der Website angeführten Zahlungsarten
            zur Verfügung. Sämtliche Zahlungen sind vom Kunden im Voraus ohne
            Abzug an den Verkäufer zu tätigen. Sofern eine Zahlungsvorgang über
            einen Drittanbieter erfolgt, gelten zusätzlich deren Allgemeine
            Geschäftsbedingungen. 5. Lieferung, Warenverfügbarkeit Sofern ein
            ausgewähltes Produkt im Zeitpunkt der Bestellung nicht verfügbar
            ist, so teilt der Verkäufer dem Kunden dies mit gesondertem
            Schreiben mit. Ist das Produkt dauerhaft nicht lieferbar, wird das
            Angebot des Kunden nicht angenommen, diesfalls kommt kein Vertrag
            zustande. Ist das vom Kunden bestellte Produkt nur vorübergehend
            nicht verfügbar, teilt der Verkäufer dem Kunden dies ebenfalls
            unverzüglich mit und gibt einen möglichen Ersatzliefertermin
            bekannt. Sollte bei der Lieferung eine Verzögerung von mehr als zwei
            Wochen bestehen, hat der Kunde das Recht, vom Vertrag
            zurückzutreten. Diesfalls hat der Verkäufer ebenfalls das Recht vom
            Vertrag zurückzutreten. 6. Preise und Versandkosten Sämtliche
            Preisangaben, auf der Website des Verkäufers, verstehen sich
            einschließlich der jeweils gültigen gesetzlichen Umsatzsteuer. Die
            Zusendung der Ware an den Kunden erfolgt Versandkostenfrei für den
            Kunden. 7. Eigentumsvorbehalt Bis zur vollständigen Bezahlung
            verbleiben die gelieferten Waren im Eigentum des Verkäufers. 8.
            Informationen zur Ausübung des Rücktrittsrechts 8.1. Das
            Rücktrittsrecht für Kunden nach dem Fern- und
            Auswärtsgeschäfte-Gesetz (FAGG) besteht nicht bei der Bestellung von
            Christbäumen. Gemäß § 18 Abs 1 Z4 FAGG sind Waren die schnell
            verderben können vom Rücktrittsrecht ausgenommen. Schnell
            verderbliche Waren sind insbesondere Blumen und Pflanzen. 8.2. Für
            Waren bei denen keine Ausnahme vom Rücktrittsrecht gemäß § 18 FAGG
            besteht gelten die gesetzlichen Bestimmungen. Der Kunde hat das
            Recht binnen vierzehn Tagen ab Zustandekommen des Vertrags ohne
            Angabe von Gründen vom Vertrag zurückzutreten. Um Ihr
            Rücktrittsrecht auszuüben, muss der Kunde dem Verkäufer mittels
            einer eindeutigen Erklärung (z. B. ein mit der Post versandter Brief
            oder E-Mail) über seinen Entschluss, von diesem Vertrag
            zurückzutreten, informieren. Zur Wahrung der Rücktrittsfrist reicht
            es aus, dass der Kunde die Mitteilung über die Ausübung des
            Rücktrittrechts vor Ablauf der Rücktrittsfrist absendet. 8.3. Wenn
            der Kunde von einem Vertrag ordnungsgemäß zurücktritt oder eine
            Rücktritt gemäß Punkt 5 dieser Allgemeinen Geschäftsbedingungen
            erfolgt, hat der Verkäufer Ihm alle Zahlungen, die der Verkäufer von
            Ihm erhalten hat, unverzüglich und spätestens binnen vierzehn Tagen
            ab dem Tag zurückzuzahlen, an dem die Mitteilung über den Rücktritt
            vom Vertrag beim Verkäufer eingegangen ist. 8.4. Der Kunde hat die
            Waren unverzüglich und in jedem Fall spätestens binnen vierzehn
            Tagen ab dem Tag, an dem er uns über den Rücktritt vom Vertrag
            unterrichten, an den Verkäufer zurückzusenden oder zu übergeben. Die
            Frist ist gewahrt, wenn der Kunde die Waren vor Ablauf der Frist von
            vierzehn Tagen absendet. Im Falle der Ausübung eines
            Rücktrittsrechts trägt der Kunde sämtliche Kosten der Rücksendung.
            8.5. Der Kunde muss für einen etwaigen Wertverlust der Waren nur
            aufkommen, wenn dieser Wertverlust auf einen zur Prüfung der
            Beschaffenheit, Eigenschaften und Funktionsweise der Waren nicht
            notwendigen Umgang mit ihnen zurückzuführen ist. 9. Haftung,
            Gewährleistung Es gelten die gesetzlichen
            Gewehrleistungsbestimmungen. Es bestehen keinerlei Garantiezusagen
            seitens des Verkäufers. Die Haftung für leichte Fahrlässigkeit
            (ausgenommen Personenschäden) ist ausgeschlossen. 10. Vertrag Der
            Vertragstext der Bestellung wird vom Verkäufer gespeichert. Der
            Kunde kann den Vertragstext vor der Abgabe der Bestellung an den
            Verkäufer ausdrucken, indem er im letzten Schritt der Bestellung die
            Druckfunktion seines Browsers nutzt. Der Verkäufer sendet dem Kunden
            außerdem eine Bestellbestätigung mit allen Bestelldaten an die von
            Ihm angegebene E-Mail-Adresse zu. Die AGB sind jederzeit auf der
            Website des Verkäufers abrufbar. 11. Datenschutz Die vom Kunden zur
            Verfügung gestellten persönlichen Daten werden vom Verkäufer
            ausschließlich zweckgebunden und gemäß den gesetzlichen Bestimmungen
            verarbeitet. Die angegebenen persönlichen Daten (wie zum Beispiel
            Name, E-Mail-Adresse, Anschrift, Zahlungsdaten) verwendet der
            Verkäufer ausschließlich zur Erfüllung und Abwicklung des Vertrags.
            Eine Weitergabe an Dritte, die nicht am Bestell-, Auslieferungs- und
            Zahlungsvorgang beteiligt sind findet nicht statt. Der Kunde hat das
            Recht, auf Antrag Auskunft zu erhalten über die personenbezogenen
            Daten, die vom Verkäufer über ihn gespeichert wurden. Zusätzlich hat
            er das Recht auf Berichtigung unrichtiger Daten, Sperrung und
            Löschung seiner personenbezogenen Daten, soweit keine gesetzliche
            Aufbewahrungspflicht entgegensteht. 12. Kontaktdaten für Wünsche,
            Anregungen und Berschwerden Christbaumhandel Timmer .
            Geschäftsführer: Willibald Timmer Schirning 70 8112 Gratwein
            Straßengel +43 664 5129323 Willibald.timmer@aon.at 13.
            Erfüllungsort, Gerichtsstand, Anwendbares Recht Als Gerichtstand
            wird das sachlich und örtlich Zuständige Gericht am Sitz des
            Verkäufers vereinbart. Erfüllungsort ist der Sitz des Verkäufers. Es
            gilt das Recht der Republik Österreich. Dies gilt nicht, wenn
            zwingende Verbraucherschutzvorschriften einer solchen Anwendung
            entgegenstehen.
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

      <div className="bg-theme position-relative">
        <div className="shape-bottom wow fadeInUp">
          <img src="/images/shape/03.png" alt="" />
        </div>
        <div className="container">
          <div className="row align-items-center position-relative z-index-1">
            <div className="col-lg-4 col-12">
              <img className="timmerlogo" src="/images/3.png" alt="Main Logo" />
            </div>
            <div className="col-lg-6 col-12" data-wow-delay="0.4s">
              <div className="banner-content">
                <span className="banner-sub-title text-white">
                  Herzlich Willkommen bei
                </span>
                <h2 className="banner-title">Christbaumhandel Timmer</h2>
                <p className="banner-sub-title text-white">
                  Bei uns finden Sie den perfekten Christbaum für Ihr Weihnachtsfest.
                </p>
                <p className="banner-desc text-white mb-5">
                Besuchen Sie uns auf einem unserer vielen Verkaufsständen in Graz und Umgebung. Stressfrei und kontaktlos können Sie ihren Christbaum ab diesem Jahr auch online bestellen.
                </p>
                {/* <div className="banner-button-group d-inline-flex"> */}
                <div className="mb-5">
                  <a href="#pricing" className="lab-btn mr-2">
                    <span>Online kaufen</span>
                  </a>
                  <a href="#stand" className="lab-btn">
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
              8. Dezember - Start Christbaumverkauf
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
              Ab 14. Dezember startet der Verkauf wie gewohnt an allen unseren
              Verkaufsständen.
            </p>
            <a href="#stand" className="lab-btn">
              <span>Unsere Verkaufsstände</span>
            </a>
          </div>
          <div className="section-wrapper">
            <div className="justify-content-center justify-content-center g-4 mb-5">
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
                <span className="about-subtitle">Über uns</span>
                <h2 className="about-title">
                  <span style={{ color: "#14cc3c" }}>
                    Timmer's Nordmann-Tannen
                  </span>
                </h2>
                <p className="about-desc">
                Seit 30 Jahren führen wir, Willibald und Waltraud Timmer den Christbaumhandel Timmer in zweiter Generation. Die Zufriedenheit unserer Kunden liegt uns sehr am Herzen und die Qualität unserer Nordmanntannen zeichnet uns aus. 
                Wir freuen uns auf ihren Besuch, persönlich oder online, und wünschen Ihnen Frohe Weihnachten.
                Ihre Familie Timmer
                </p>

                <span className="about-subtitle">
                  <span style={{ color: "#14cc3c" }}>
                    Unsere nützlichen Tipps
                  </span>
                </span>

                <ul>
                  <li className="mb-3">
                    Kühlen Sie Ihren Christbaum bis zum Heiligen Abend so gut
                    wie möglich!
                  </li>
                  <li className="mb-3">
                   Achten Sie auf Ihre Raumtemperatur – Je kühler, desto länger bleibt Ihr Baum frisch!
                  </li>
                  <li className="mb-3">
                    Entfernen Sie das Verpackungsnetz von unten nach oben!
                  </li>
                  <li className="mb-3">
                    Anschließend stellen Sie Ihren Naturbaum in einen konischen
                    Wasserständer und achten regelmäßig auf ausreichende
                    Wasserzufuhr!
                  </li>
                  <li className="mb-3">
                    Ihr Baum benötigt zwischen zwei bis vier Liter
                    Leitungswasser pro Tag. Sorgen Sie stets für einen
                    konstanten Wasserstand!
                  </li>
                  <li className="mb-3">
                    Als zusätzlichen Frische-Tipp empfehlen wir einen
                    Wasserspray, um die Nadeln einzusprühen und somit feucht und
                    länger frisch zu halten.
                  </li>
                  <img
                    className="qr"
                    src="/images/timmer_qr_final.png"
                    alt="QR code"
                  />
                </ul>
                <a href="#pricing" className="lab-btn mb-5">
                  <span>Online kaufen</span>
                </a>
              </div>
            </div>
            </div>
           
              
              
                <div id="stand" className="row align-items-center justify-content-center position-relative z-index-1">
                <Card style={{ alignItems: 'center', height:"28rem"}} className="mr-3 mb-3 timmerpos">
                  {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
                  <Card.Body style={{ textAlign: 'center'}}>
                    <Card.Title className="timmerrot">Ab Hof Schirning</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">vulgo Wiesenseppl</Card.Subtitle>
                    <Card.Subtitle className="mb-2 text-muted">Schirning 70, 8112 Gratwein Straßengel
                    </Card.Subtitle>
                    <Card.Text className="timmerrot">
                      Öffnungszeiten<br/>
                      08.12. - 23.12. 10:00 - 17:00
                      <br/>- 
                    </Card.Text>
                    <a href="https://www.google.at/maps/place/Schirning+70a,+8112+Eisbach/@47.1066429,15.289765,113m/data=!3m1!1e3!4m5!3m4!1s0x476e324f327630d5:0x9135d1918d555a83!8m2!3d47.1067099!4d15.2899719" className="lab-btn mr-2">Auf Google Maps öffnen</a>
                  </Card.Body>
                </Card>

                <Card style={{ alignItems: 'center', height:"28rem" }} className="mr-3 mb-3 timmerpos">
                  {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
                  <Card.Body style={{ textAlign: 'center'}}>
                    <Card.Title className="timmerrot">Hauptplatz Judendorf</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">Vis a vis Gemeindeamt</Card.Subtitle>
                    <Card.Subtitle className="mb-2 text-muted">Hauptplatz 1, 8111 Gratwein Straßengel
                    </Card.Subtitle>
                    <Card.Text className="timmerrot">
                      Öffnungszeiten<br/>
                      14.12. – 23.12 09:00 – 17:00 Uhr
                      <br/>24.12. 09:00 – 12:00 Uhr 
                    </Card.Text>
                    <a href="https://www.google.at/maps/place/Marktgemeindeamt+Gratwein-Stra%C3%9Fengel/@47.1139652,15.336397,185a,35.8y,0.77t/data=!3m1!1e3!4m5!3m4!1s0x476e33e85f516fcf:0x6133d9c7bfa694e4!8m2!3d47.1138652!4d15.336368?shorturl=1" className="lab-btn mr-2">Auf Google Maps öffnen</a>
                  </Card.Body>
                </Card>

                <Card style={{ alignItems: 'center', height:"28rem"  }} className="mr-3 mb-3 timmerpos">
                  {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
                  <Card.Body style={{ textAlign: 'center'}}>
                    <Card.Title className="timmerrot">BILLA Peggau</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">-</Card.Subtitle>
                    <Card.Subtitle className="mb-2 text-muted">Grazer Str. 32, 8120 Peggau

                    </Card.Subtitle>
                    <Card.Text className="timmerrot">
                      Öffnungszeiten<br/>
                      08.12. - 23.12. 10:00 - 17:00
                      <br/>-
                    </Card.Text>
                    <a href="https://www.google.at/maps/place/BILLA/@47.2019274,15.3425302,468m/data=!3m2!1e3!4b1!4m5!3m4!1s0x476e307ce19e61bf:0x87006dbc6a98ebd9!8m2!3d47.2019175!4d15.3448182?shorturl=1" className="lab-btn mr-2">Auf Google Maps öffnen</a>
                  </Card.Body>
                </Card>

                <Card style={{ alignItems: 'center', height:"28rem"  }} className="mr-3 mb-3 timmerpos">
                  {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
                  <Card.Body style={{ textAlign: 'center'}}>
                    <Card.Title className="timmerrot">Center West</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">Eingang Sports Direct
                    </Card.Subtitle>
                    <Card.Subtitle className="mb-2 text-muted">Weblinger Gürtel 25, 8054 Graz
                    </Card.Subtitle>
                    <Card.Text className="timmerrot">
                      Öffnungszeiten<br/>
                      14.12. – 23.12 09:00 – 17:00 Uhr
                      <br/>24.12. 09:00 – 12:00 Uhr 
                    </Card.Text>
                    <a href="https://www.google.com/maps/place//data=!4m2!3m1!1s0x476fcaacb81cf21d:0xa400ccc9b18537f8?source=g.page.share" className="lab-btn mr-2">Auf Google Maps öffnen</a>
                  </Card.Body>
                </Card>

                <Card style={{ alignItems: 'center', height:"28rem"  }} className="mr-3 mb-3 timmerpos">
                  {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
                  <Card.Body style={{ textAlign: 'center'}}>
                    <Card.Title className="timmerrot">BILLA Plus Eggenberg
                    </Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">-
                    </Card.Subtitle>
                    <Card.Subtitle className="mb-2 text-muted">Gaswerkstraße 2, 8020 Graz
                    </Card.Subtitle>
                    <Card.Text className="timmerrot">
                      Öffnungszeiten<br/>
                      14.12. – 23.12 09:00 – 17:00 Uhr
                      <br/>24.12. 09:00 – 12:00 Uhr 
                    </Card.Text>
                    <a href="https://www.google.com/maps/place/BILLA+PLUS/@47.0690169,15.4009917,17z/data=!4m6!3m5!1s0x476e35059bb7941b:0x395876236c02f116!8m2!3d47.0700616!4d15.4030723!15sChRiaWxsYSBwbHVzIGVnZ2VuYmVyZyIDiAEBWhYiFGJpbGxhIHBsdXMgZWdnZW5iZXJnkgELc3VwZXJtYXJrZXSaASRDaGREU1VoTk1HOW5TMFZKUTBGblNVUkxOV0ZxVjNwQlJSQUI?shorturl=1" className="lab-btn mr-2">Auf Google Maps öffnen</a>
                  </Card.Body>
                </Card>

                <Card style={{ alignItems: 'center', height:"28rem"  }} className="mr-3 mb-3 timmerpos">
                  {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
                  <Card.Body style={{ textAlign: 'center'}}>
                    <Card.Title className="timmerrot">Rosseger Kai
                    </Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">Bereich Gesundheitskasse
                    </Card.Subtitle>
                    <Card.Subtitle className="mb-2 text-muted">Roseggerkai, 8010 Graz
                    </Card.Subtitle>
                    <Card.Text className="timmerrot">
                      Öffnungszeiten<br/>
                      14.12. – 23.12 09:00 – 17:00 Uhr
                      <br/>24.12. 09:00 – 12:00 Uhr 
                    </Card.Text>
                    <a href="https://www.google.com/maps/place/Roseggerkai,+8010+Graz/@47.0648405,15.4346364,259m/data=!3m1!1e3!4m5!3m4!1s0x476e357b8f10ecbf:0x185bb17b39811570!8m2!3d47.0655155!4d15.4355833?shorturl=1" className="lab-btn mr-2">Auf Google Maps öffnen</a>
                  </Card.Body>
                </Card>

                <Card style={{ alignItems: 'center', height:"28rem"  }} className="mr-3 mb-3 timmerpos">
                  {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
                  <Card.Body style={{ textAlign: 'center'}}>
                    <Card.Title className="timmerrot">Erzherzog Johann Alle
                    </Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">Vis a vis Cafe Promenade
                    </Card.Subtitle>
                    <Card.Subtitle className="mb-2 text-muted">Erzherzog-Johann-Allee 1, 8010 Graz
                    </Card.Subtitle>
                    <Card.Text className="timmerrot">
                      Öffnungszeiten<br/>
                      14.12. – 23.12 09:00 – 17:00 Uhr
                      <br/>24.12. 09:00 – 12:00 Uhr 

                    </Card.Text>
                    <a href="https://www.google.com/maps/place//data=!4m2!3m1!1s0x476e3580488c88c5:0x3b9d51b70db745ea?source=g.page.share" className="lab-btn mr-2">Auf Google Maps öffnen</a>
                  </Card.Body>
                </Card>

          </div>
        </div>
      </div>

      <footer className="footer-section position-relative bg-theme">
        <div className="shape-top">
          <img src="/images/shape/09.png" alt="ChampEvent" />
        </div>
        <div className="shape-bottom wow fadeInUp">
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
