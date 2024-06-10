import "./App.scss";

function App() {
  return (
    <>
      <section className="container">
        <img
          src="/src/assets/max-larochelle-uu-Jw5SunYI-unsplash.jpg"
          alt=""
          className="cardImage"
        />

        <div className="article">
          <h1>THUNDERSTORM</h1>
          <p className="description">
            A thunderstorm is a type of storm that generates both lightning and
            thunder. It is normally accompanied by heavy precipitation.
            Thunderstorms occur throughout the world, with the highest frequency
            in tropical rainforest regions where there are conditions of high
            humidity and temperature along with atmospheric instability.
            Individual storm clouds can measure 2–10 km across.
          </p>
          <p href="https://en.wikipedia.org/wiki/Storm" rel="wikipedia"></p>
        </div>
      </section>
    </>
  );
}

export default App;
