import React, { useEffect, useRef } from "react";
import mapboxgl from "mapbox-gl";
import MapboxGeocoder from "@mapbox/mapbox-gl-geocoder";

mapboxgl.accessToken =
  "pk.eyJ1IjoiazUyNDEyMzEiLCJhIjoiY2xneXNuOTNmMGE3bTNzbm1jdWNqaGh1YyJ9.GDOMiPvIjJMUZJNZwdCJ6Q";

const SerchForm = () => {
  const serchHandler = (event) => {
    event.preventDefault();
  };

  const geocoderContainer = useRef(null);

  useEffect(() => {
    const geocoder = new MapboxGeocoder({
      accessToken: mapboxgl.accessToken,
      types: "country,region,place,postcode,locality,neighborhood",
    });

    geocoder.addTo(geocoderContainer.current);

    // Get the geocoder results container.
    const results = document.getElementById("result");

    // Add geocoder result to container.
    geocoder.on("result", (e) => {
      results.innerText = JSON.stringify(e.result, null, 2);
    });

    // Clear results container when search is cleared.
    geocoder.on("clear", () => {
      results.innerText = "";
    });
  }, []);

  return (
    <main className="text-charcoale mx-96 my-60 p-6 bg-powderBlue bg-opacity-60 rounded-lg shadow-lg">
      <section>
        <form
          className="space-y-4"
          onClick={serchHandler}>
          <div
            className="flex flex-col"
            id="geocoder">
            <label
              htmlFor="region"
              className="mb-1 text-gray-800 font-main font-semibold">
              Your Place
            </label>
            <input
              ref={geocoderContainer}
              className="border border-gray-400 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            {/* <div id="result" /> */}
          </div>

          {/* <div className="flex flex-col">
            <label
              htmlFor="date"
              className="mb-1 text-gray-800 font-main font-semibold">
              Date
            </label>
            <input
              type="date"
              id="date"
              value={date}
              onChange={dateChange}
              className="border border-gray-400 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div> */}

          <button className="w-full bg-charcoale text-moonstone rounded-lg py-2 hover:bg-violet transition duration-200 font-main font-semibold">
            Search
          </button>
        </form>
      </section>
    </main>
  );
};

export default SerchForm;
