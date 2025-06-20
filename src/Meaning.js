import React from "react";
import Synonyms from "./Synonyms.js";

export default function Meaning(props) {
  console.log(props.meaning);
  return (
    <div className="Meaning">
      <h3>{props.meaning.partOfSpeech}</h3>
      {props.meaning.defintions.map(function (definition, index) {
        return (
          <div key={index}>
            <p>
              <strong>Definition:</strong>
              {props.meaning.definition}
              <br />
              <strong>Example:</strong>
              <em>{props.meaning.example}</em>
              <br />
              <Synonyms synonyms={definition.synonyms} />
              <strong>Synonyms:</strong>
              {props.definition.synonyms}
            </p>
          </div>
        );
      })}
    </div>
  );
}
