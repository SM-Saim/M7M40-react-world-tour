import { useEffect } from "react";
import { useState } from "react";
import Country from "../Country/Country";
import "./Countries.css";

const Countries = () => {
  const [countries, setCountries] = useState([]);
  // for visited countries
  const [visitedCountries, setVisitedCountries] = useState([]);

  // for adding flag
  const [addFlag, setAddFlag] = useState([]);

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => setCountries(data));
  }, []);

  const handleMarkVisited = (country) => {
    console.log("Add to visited country");
    const newVisitedCountries = [...visitedCountries, country];
    setVisitedCountries(newVisitedCountries);
  };

  const handleAddFlag = (flag) => {
    const newAddFlag = [...addFlag, flag];
    setAddFlag(newAddFlag);
  };

  // remove item from an array in a state
  // use filter to select all the elements except the one you want to remove

  return (
    <div>
      <h3 className="textCenter">Countries:{countries.length}</h3>
      <div>
        <h3>Visited Countries: {visitedCountries.length}</h3>
        <ul>
          {visitedCountries.map((country) => (
            <li key={country.cca3}>{country.name.common}</li>
          ))}
        </ul>
      </div>
      <div className="visitedFlagStyle">
        {addFlag.map((flaging, idx) => (
          <img key={idx} src={flaging}></img>
        ))}
      </div>

      <div className="countriesStyle">
        {countries.map((res) => (
          <Country
            country={res}
            key={res.cca3}
            markVisited={handleMarkVisited}
            handleAddFlag={handleAddFlag}
          ></Country>
        ))}
      </div>
    </div>
  );
};

export default Countries;
