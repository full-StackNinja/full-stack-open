import { useEffect, useState } from "react";

import personService from "./services/persons";

import FilterPersons from "./FilterPersons";
import AddPerson from "./AddPerson";
import SearchField from "./SearchField";

const App = () => {
   const [persons, setPersons] = useState([]);
   const [newName, setNewName] = useState("");
   const [newPhone, setNewPhone] = useState("");
   const [keyword, setKeyword] = useState("");

   useEffect(() => {
      personService.getAll().then((response) => {
         setPersons(response.data);
      });
   }, []);

   const addPerson = (e) => {
      e.preventDefault();
      const personList = [...persons];
      const person = personList.filter((person) => person.name === newName);
      const newPerson = {
         name: newName,
         phone: newPhone,
      };
      if (person.length) {
         if (
            window.confirm(
               `${person[0].name} already exist in the database. Want to update old phone with new one?`,
            )
         ) {
            // assign old id of the existing person
            newPerson.id = person[0].id;
            personService
               .updatePerson(person[0].id, newPerson)
               .then((response) => {
                  const updatedPerson = response.data;
                  // update person in persons state variable
                  const updatedPersons = persons.map((person) => {
                     if (person.id === updatedPerson.id) return updatedPerson;
                     return person;
                  });
                  // console.log("🚀 ~ updatedPersons ~ updatedPersons:", updatedPersons)
                  
                  setPersons(updatedPersons);
               });
         }
      } else {
         personService
            .addPerson(newPerson)
            .then((response) => {
               setPersons(personList.concat(response.data));
            })
            .catch((err) => {
               throw new Error(err);
            });
      }

      setNewName("");
      setNewPhone("");
   };

   const deletePerson = (person) => {
      personService
         .deletePerson(person)
         .then((response) => {
            const deletedPerson = response.data;

            // update persons state variable
            const updatedPersons = persons.filter(
               (person) => person.id !== deletedPerson.id,
            );
            setPersons(updatedPersons);
         })
         .catch((err) => {
            throw new Error(err);
         });
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
            deletePerson={deletePerson}
         />
      </div>
   );
};

export default App;
