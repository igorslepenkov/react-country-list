import { CountryList } from "./components/CountryList";
import countries from "./data/country-data.json";
import { countriesMapper } from "./utils/mappers/";

function App() {
  const transformedCountries = countriesMapper(countries);

  return (
    <div className="container">
      <h1>Country List</h1>
      <CountryList countries={transformedCountries} />
    </div>
  );
}

export default App;
