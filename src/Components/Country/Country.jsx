import "./Country.css";
const Country = ({ country }) => {
  console.log(country);
  const { name, flags } = country;
  return (
    <div className="countryStyle">
      <img src={flags.png} alt="" />
      <h3>Country: {name?.common}</h3>
    </div>
  );
};

export default Country;
