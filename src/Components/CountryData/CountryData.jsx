const CountryData = ({ country, markVisited, handleAddFlag }) => {
  return (
    <div>
      <small>Country Official Name: {country.name.official}</small>
    </div>
  );
};

export default CountryData;
