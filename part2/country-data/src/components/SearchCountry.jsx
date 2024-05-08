const SearchCountry = ({ query, setQuery }) => {
   return (
      <div>
         search country:
         <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
         />
      </div>
   );
};

export default SearchCountry;
