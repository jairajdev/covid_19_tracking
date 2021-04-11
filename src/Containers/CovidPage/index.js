import React from "react";
import CovidPage from "../../components/CovidPage/index";
import Spinner from "../Spinner/index";
import useCovid from "../../hooks/useCovid";

const CovidPageContainer = () => {
  const [loading, covidData] = useCovid();

  return (
    <>
      {covidData.Date && !loading ? (
        <CovidPage summary={covidData.Global} />
      ) : (
        <Spinner></Spinner>
      )}
    </>
  );
};

export default CovidPageContainer;
