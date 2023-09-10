import CountryData from "../CountryData/CountryData";

const CountryDetail = ({ country, markVisited, handleAddFlag }) => {
  return (
    <div>
      <h3>Country Details</h3>
      <p>Capital: {country.capital} </p>
      <hr />
      <CountryData
        country={country}
        markVisited={markVisited}
        handleAddFlag={handleAddFlag}
      ></CountryData>
    </div>
  );
};

export default CountryDetail;
