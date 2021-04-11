import React from "react";
import Container from "./style/Container";
import BlogWrapper from "./style/BlogWrapper";
import { formatNumberWithComma } from "../../utils/helpers";
import virus_1_image from "../../assets/virus1.png";
import virus_3_image from "../../assets/virus2.png";
import virus_2_image from "../../assets/virus3.png";

const CovidPage = ({ summary }) => {
  return (
    <Container>
      <h2>Covid 19 Cases</h2>
      <div>
        <BlogWrapper>
          <img src={virus_1_image} alt="Cover" />
          <div>
            <h3>{formatNumberWithComma(summary.TotalConfirmed)}</h3>
            <p style={{ color: "#4CAF50" }}>Total Confirmed Cases</p>
          </div>
        </BlogWrapper>
        <BlogWrapper>
          <img src={virus_2_image} alt="Cover" />
          <div>
            <h3>{formatNumberWithComma(summary.TotalRecovered)}</h3>
            <p style={{ color: "#2196F3" }}>Total Recovered Cases</p>
          </div>
        </BlogWrapper>
        <BlogWrapper>
          <img src={virus_3_image} alt="Cover" />
          <div>
            <h3>{formatNumberWithComma(summary.TotalDeaths)}</h3>
            <p style={{ color: "#FF9800" }}>Total Death Cases</p>
          </div>
        </BlogWrapper>
        <BlogWrapper>
          <img src={virus_1_image} alt="Cover" />
          <div>
            <h3>{formatNumberWithComma(summary.NewConfirmed)}</h3>
            <p style={{ color: "#4CAF50" }}>New Confirmed Cases</p>
          </div>
        </BlogWrapper>
        <BlogWrapper>
          <img src={virus_2_image} alt="Cover" />
          <div>
            <h3>{formatNumberWithComma(summary.NewRecovered)}</h3>
            <p style={{ color: "#2196F3" }}>New Recovered Cases</p>
          </div>
        </BlogWrapper>
        <BlogWrapper>
          <img src={virus_3_image} alt="Cover" />
          <div>
            <h3>{formatNumberWithComma(summary.NewDeaths)}</h3>
            <p style={{ color: "#FF9800" }}>New Death Cases</p>
          </div>
        </BlogWrapper>
      </div>
    </Container>
  );
};

export default CovidPage;
