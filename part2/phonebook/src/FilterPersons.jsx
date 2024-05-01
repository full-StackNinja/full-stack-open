const FilterPersons = ({ persons, keyword }) => {
   const filteredPersons = persons.filter((person) => {
      if (keyword) return person.name.includes(keyword);
      return true;
   });

   return (
      <ul>
         {filteredPersons.map((person) => (
            <li key={person.id}>
               {person.name} {person.phone}
            </li>
         ))}
      </ul>
   );
};

export default FilterPersons;
