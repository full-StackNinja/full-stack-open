import { useState } from "react";

const App = () => {
   const [persons, setPersons] = useState([
      { name: "Arto Hellas", phone: "0332-876598" },
   ]);
   const [newName, setNewName] = useState("");
   const [newPhone, setNewPhone] = useState("");

   const addPerson = (e) => {
      e.preventDefault();
      const personList = [...persons];
      const person = personList.filter((person) => person.name === newName);
      if (person.length)
         return alert(`${person[0].name} is already added to the phonebook!}`);
      personList.push({ name: newName, phone: newPhone });
      setPersons(personList);
      setNewName("");
      setNewPhone("");
   };

   return (
      <div>
         <h2>Phonebook</h2>
         <form onSubmit={addPerson}>
            <div>
               name:{" "}
               <input
                  value={newName}
                  onChange={(e) => setNewName(e.target.value)}
               />
            </div>
            <div>
               phone:{" "}
               <input
                  value={newPhone}
                  onChange={(e) => setNewPhone(e.target.value)}
               />
            </div>
            <div>
               <button type="submit">add</button>
            </div>
         </form>
         <h2>Numbers</h2>
         <ul>
            {persons.map((person, index) => (
               <li key={index}>
                  {person.name} {person.phone}
               </li>
            ))}
         </ul>
      </div>
   );
};

export default App;
