const FilterPersons = ({ persons, keyword, deletePerson }) => {
   let filteredPersons = persons.filter((person) => {
      if (keyword) return person.name.includes(keyword);
      return true;
   });

   return (
      <ul>
         {filteredPersons.map((person) => (
            <div key={person.id}>
               <span>
                  {person.name} {person.phone}
               </span>{" "}
               <button
                  onClick={() => {
                     deletePerson(person);
                  }}
               >
                  delete
               </button>
            </div>
         ))}
      </ul>
   );
};

export default FilterPersons;
