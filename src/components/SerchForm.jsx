import React from "react";

const SerchForm = () => {
  return (
    <main className="text-black m-auto m-20 bg-powderBlu">
      <section>
        <form>
          <div>
            <label htmlFor="region">Your Region</label>
            <input
              type="text"
              id="region"
            />
          </div>

          <div>
            <label htmlFor="date">Date</label>
            <input
              type="date"
              id="date"
            />
          </div>

          <button>Serch</button>
        </form>
      </section>
    </main>
  );
};

export default SerchForm;
