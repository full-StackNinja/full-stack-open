const SearchField = ({ keyword, setKeyword }) => {
   return (
      <div>
         filter by name:
         <input
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
         />
      </div>
   );
};

export default SearchField;
