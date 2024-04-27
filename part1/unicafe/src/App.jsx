import { useState } from "react";
import Header from "./Header";
import Content from "./Content";

const App = () => {
   const good = 0;
   const bad = 0;
   const neutral = 0;
   const [stats, setStats] = useState({ good, neutral, bad });
   const handleGoodBtnClick = () => {
      setStats({ ...stats, good: stats.good + 1 });
   };
   const handleNeutralBtnClick = () => {
      setStats({ ...stats, neutral: stats.neutral + 1 });
   };
   const handleBadBtnClick = () => {
      setStats({ ...stats, bad: stats.bad + 1 });
   };
   return (
      <>
         <Header
            handleGoodBtnClick={handleGoodBtnClick}
            handleNeutralBtnClick={handleNeutralBtnClick}
            handleBadBtnClick={handleBadBtnClick}
         />
         <Content stats={stats} />
      </>
   );
};

export default App;
