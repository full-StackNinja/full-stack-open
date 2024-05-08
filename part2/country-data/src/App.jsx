import { useEffect, useState } from "react";
import axios from "axios";
import SearchCountry from "./components/SearchCountry";
import ListCountries from "./components/ListCountries";

import "./App.css";

const App = () => {
   const [countries, setCountries] = useState(null);
   const [query, setQuery] = useState("");

   const baseUrl = "https://studies.cs.helsinki.fi/restcountries/api/all";
   useEffect(() => {
      axios.get(baseUrl).then((response) => {
         console.log(Response.data);
         setCountries(response.data);
      });
   }, []);

   return (
      <>
         <SearchCountry
            query={query}
            setQuery={setQuery}
         />
         <ListCountries
            countries={countries}
            query={query}
           
         />
      </>
   );
};

export default App;
