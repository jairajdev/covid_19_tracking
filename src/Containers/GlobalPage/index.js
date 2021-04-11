import React from "react";
import GlobalPage from "../../components/GlobalPage/index";
import Spinner from "../Spinner/index";
import useCovid from "../../hooks/useCovid";

const GlobalPageContainer = () => {
  const [loading, covidData] = useCovid();

  return (
    <>
      {covidData.Countries && !loading ? (
        <GlobalPage countryData={covidData.Countries} />
      ) : (
        <Spinner />
      )}
    </>
  );
};

export default GlobalPageContainer;
