import React from "react";
import Synonyms from "./Synonyms";
import "./App.css";


export default function Meaning(props) {
  return (
    <div className="Meaning">
      <h3>{props.meaning.partOfSpeech}</h3>
      <div className="MeaningContainer">
      {props.meaning.definitions.map(function (definition, index) {
        return (
          <div key={index}>
            <div className="definition">{definition.definition}</div>

            <div className="example">{definition.example}</div>
            <Synonyms synonyms={definition.synonyms} />
          </div>
         
        );
      
      })}
       </div>
    </div>
  );
}