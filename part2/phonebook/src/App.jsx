import { useEffect, useState } from "react";

import personService from "./services/persons";

import FilterPersons from "./FilterPersons";
import Message from "./Message";
import AddPerson from "./AddPerson";
import SearchField from "./SearchField";

const App = () => {
   const [persons, setPersons] = useState([]);
   const [newName, setNewName] = useState("");
   const [newPhone, setNewPhone] = useState("");
   const [keyword, setKeyword] = useState("");
   const [message, setMessage] = useState("");
   const [status, setStatus] = useState("success");

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
         number: newPhone,
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

                  setPersons(updatedPersons);
                  setMessage(`Updated phone number of ${updatedPerson.name}`);
                  setTimeout(() => {
                     setMessage("");
                  }, 3000);
               })
               .catch((err) => {
                  setStatus("failure");
                  setMessage(err.response.data.error);
                  setTimeout(() => {
                     setMessage("");
                  }, 3000);
               });
         }
      } else {
         personService
            .addPerson(newPerson)
            .then((response) => {
               setPersons(personList.concat(response.data));
               setStatus("success");
               setMessage(`Added new Person ${newPerson.name} to the database`);

               setTimeout(() => {
                  setMessage("");
               }, 3000);
            })
            .catch((err) => {
               setStatus("failure");
               setMessage(err.response.data.error);
               setTimeout(() => {
                  setMessage("");
               }, 3000);
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
            setStatus("failure");
            setMessage(err.response.data.error);
            setTimeout(() => {
               setMessage("");
            }, 3000);
         });
   };

   return (
      <div>
         <h2>Phonebook</h2>
         <Message
            message={message}
            status={status}
         />
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
