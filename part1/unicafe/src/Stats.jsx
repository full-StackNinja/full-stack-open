const Content = ({ stats }) => {
   return (
      <table>
         <tbody>
            <tr>
               <td>good</td>
               <td>{stats.good}</td>
            </tr>
            <tr>
               <td> neutral </td>
               <td> {stats.neutral} </td>
            </tr>
            <tr>
               <td>bad</td>
               <td>{stats.bad}</td>
            </tr>
            <tr>
               <td>all</td>
               <td>{stats.all}</td>
            </tr>
            <tr>
               <td>average</td>
               <td>{stats.average}</td>
            </tr>
            <tr>
               <td>positive</td>
               <td> {stats.positiveFeedback}% </td>
            </tr>
         </tbody>
      </table>
   );
};

export default Content;
