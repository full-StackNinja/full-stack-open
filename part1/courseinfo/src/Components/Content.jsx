/* eslint-disable react/prop-types */

const Part1 = (props) => {
   return (
      <p>
         {props.part} {props.exercises}
      </p>
   );
};

const Part2 = (props) => {
   return (
      <p>
         {props.part} {props.exercises}
      </p>
   );
};

const Part3 = (props) => {
   return (
      <p>
         {props.part} {props.exercises}
      </p>
   );
};

const Content = (props) => {
   return (
      <>
         <Part1
            part={props.part1.name}
            exercises={props.part1.exercises}
         />
         <Part2
            part={props.part2.name}
            exercises={props.part2.exercises}
         />
         <Part3
            part={props.part3.name}
            exercises={props.part3.exercises}
         />
      </>
   );
};

export default Content;
