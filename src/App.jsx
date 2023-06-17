import React, { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';
import countriesData from './countries.json';
const App = () => {
  const [countries, setCountries] = useState(countriesData);
  return (
    <div>
      <NavBar />
      <CountriesList countries={countries} />
      <Routes>
        <Route
          path="/country/:countryId"
          element={<CountryDetails countries={countries} />}
        />
      </Routes>
    </div>
  );
};

export default App;
