import { Link } from "react-router-dom";

function CountryCard({ country }) {
  return (
    <div>

      <img
        src={country.flags.png}
        alt={country.name.common}
      />

      <h3>{country.name.common}</h3>

      <p>Capital: {country.capital?.[0]}</p>

      <p>Population: {country.population}</p>

      <p>Region: {country.region}</p>

      <Link to={`/country/${country.cca3}`}>
        View Details
      </Link>

    </div>
  );
}

export default CountryCard;
