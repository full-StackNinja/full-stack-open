import { useState } from "react";
import Header from "./Header";
import Content from "./Content";

const App = () => {
   const good = 0;
   const bad = 0;
   const neutral = 0;
   const average = 0;
   const positiveFeedback = 0;
   const all = 0;
   const [stats, setStats] = useState({
      good,
      neutral,
      bad,
      all,
      average,
      positiveFeedback,
   });
   const handleGoodBtnClick = () => {
      const newStats = { ...stats, all: stats.all + 1, good: stats.good + 1 };
      newStats.average = (newStats.good - newStats.bad) / newStats.all;
      newStats.positiveFeedback = newStats.good / newStats.all * 100;
      setStats(newStats);
   };
   const handleNeutralBtnClick = () => {
      const newStats = { ...stats, all: stats.all + 1 };
      newStats.average = (newStats.good - newStats.bad) / newStats.all;
      newStats.positiveFeedback = newStats.good / newStats.all;
      setStats(newStats);
   };
   const handleBadBtnClick = () => {
      const newStats = { ...stats, all: stats.all + 1, bad: stats.bad + 1 };
      newStats.average = (newStats.good - newStats.bad) / newStats.all;
      newStats.positiveFeedback = newStats.good / newStats.all;
      setStats(newStats);
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
