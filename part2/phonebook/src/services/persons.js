import axios from "axios";

const baseUrl = "/api/persons";

const getAll = () => axios.get(baseUrl);

const addPerson = (newPerson) => axios.post(baseUrl, newPerson);

const deletePerson = (person) => {
   if (window.confirm(`Do you want to delete ${person.name}?`))
      return axios.delete(`baseUrl/${person.id}`);
   return new Promise((resolve, reject) => {
      return reject("user aborted the delete operation");
   });
};

const updatePerson = (id, newPerson) => {
   return axios.put(`baseUrl/${id}`, newPerson);
};

export default {
   getAll,
   addPerson,
   deletePerson,
   updatePerson,
};
