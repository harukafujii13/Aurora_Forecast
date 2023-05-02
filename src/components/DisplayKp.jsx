import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";

const URL = "https://services.swpc.noaa.gov/json/ovation_aurora_latest.json";

const findKp = ({ long, lat, result }) => {
  console.log(long, lat);

  let numberCoords;
  if (Number(long) < 0) {
    numberCoords = {
      long: Math.abs(Number(long).toFixed(0)) + 180,
      lat: Math.round(Number(lat)),
    };
  } else {
    numberCoords = {
      long: Math.round(Number(long)),
      lat: Math.round(Number(lat)),
    };
  }

  console.log(numberCoords);

  const found = result.coordinates.find((c) => {
    if (c[0] === numberCoords.long && c[1] === numberCoords.lat) {
      return true;
    }
    return false;
  });

  if (found) return found[2];
  else return -1;
};

const DisplayKp = () => {
  const long = useSelector((state) => state.longitude);
  const lat = useSelector((state) => state.latitude);

  const [showdDisplay, setShowDisplay] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(URL);
      const result = await response.json();

      let kpValue = findKp({ long, lat, result });

      switch (true) {
        case kpValue === 0:
          kpValue = "0%";
          break;
        case kpValue === 1:
        case kpValue === 2:
        case kpValue === 3:
          kpValue = "30%";
          break;
        case kpValue === 4:
        case kpValue === 5:
          kpValue = "50%";
          break;
        case kpValue === 6:
        case kpValue === 7:
          kpValue = "70%";
          break;
        case kpValue === 8:
          kpValue = "80%";
          break;
        case kpValue >= 9:
          kpValue = "90%";
          break;
        default:
          console.log(kpValue);
          kpValue = "";

          break;
      }

      // console.log(">>>>> ", kpValue);
      setShowDisplay(kpValue);
    };

    fetchData();
  }, [long, lat]);

  return (
    { setShowDisplay } && (
      <div className="mx-auto my-8 p-6 md:w-1/2 lg:w-1/3 text-center">
        <p className="text-white font-bold text-main mb-2 font-main">
          POSSIBILITY
        </p>
        <p className="ext-7xl text-murrey font-bold font-main text-psb ">
          {showdDisplay}
        </p>

        <div className="w-full bg-white rounded-full h-7 dark:bg-gray-600 mt-7">
          <div
            className="bg-gradient-to-r from-yellow-300 to-pink-400 h-7 rounded-full"
            style={{ width: showdDisplay }}></div>
        </div>
      </div>
    )
  );
};

export default DisplayKp;
