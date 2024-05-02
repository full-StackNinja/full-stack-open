import axios from "axios";

const baseUrl = "http://localhost:3000";

const getAll = () => axios.get(`${baseUrl}/persons`);

const addPerson = (newPerson) => axios.post(`${baseUrl}/persons`, newPerson);

const deletePerson = (person) => {
   if (window.confirm(`Do you want to delete ${person.name}?`))
      return axios.delete(`${baseUrl}/persons/${person.id}`);
   return new Promise((resolve, reject) => {
      return reject("user aborted the delete operation");
   });
};

const updatePerson = (id, newData) => {
   return axios.put(`${baseUrl}/persons/${id}`, newData);
};

export default {
   getAll,
   addPerson,
   deletePerson,
   updatePerson,
};
