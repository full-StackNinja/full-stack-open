/* eslint-disable react/prop-types */
const Total = ({ total }) => {
   return (
      <p>
         Number of exercises{" "}
         {total.exercises1 + total.exercises2 + total.exercises3}
      </p>
   );
};

export default Total;
