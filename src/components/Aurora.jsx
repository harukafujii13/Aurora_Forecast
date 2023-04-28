import { useState, useEffect, useRef } from "react";

export default function App() {
  const [data, setData] = useState();
  const coords = { long: 265.32456, lat: 58.0 };
  const URL = "https://services.swpc.noaa.gov/json/ovation_aurora_latest.json";
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(URL);
      const result = await response.json();
      setData(result);
    };

    fetchData();
  });

  const findKp = (coords) => {
    const numberCoords = {
      long: Number(coords.long.toFixed(0)),
      lat: Number(coords.lat.toFixed(0)),
    };

    const found = data.coordinates.find((c) => {
      if (c[0] === numberCoords.long && c[1] === numberCoords.lat) {
        return true;
      }
      return false;
    });

    if (found) console.log("KP: ", found[2]);
    else console.log("not found");
  };

  return (
    <div>
      <button onClick={() => findKp(coords)}>find</button>
    </div>
  );
}
