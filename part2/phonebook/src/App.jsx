import { useState } from "react";
import FilterPersons from "./FilterPersons";
import AddPerson from "./AddPerson";
import SearchField from "./SearchField";
const App = () => {
   const [persons, setPersons] = useState([
      { name: "Arto Hellas", phone: "040-123456", id: 1 },
      { name: "Ada Lovelace", phone: "39-44-5323523", id: 2 },
      { name: "Dan Abramov", phone: "12-43-234345", id: 3 },
      { name: "Mary Poppendieck", phone: "39-23-6423122", id: 4 },
   ]);
   const [newName, setNewName] = useState("");
   const [newPhone, setNewPhone] = useState("");
   const [keyword, setKeyword] = useState("");

   const addPerson = (e) => {
      e.preventDefault();
      const personList = [...persons];
      const person = personList.filter((person) => person.name === newName);
      if (person.length)
         return alert(`${person[0].name} is already added to the phonebook!}`);
      personList.push({
         name: newName,
         phone: newPhone,
         id: persons.length + 1,
      });
      setPersons(personList);
      setNewName("");
      setNewPhone("");
   };

   return (
      <div>
         <h2>Phonebook</h2>
         <SearchField
            keyword={keyword}
            setKeyword={setKeyword}
         />
         <h3>Add new Person</h3>
         <AddPerson
            addPerson={addPerson}
            newName={newName}
            setNewName={setNewName}
            newPhone={newPhone}
            setNewPhone={setNewPhone}
         />
         <h2>Numbers</h2>
         <FilterPersons
            keyword={keyword}
            persons={persons}
         />
      </div>
   );
};

export default App;
