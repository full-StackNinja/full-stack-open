const Header = ({ name }) => <h1>{name}</h1>;
const Content = ({ parts }) => {
   return (
      <>
         {parts.map((part) => (
            <li key={part.id}>
               {part.name} {part.exercises}
            </li>
         ))}
      </>
   );
};

const Sum = ({ parts }) => {
   const sum = parts.reduce((acc, part) => {
      return acc + part.exercises;
   }, 0);

   return <p>total exercises are: {sum}</p>;
};

const Course = ({ course }) => {
   return (
      <>
         <Header name={course.name} />
         <Content parts={course.parts} />
         <Sum parts={course.parts} />
      </>
   );
};

export default Course;
