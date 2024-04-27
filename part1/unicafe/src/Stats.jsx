const Content = ({ stats }) => {
   return (
      <div>
         <h2>Statistics</h2>
         <p>good: {stats.good} </p>
         <p>neutral: {stats.neutral}</p>
         <p>bad: {stats.bad} </p>
         <p>all: {stats.all}</p>
         <p>average: {stats.average}</p>
         <p>positive feedback: {stats.positiveFeedback}%</p>
      </div>
   );
};

export default Content;
