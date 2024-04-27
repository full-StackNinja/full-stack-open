const Header = ({
   handleGoodBtnClick,
   handleNeutralBtnClick,
   handleBadBtnClick,
}) => {
   return (
      <div>
         <h1>Give Feedback</h1>
         <button onClick={handleGoodBtnClick}>good</button>
         <button onClick={handleNeutralBtnClick}>neutral</button>
         <button onClick={handleBadBtnClick}>bad</button>
      </div>
   );
};
export default Header;
