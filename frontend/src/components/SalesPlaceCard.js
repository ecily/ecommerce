import React from "react";
import { Card } from "react-bootstrap";

export default function SalesPlaceCard({ place }) {
  const { title, subTitle, address, time, googleLink } = place;
  return (
    <Card className="mr-3 mb-3 timmerpos justify-content-center sales-places-card">
      {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
      <Card.Body style={{ textAlign: "center" }}>
        <Card.Title className="timmerrot">{title}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{subTitle}</Card.Subtitle>
        <Card.Subtitle className="mb-2 text-muted">{address}</Card.Subtitle>
        <Card.Text className="timmerrot">
          Öffnungszeiten
          <br />
          {time}
        </Card.Text>
        <a
          target="_blank"
          rel="noreferrer"
          href={googleLink}
          className="lab-btn mr-2 sales-places-btn"
        >
          Auf Google Maps öffnen
        </a>
      </Card.Body>
    </Card>
  );
}
