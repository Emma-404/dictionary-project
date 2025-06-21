import React, { useState } from "react";
import axios from "axios";
import "./Dictionary.css";
import Results from "./Results";

export default function Dictionary(props) {
  let [keyword, setKeyword] = useState(props.defaultKeyword);
  let [results, setResults] = useState(null);
  let [loaded, setLoaded] = useState(false);

  function handleResponse(response) {
    setResults(response.data);
  }

  function search() {
    let apiKey = "4e369354et3395e2b9c0oec6dfc1eab9";
    let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;

    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  function load() {
    setLoaded(true);
    search();
  }

  if (loaded) {
    return (
      <div className="Dictionary text-center">
        <section>
          <form onSubmit={handleSubmit}>
            <input type="search" onChange={handleKeywordChange} />
          </form>
          <div className="hint">
            Type your word here ex: Sunset, wine, yoga, ...
          </div>
        </section>
        <Results results={results} />
      </div>
    );
  } else {
    load();
    return "Loading";
  }
}
