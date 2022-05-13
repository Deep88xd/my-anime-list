import React from "react";

export default function Card(props) {
  return (
    <div>
      <div>
      </div>
      <section className="container">
        <div className="card">
          <img src={props.imgsrc} alt="error" className="card-image" />
          <span>{props.title}</span>
         
          <div className="info">

          <h2>{props.sname}</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium
            aut ipsa sint ut, tenetur omnis.
          </p>
          </div>
          <a href={props.links} target="_blank" rel="noopener noreferrer">
            watch now
          </a>
        </div>
      </section>
    </div>
  );
}
