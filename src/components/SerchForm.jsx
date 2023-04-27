import React from "react";

const SerchForm = () => {
  return (
    <main className="text-charcoale mx-96 my-40 p-6 bg-powderBlue bg-opacity-60 rounded-lg shadow-lg">
      <section>
        <form className="space-y-4">
          <div className="flex flex-col">
            <label
              htmlFor="region"
              className="mb-1 text-gray-800 font-main font-semibold">
              Your Region
            </label>
            <input
              type="text"
              id="region"
              className="border border-gray-400 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div className="flex flex-col">
            <label
              htmlFor="date"
              className="mb-1 text-gray-800 font-main font-semibold">
              Date
            </label>
            <input
              type="date"
              id="date"
              className="border border-gray-400 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <button className="w-full bg-charcoale text-moonstone rounded-lg py-2 hover:bg-violet transition duration-200 font-main font-semibold">
            Search
          </button>
        </form>
      </section>
    </main>
  );
};

export default SerchForm;
