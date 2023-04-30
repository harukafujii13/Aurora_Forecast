import React, { useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import mapboxgl from "mapbox-gl";
import MapboxGeocoder from "@mapbox/mapbox-gl-geocoder";
import { setLocation } from "../store/slice/locationSlice";

mapboxgl.accessToken =
  "pk.eyJ1IjoiazUyNDEyMzEiLCJhIjoiY2xneXNuOTNmMGE3bTNzbm1jdWNqaGh1YyJ9.GDOMiPvIjJMUZJNZwdCJ6Q";

const SearchForm = () => {
  const dispatch = useDispatch();
  const geocoderContainer = useRef(null);

  useEffect(() => {
    const geocoder = new MapboxGeocoder({
      accessToken: mapboxgl.accessToken,
      types: "country,region,place,postcode,locality,neighborhood",
    });

    geocoder.addTo("#geocoder");

    geocoder.on("result", (e) => {
      const { coordinates } = e.result.geometry;
      dispatch(setLocation(coordinates));
    });

    return () => (geocoderContainer.current.innerHTML = "");
  }, [dispatch]);

  const serchHandler = (event) => {
    event.preventDefault();
    console.log("Longitude:", selectedLocation[0]);
    console.log("Latitude:", selectedLocation[1]);
  };

  return (
    <main className="mx-auto my-40 p-6 bg-powderBlue bg-opacity-60 rounded-lg shadow-lg md:w-1/2 lg:w-1/3">
      <section>
        <form
          className="space-y-4"
          onClick={serchHandler}>
          <div className="flex flex-col">
            <label
              htmlFor="region"
              className="mb-1 text-gray-800 font-main font-semibold">
              Your Place
            </label>
            <div
              id="geocoder"
              ref={geocoderContainer}
              className="border border-gray-400 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <div id="result" />
          </div>

          <button className="w-full bg-charcoale text-moonstone rounded-lg py-2 hover:bg-violet transition duration-200 font-main font-semibold">
            Search
          </button>
        </form>
      </section>
    </main>
  );
};

export default SearchForm;
