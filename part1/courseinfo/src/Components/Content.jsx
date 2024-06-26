/* eslint-disable react/prop-types */

const Part1 = (props) => {

   return (
      <p>
         {props.part.name} {props.part.exercises}
      </p>
   );
};
const Part2 = (props) => {
   return (
      <p>
         {props.part.name} {props.part.exercises}
      </p>
   );
};

const Part3 = (props) => {
   return (
      <p>
         {props.part.name} {props.part.exercises}
      </p>
   );
};

const Content = (props) => {
  
   return (
      <>
         <Part1 part={props.course.parts[0]} />
         <Part2 part={props.course.parts[1]} />
         <Part3 part={props.course.parts[2]} />
      </>
   );
};

export default Content;
