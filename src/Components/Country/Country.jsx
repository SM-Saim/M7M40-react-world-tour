import { useState } from "react";
import "./Country.css";
import CountryDetail from "../CountryDetail/CountryDetail";
const Country = ({ country, markVisited, handleAddFlag }) => {
  console.log(country);

  const { name, flags, area, population, cca3 } = country;

  const [visited, setvisited] = useState(false);

  const handlevisited = () => {
    setvisited(!visited);
  };

  return (
    <div className={`countryStyle ${visited && "visitedStyle"}`}>
      <img className="imgheight" src={flags.png} alt="" />
      <h3 style={{ color: visited ? "blue" : "black" }}>
        Country: {name.common}
      </h3>
      <p>Area: {area}</p>
      <p>Population: {population}</p>
      <p>
        Code: <span>{cca3}</span>
      </p>
      <button onClick={() => markVisited(country)} className="buttonBorder">
        Mark Visited
      </button>
      <br />
      <br />
      <button
        className="buttonBorder"
        onClick={() => handleAddFlag(country.flags.png)}
      >
        Add Flag
      </button>
      <br />
      <br />
      <button className="buttonBorder" onClick={handlevisited}>
        {visited ? "Visited" : "Going"}
      </button>
      {visited
        ? "   I visited this amazing country"
        : "   I wanna visit this country"}

      <hr />
      <CountryDetail
        country={country}
        markVisited={markVisited}
        handleAddFlag={handleAddFlag}
      ></CountryDetail>
    </div>
  );
};

export default Country;
