import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

const Aurora = () => {
  const [data, setData] = useState();
  const longitude = useSelector((state) => state?.longitude || "0");
  const latitude = useSelector((state) => state?.latitude || "0");

  const coords = { long: longitude, lat: latitude };
  const URL = "https://services.swpc.noaa.gov/json/ovation_aurora_latest.json";

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(URL);
      const result = await response.json();
      setData(result);
    };

    fetchData();
  }, []);

  const findKp = ({ long, lat }) => {
    console.log(long, lat);
    let numberCoords;
    if (Number(long) < 0) {
      numberCoords = {
        long: Math.abs(Number(long).toFixed(0)) + 180,
        lat: Math.round(Number(latitude)),
      };
    } else {
      numberCoords = {
        long: Math.round(Number(longitude)),
        lat: Math.round(Number(latitude)),
      };
    }

    console.log(numberCoords);

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
    <div className="h-6 bg-charcoale">
      <button
        className="btn"
        onClick={() => findKp(coords)}>
        find
      </button>
    </div>
  );
};
export default Aurora;

// const kpIndex = ({ kp }) => {
//   let possibility;

//   switch (kp) {
//     case 0:
//       possibility = "0%";
//       break;
//     case 1:
//     case 2:
//     case 3:
//       possibility = "30%";
//       break;
//     case 4:
//     case 5:
//       possibility = "50%";
//       break;
//     case 6:
//     case 7:
//       possibility = "70%";
//       break;
//     case 8:
//       possibility = "80%";
//       break;
//     default:
//       possibility = "90%";
//       break;
//   }
// }

// return(
//   <div>
//     <p>Possibility: {possibility}</p>
//   </div>
// )
