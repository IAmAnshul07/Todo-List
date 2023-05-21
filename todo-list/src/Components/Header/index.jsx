import React, { useState } from "react";
import Card from "../Card/index";
const Header = () => {
  const [showCard, setShowCard] = useState([]);

  const handleButtonClick = () => {
    setShowCard([...showCard, {id :showCard.length + 1}]);
  };

  return (
    <>
      <div className="mainContainer">
        <div className="subContainer">
          <h4>Click on below button to add a list...</h4>
        </div>
        <button className="addButton"
         onClick={handleButtonClick}
         >
          Add List...
        </button>
        {
        <div className="card-container">
            {showCard.map((card) => (
                <Card key={card.id}/>
            ))}
        </div>
        }
      </div>
    </>
  );
};
export default Header;
