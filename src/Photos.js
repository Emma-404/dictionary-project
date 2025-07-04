import React from "react";
import "./Photos.css";

export default function Photos(props) {
  if (props.photos) {
    return (
      <section className="Photos">
        <div className="row">
          {props.photos.map(function (photo, index) {
            if (index < 4) {
              return (
                <div className="col-3" key={index}>
                  <a
                    href={photo.src.original}
                    target="_blank"
                    rel="noreferrer"
                  />
                  <img
                    src={photo.src.landscape}
                    alt={photo.alt}
                    className="img-fluid"
                  />
                </div>
              );
            }
            return null;
          })}
        </div>
      </section>
    );
  } else {
    return null;
  }
}
