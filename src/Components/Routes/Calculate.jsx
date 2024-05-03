import React, { useState } from 'react';
import Topbar from '../Topbar';

const Calculate = () => {
  const [unitsUsed, setUnitsUsed] = useState('');
  const [totalCost, setTotalCost] = useState(0);

  const calculateCost = () => {
    const costPerUnit = 7; // Cost per unit in rupees
    const units = parseFloat(unitsUsed);
    const cost = units * costPerUnit;
    setTotalCost(cost);
  };

  return (
    <div>
    <Topbar />
    <div className="electricity-calculator-container">
      <h2 className="electricity-calculator-title">Electricity Cost Calculator</h2>
      <div className="electricity-calculator-input">
        <label htmlFor="units">Units Used:</label>
        <input
          id="units"
          type="number"
          value={unitsUsed}
          onChange={(e) => setUnitsUsed(e.target.value)}
        />
      </div>
      <button className="electricity-calculate-btn" onClick={calculateCost}>Calculate</button>
      {totalCost > 0 && (
        <div className="electricity-calculator-result">
          <h3>Total Cost:</h3>
          <p>{totalCost} Rupees</p>
        </div>
      )}
    </div>
    </div>
  );
};

export default Calculate;
