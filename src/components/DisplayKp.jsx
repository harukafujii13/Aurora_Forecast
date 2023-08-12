import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

const URL = 'https://services.swpc.noaa.gov/json/ovation_aurora_latest.json';

const findKp = ({ long, lat, result }) => {
  // console.log(long, lat);

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

  // console.log(numberCoords);

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

  const [showdDisplay, setShowDisplay] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(URL);
      const result = await response.json();

      let kpValue = findKp({ long, lat, result });

      switch (true) {
        case kpValue === 0:
          kpValue = '0%';
          break;
        case kpValue === 1:
          kpValue = '10%';
          break;
        case kpValue === 2:
          kpValue = '20%';
          break;
        case kpValue === 3:
          kpValue = '30%';
          break;
        case kpValue === 4:
          kpValue = '40%';
          break;
        case kpValue === 5:
          kpValue = '50%';
          break;
        case kpValue === 6:
          kpValue = '60%';
          break;
        case kpValue === 7:
          kpValue = '70%';
          break;
        case kpValue === 8:
          kpValue = '80%';
          break;
        case kpValue >= 9:
          kpValue = '90%';
          break;
        default:
          // console.log(kpValue);
          kpValue = '?';

          break;
      }

      // console.log(">>>>> ", kpValue);
      setShowDisplay(kpValue);
    };

    fetchData();
  }, [long, lat]);

  return (
    setShowDisplay !== null && (
      <div className="mx-auto my-8 p-4 md:w-[30rem] lg:w-[30rem] w-[20rem] text-center">
        <p className="text-white font-semibold lg:text-3xl md:text-2xl text-xl  font-main">
          CURRENT POSSIBILITIES
        </p>
        <p className="lg:text-8xl md:text-8xl text-7xl text-murrey font-bold font-main my-[3rem] ">
          {showdDisplay}
        </p>

        <div className="w-full bg-white rounded-full h-7 dark:bg-gray-600 mt-7">
          <div
            className="bg-gradient-to-r from-purple-400 to-green-400 bg-opacity-60 h-7 rounded-full"
            style={showdDisplay !== null ? { width: showdDisplay } : {}}></div>
        </div>
      </div>
    )
  );
};

export default DisplayKp;
