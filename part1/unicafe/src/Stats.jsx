const Content = ({ stats }) => {
   return (
      <>
         <h2>Statistics</h2>
         {stats.all ? (
            <div>
               <p>good: {stats.good} </p>
               <p>neutral: {stats.neutral}</p>
               <p>bad: {stats.bad} </p>
               <p>all: {stats.all}</p>
               <p>average: {stats.average}</p>
               <p>positive feedback: {stats.positiveFeedback}%</p>
            </div>
         ) : (
            <p>No feedback given</p>
         )}
      </>
   );
};

export default Content;
