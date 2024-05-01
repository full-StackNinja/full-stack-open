const AddPerson = ({
   addPerson,
   newName,
   setNewName,
   newPhone,
   setNewPhone,
}) => {
   return (
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
   );
};

export default AddPerson;
