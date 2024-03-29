import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import mapboxgl from 'mapbox-gl';
import MapboxGeocoder from '@mapbox/mapbox-gl-geocoder';
import { setLocation } from '../store/slice/locationSlice';

mapboxgl.accessToken =
  'pk.eyJ1IjoiazUyNDEyMzEiLCJhIjoiY2xneXNuOTNmMGE3bTNzbm1jdWNqaGh1YyJ9.GDOMiPvIjJMUZJNZwdCJ6Q';

const SearchForm = () => {
  const [showAurora, setShowAurora] = useState(false);
  const dispatch = useDispatch();
  const geocoderContainer = useRef(null);
  const location = useSelector((state) => state.location);

  useEffect(() => {
    console.log(geocoderContainer.current.innerHTML);
    const geocoder = new MapboxGeocoder({
      accessToken: mapboxgl.accessToken,
      types: 'country,region,place,postcode,locality,neighborhood',
      language: 'en',
    });

    geocoder.addTo('#geocoder');

    geocoder.on('result', (e) => {
      const { coordinates } = e.result.geometry;
      dispatch(setLocation(coordinates));
      console.log(coordinates);
    });

    return () => {
      dispatch(
        setLocation({
          longitude: 0,
          latitude: 0,
        })
      );
      geocoderContainer.current.innerHTML = '';
    };
  }, [dispatch]);

  const serchHandler = (event) => {
    event.preventDefault();
    setShowAurora(!showAurora);

    // dispatch(
    //   setLocation({
    //     longitude,
    //     latitude,
    //   })
    // );
    // console.log("Longitude:", selectedLocation[0]);
    // console.log("Latitude:", selectedLocation[1]);
  };

  const focusHandler = () => {
    dispatch(
      setLocation({
        longitude: null,
        latitude: null,
      })
    );
    console.log(location);
  };

  return (
    <>
      <main className="mx-auto mt-20 mb-0 p-6  bg-purple-400  rounded-lg shadow-lg md:w-[30rem] lg:w-[30rem] w-[20rem]">
        <section>
          <form className="space-y-4">
            <div className="flex flex-col">
              <label
                htmlFor="region"
                className="mb-2 text-white font-main font-semibold">
                YOUR PLACE
              </label>
              <div
                onChange={focusHandler}
                id="geocoder"
                ref={geocoderContainer}
                className="border border-gray-400 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 font-main"
              />
              <div id="result" />
            </div>
          </form>
        </section>
      </main>
    </>
  );
};

export default SearchForm;
