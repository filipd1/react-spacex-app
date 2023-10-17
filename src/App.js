import { useState, useEffect } from "react";
import "./App.css";
import { ListItem } from "./component/ListItem";
import { Button } from "./component/Button";

function App() {
  const [spaceXData, setSpaceXData] = useState([]);
  const [isListShown, setIsListShown] = useState(false);
  const [isFilterShown, setIsFilterShown] = useState(false);

  const [isActiveFlightNumber, setisActiveFlightNumber] = useState(true);
  const [isActiveDetails, setisActiveDetails] = useState(true);
  const [isActiveLinks, setisActiveLinks] = useState(true);

  const [isActiveShowUp, setisActiveShowUp] = useState(false);

  const spaceXFilteredData = spaceXData.filter(
    (item) => item.upcoming === true
  );

  const getSpacexData = async () => {
    const response = await fetch("https://api.spacexdata.com/latest/launches");
    const data = await response.json();
    setSpaceXData(data);
    console.log(data);
  };

  useEffect(() => {
    getSpacexData();
  }, []);

  const showLaunches = () => {
    setIsListShown((prevState) => !prevState);
  };

  const toggleFilter = () => {
    setIsFilterShown((prevState) => !prevState);
  };

  return (
    <div className="container">
      <h1 className="header">SpaceX latest launches</h1>
      <p className="sub-header">
        {spaceXFilteredData.length} upcoming launches
      </p>

      <p className="show-filter" onClick={toggleFilter}>
        {isFilterShown ? "Hide filter" : "Show filter"}
      </p>

      {isFilterShown && (
        <div>
          <div className="options-container">
            <label>Flight number</label>
            <input
              type="checkbox"
              checked={isActiveFlightNumber}
              value="flightNumber"
              onChange={(e) => setisActiveFlightNumber(e.currentTarget.checked)}
            ></input>
            <label>Details</label>
            <input
              type="checkbox"
              checked={isActiveDetails}
              value="launchTime"
              onChange={(e) => setisActiveDetails(e.currentTarget.checked)}
            ></input>
            <label>Links</label>
            <input
              type="checkbox"
              checked={isActiveLinks}
              value="launchTime"
              onChange={(e) => setisActiveLinks(e.currentTarget.checked)}
            ></input>
            <label>Show only upcoming</label>
            <input
              type="checkbox"
              checked={isActiveShowUp}
              value="launchTime"
              onChange={(e) => setisActiveShowUp(e.currentTarget.checked)}
            ></input>
          </div>
        </div>
      )}
      <Button
        color="darkblue"
        onClick={showLaunches}
        value={isListShown ? "Hide" : "Show"}
      />

      {isListShown && (
        <ul className="card-list">
          {!isActiveShowUp
            ? spaceXData.map((item) => (
                <ListItem
                  data={item}
                  key={item.id}
                  isActiveFlightNumber={isActiveFlightNumber}
                  isActiveDetails={isActiveDetails}
                  isActiveLinks={isActiveLinks}
                  isActiveShowUp={isActiveShowUp}
                />
              ))
            : spaceXFilteredData.map((item) => (
                <ListItem
                  data={item}
                  key={item.id}
                  isActiveFlightNumber={isActiveFlightNumber}
                  isActiveDetails={isActiveDetails}
                  isActiveLinks={isActiveLinks}
                  isActiveShowUp={isActiveShowUp}
                />
              ))}
        </ul>
      )}
    </div>
  );
}

export default App;
