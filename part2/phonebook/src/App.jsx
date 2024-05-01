import { useEffect, useState } from "react";

import axios from "axios";

import FilterPersons from "./FilterPersons";
import AddPerson from "./AddPerson";
import SearchField from "./SearchField";

const App = () => {
   const [persons, setPersons] = useState([]);
   const [newName, setNewName] = useState("");
   const [newPhone, setNewPhone] = useState("");
   const [keyword, setKeyword] = useState("");

   useEffect(() => {
      axios.get("http://localhost:3000/persons").then((response) => {
         setPersons(response.data);
      });
   }, []);

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
