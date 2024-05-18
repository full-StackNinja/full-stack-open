const FilterPersons = ({ persons, keyword, deletePerson }) => {
   console.log("🚀 ~ FilterPersons ~ persons:", persons)
   
   let filteredPersons = persons.filter((person) => {
      if (keyword) return person.name.includes(keyword);
      return true;
   });

   return (
      <ul>
         {filteredPersons.map((person) => (
            <div key={person.id}>
               <span>
                  {person.name} {person.number}
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
