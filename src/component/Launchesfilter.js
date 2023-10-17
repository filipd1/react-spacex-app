import { useState } from "react";

export const Launchesfilter = () => {
  const [isActive1, setIsActive1] = useState(false);
  const [isActive2, setIsActive2] = useState(false);
  const [isActive3, setIsActive3] = useState(false);
  const [isActive4, setIsActive4] = useState(false);

  return (
    <div>
      <div className="options-container">
        <label>Flight number</label>
        <input
          type="checkbox"
          checked={isActive1}
          value="flightNumber"
          onChange={(e) => setIsActive1(e.currentTarget.checked)}
        ></input>
        <label>Launch time</label>
        <input
          type="checkbox"
          checked={isActive2}
          value="launchTime"
          onChange={(e) => setIsActive2(e.currentTarget.checked)}
        ></input>
        <label>Details</label>
        <input
          type="checkbox"
          checked={isActive3}
          value="launchTime"
          onChange={(e) => setIsActive3(e.currentTarget.checked)}
        ></input>
        <label>Links</label>
        <input
          type="checkbox"
          checked={isActive4}
          value="launchTime"
          onChange={(e) => setIsActive4(e.currentTarget.checked)}
        ></input>
      </div>
    </div>
  );
};
