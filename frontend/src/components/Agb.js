import React, { useState, Fragment } from "react";
import { Button, Modal } from "react-bootstrap";

export default function AGB() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <Fragment>
      <Button className="lab-btn main-btn" onClick={handleShow}>
        AGB & Datenschutz
      </Button>

      <Modal className="agb-modal-window" show={show} onHide={handleClose}>
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
          Abweichungen von diesen Geschäftsbedingungen sind nur gültig wenn sie
          durch schriftliche Erklärung des Verkäufers bestätigt werden.
          Geschäftsbedingungen des Kunden haben keine Gültigkeit, auch wenn der
          Verkäufer diesen nicht widersprochen hat. Die Allgemeinen
          Geschäftsbedingungen gelten in ihrer zum Zeitpunkt der Bestellung
          gültigen Fassung. 1.2. Verbraucher im Sinne dieser AGB ist jede
          natürliche Person, die ein Rechtsgeschäft zu einem Zwecke abschließt,
          der weder ihrer gewerblichen noch ihrer selbstständigen beruflichen
          Tätigkeit zugerechnet werden kann. 2. Produkte 2.1. Die im Online-Shop
          dargestellten Produkte sind nicht als rechtlich bindendes Angebot zu
          verstehen, sondern stellen eine Aufforderung an den Kunden zur
          Angebotslegung (Bestellung) dar. Leistungsbeschreibungen auf der
          Website des Verkäufers beinhalten keine Zusicherung oder Garantie,
          sondern dienen ausschließlich der Kundeninformation. 2.2. Sämtliche
          Produkte sind nur „solange der Vorrat reicht“ verfügbar, wenn nicht
          bei den Produkten etwas anderes vermerkt ist. Der Verkäufer behält
          sich diesbezüglich Irrtümer vor. 3. Vertragsabschluss 3.1. Die Auswahl
          der Produkte durch den Kunden auf der Website ist unverbindlich. Diese
          Auswahl wird im Warenkorb für den späteren verbindlichen
          Bestellvorgang gespeichert. In weiterer Folge kann der Kunde im
          Warenkorb seine vorläufige Bestellung bearbeiten. 3.2. Über die
          Schaltfläche “Kaufen” gibt der Kunde ein verbindliches Angebot zum
          Kauf der im Warenkorb befindlichen Waren ab. Vor Abschicken der
          Bestellung kann der Kunde die Daten jederzeit ändern und einsehen.
          Notwendige Angaben sind mit einem Sternchen (*) gekennzeichnet. 3.3.
          Der Kunde erhält nach der erfolgten verbindlichen Bestellung eine
          Empfangsbestätigung per E-Mail (Bestellbestätigung). Die automatische
          Empfangsbestätigung dokumentiert lediglich, dass die Bestellung des
          Kunden beim Verkäufer eingegangen ist und stellt keine Annahme des
          Angebots dar. Der Kaufvertrag kommt erst mit Versendung der Ware an
          den Kunden oder durch Zusendung einer ausdrücklichen
          Auftragsbestätigung oder durch Zusendung der Rechnung zustande. 4.
          Zahlungsmodalitäten Dem Kunden stehen sämtliche auf der Website
          angeführten Zahlungsarten zur Verfügung. Sämtliche Zahlungen sind vom
          Kunden im Voraus ohne Abzug an den Verkäufer zu tätigen. Sofern eine
          Zahlungsvorgang über einen Drittanbieter erfolgt, gelten zusätzlich
          deren Allgemeine Geschäftsbedingungen. 5. Lieferung,
          Warenverfügbarkeit Sofern ein ausgewähltes Produkt im Zeitpunkt der
          Bestellung nicht verfügbar ist, so teilt der Verkäufer dem Kunden dies
          mit gesondertem Schreiben mit. Ist das Produkt dauerhaft nicht
          lieferbar, wird das Angebot des Kunden nicht angenommen, diesfalls
          kommt kein Vertrag zustande. Ist das vom Kunden bestellte Produkt nur
          vorübergehend nicht verfügbar, teilt der Verkäufer dem Kunden dies
          ebenfalls unverzüglich mit und gibt einen möglichen Ersatzliefertermin
          bekannt. Sollte bei der Lieferung eine Verzögerung von mehr als zwei
          Wochen bestehen, hat der Kunde das Recht, vom Vertrag zurückzutreten.
          Diesfalls hat der Verkäufer ebenfalls das Recht vom Vertrag
          zurückzutreten. 6. Preise und Versandkosten Sämtliche Preisangaben,
          auf der Website des Verkäufers, verstehen sich einschließlich der
          jeweils gültigen gesetzlichen Umsatzsteuer. Die Zusendung der Ware an
          den Kunden erfolgt Versandkostenfrei für den Kunden. 7.
          Eigentumsvorbehalt Bis zur vollständigen Bezahlung verbleiben die
          gelieferten Waren im Eigentum des Verkäufers. 8. Informationen zur
          Ausübung des Rücktrittsrechts 8.1. Das Rücktrittsrecht für Kunden nach
          dem Fern- und Auswärtsgeschäfte-Gesetz (FAGG) besteht nicht bei der
          Bestellung von Christbäumen. Gemäß § 18 Abs 1 Z4 FAGG sind Waren die
          schnell verderben können vom Rücktrittsrecht ausgenommen. Schnell
          verderbliche Waren sind insbesondere Blumen und Pflanzen. 8.2. Für
          Waren bei denen keine Ausnahme vom Rücktrittsrecht gemäß § 18 FAGG
          besteht gelten die gesetzlichen Bestimmungen. Der Kunde hat das Recht
          binnen vierzehn Tagen ab Zustandekommen des Vertrags ohne Angabe von
          Gründen vom Vertrag zurückzutreten. Um Ihr Rücktrittsrecht auszuüben,
          muss der Kunde dem Verkäufer mittels einer eindeutigen Erklärung (z.
          B. ein mit der Post versandter Brief oder E-Mail) über seinen
          Entschluss, von diesem Vertrag zurückzutreten, informieren. Zur
          Wahrung der Rücktrittsfrist reicht es aus, dass der Kunde die
          Mitteilung über die Ausübung des Rücktrittrechts vor Ablauf der
          Rücktrittsfrist absendet. 8.3. Wenn der Kunde von einem Vertrag
          ordnungsgemäß zurücktritt oder eine Rücktritt gemäß Punkt 5 dieser
          Allgemeinen Geschäftsbedingungen erfolgt, hat der Verkäufer Ihm alle
          Zahlungen, die der Verkäufer von Ihm erhalten hat, unverzüglich und
          spätestens binnen vierzehn Tagen ab dem Tag zurückzuzahlen, an dem die
          Mitteilung über den Rücktritt vom Vertrag beim Verkäufer eingegangen
          ist. 8.4. Der Kunde hat die Waren unverzüglich und in jedem Fall
          spätestens binnen vierzehn Tagen ab dem Tag, an dem er uns über den
          Rücktritt vom Vertrag unterrichten, an den Verkäufer zurückzusenden
          oder zu übergeben. Die Frist ist gewahrt, wenn der Kunde die Waren vor
          Ablauf der Frist von vierzehn Tagen absendet. Im Falle der Ausübung
          eines Rücktrittsrechts trägt der Kunde sämtliche Kosten der
          Rücksendung. 8.5. Der Kunde muss für einen etwaigen Wertverlust der
          Waren nur aufkommen, wenn dieser Wertverlust auf einen zur Prüfung der
          Beschaffenheit, Eigenschaften und Funktionsweise der Waren nicht
          notwendigen Umgang mit ihnen zurückzuführen ist. 9. Haftung,
          Gewährleistung Es gelten die gesetzlichen Gewehrleistungsbestimmungen.
          Es bestehen keinerlei Garantiezusagen seitens des Verkäufers. Die
          Haftung für leichte Fahrlässigkeit (ausgenommen Personenschäden) ist
          ausgeschlossen. 10. Vertrag Der Vertragstext der Bestellung wird vom
          Verkäufer gespeichert. Der Kunde kann den Vertragstext vor der Abgabe
          der Bestellung an den Verkäufer ausdrucken, indem er im letzten
          Schritt der Bestellung die Druckfunktion seines Browsers nutzt. Der
          Verkäufer sendet dem Kunden außerdem eine Bestellbestätigung mit allen
          Bestelldaten an die von Ihm angegebene E-Mail-Adresse zu. Die AGB sind
          jederzeit auf der Website des Verkäufers abrufbar. 11. Datenschutz Die
          vom Kunden zur Verfügung gestellten persönlichen Daten werden vom
          Verkäufer ausschließlich zweckgebunden und gemäß den gesetzlichen
          Bestimmungen verarbeitet. Die angegebenen persönlichen Daten (wie zum
          Beispiel Name, E-Mail-Adresse, Anschrift, Zahlungsdaten) verwendet der
          Verkäufer ausschließlich zur Erfüllung und Abwicklung des Vertrags.
          Eine Weitergabe an Dritte, die nicht am Bestell-, Auslieferungs- und
          Zahlungsvorgang beteiligt sind findet nicht statt. Der Kunde hat das
          Recht, auf Antrag Auskunft zu erhalten über die personenbezogenen
          Daten, die vom Verkäufer über ihn gespeichert wurden. Zusätzlich hat
          er das Recht auf Berichtigung unrichtiger Daten, Sperrung und Löschung
          seiner personenbezogenen Daten, soweit keine gesetzliche
          Aufbewahrungspflicht entgegensteht. 12. Kontaktdaten für Wünsche,
          Anregungen und Berschwerden Christbaumhandel Timmer . Geschäftsführer:
          Willibald Timmer Schirning 70 8112 Gratwein Straßengel +43 664 5129323
          Willibald.timmer@aon.at 13. Erfüllungsort, Gerichtsstand, Anwendbares
          Recht Als Gerichtstand wird das sachlich und örtlich Zuständige
          Gericht am Sitz des Verkäufers vereinbart. Erfüllungsort ist der Sitz
          des Verkäufers. Es gilt das Recht der Republik Österreich. Dies gilt
          nicht, wenn zwingende Verbraucherschutzvorschriften einer solchen
          Anwendung entgegenstehen.
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </Fragment>
  );
}
