import "./App.css";
import { Navbar } from "./components/Navbar";
import { Entry } from "./components/Entry";
import { data } from "./data.js";

function App() {
  const entries = data.map(
    ({ id, img, country, url, destination, startDate, endDate, desc }) => {
      return (
        <Entry
          id={id}
          img={img}
          country={country}
          url={url}
          destination={destination}
          startDate={startDate}
          endDate={endDate}
          desc={desc}
        />
      );
    }
  );
  return (
    <>
      <Navbar />
      <main className="App--main">{entries}</main>
    </>
  );
}

export default App;
