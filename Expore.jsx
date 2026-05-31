import { useEffect, useState } from "react";

import Navbar from "../components/Navbar";
import CountryCard from "../components/CountryCard";

function Explore() {

  const [countries,setCountries] = useState([]);
  const [search,setSearch] = useState("");
  const [region,setRegion] = useState("");
  const [loading,setLoading] = useState(true);

  useEffect(() => {

    fetch(
      "https://restcountries.com/v3.1/all?fields=name,flags,population,region,capital,cca3"
    )
      .then(res => res.json())
      .then(data => {
        setCountries(data);
        setLoading(false);
      });

  }, []);

  const filteredCountries = countries.filter(country =>
    country.name.common
      .toLowerCase()
      .includes(search.toLowerCase()) &&
    (region === "" || country.region === region)
  );

  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <div>

      <Navbar />

      <input
        placeholder="Search Country"
        onChange={e => setSearch(e.target.value)}
      />

      <select
        onChange={e => setRegion(e.target.value)}
      >
        <option value="">All</option>
        <option>Africa</option>
        <option>Asia</option>
        <option>Europe</option>
        <option>Americas</option>
        <option>Oceania</option>
      </select>

      <div>
        {filteredCountries.map(country => (
          <CountryCard
            key={country.cca3}
            country={country}
          />
        ))}
      </div>

    </div>
  );
}

export default Explore;