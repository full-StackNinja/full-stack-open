import axios from "axios";
import { useEffect, useState } from "react";

const baseUrl = `https://api.openweathermap.org/data/2.5/weather?`;
const CountryDetail = ({ country }) => {
   console.log("🚀 ~ CountryDetail ~ country:", country);
   const capital = country.capital[0];
   const [capitalWeather, setCapitalWeather] = useState(null);

   useEffect(() => {
      axios
         .get(baseUrl + `q=${capital}&APPID=${import.meta.env.VITE_API_KEY}`)
         .then((response) => {
            setCapitalWeather(response.data);
            console.log(
               "🚀 ~ .then ~ capitalWeather:",
               response.data.weather[0].icon,
            );
         });
   }, [capital]);

   return (
      <div>
         <h2>{country.name.common}</h2>
         <p>Area: {country.area}</p>
         <h3>Languages:</h3>
         <ul>
            {Object.keys(country.languages).map((lang) => (
               <li key={lang}>{country.languages[lang]}</li>
            ))}
         </ul>
         <p>Capital: {country.capital}</p>
         <p className="flag">{country.flag}</p>
         {capitalWeather && (
            <>
               <h3>Weather in {country.capital}:</h3>
               <p>
                  temperature{" "}
                  {capitalWeather &&
                     Number.parseInt(
                        capitalWeather.main.temp - 273.15,
                        10,
                     )}{" "}
                  Celsius
               </p>{" "}
               <img
                  src={`https://openweathermap.org/img/wn/${capitalWeather.weather[0].icon}@4x.png`}
                  alt="Weather cloud icon"
               />
               <p>
                  Wind speed {capitalWeather && capitalWeather.wind.speed} m/s
               </p>
            </>
         )}
      </div>
   );
};

const ListCountries = ({ countries, query }) => {
   const [filteredCountries, setFilteredCountries] = useState([]);

   useEffect(() => {
      const filterCountries =
         countries && query
            ? countries.filter((country) =>
                 country.name.common.toLowerCase().includes(query),
              )
            : [];
      setFilteredCountries(filterCountries);
   }, [query, countries]);

   if (filteredCountries.length === 0) return null;
   else if (filteredCountries.length === 1) {
      return <CountryDetail country={filteredCountries[0]} />;
   } else if (filteredCountries.length > 10)
      return <p>Too many results! add more filters to narrow it down</p>;
   else {
      return (
         <div>
            {filteredCountries.map((country) => (
               <p key={country.name.official}>
                  {country.name.common}{" "}
                  {
                     <button
                        onClick={() => {
                           setFilteredCountries([country]);
                        }}
                     >
                        show
                     </button>
                  }
               </p>
            ))}
         </div>
      );
   }
};

export default ListCountries;
