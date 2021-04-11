import React from "react";
import Container from "./style/Container";
import ImageContainer from "./style/ImageContainer";
import TextContainer from "./style/TextContainer";
import AbImage from "../../assets/ab-img.png";

const AboutPage = () => {
  return (
    <Container>
      <ImageContainer>
        <img src={AbImage} alt="About Page" />
      </ImageContainer>
      <TextContainer>
        <div>
          <h1>About Project</h1>
          <p>
            Covid 19 Tracking is a side project by jairajdev as PWA. I have
            passion for creating fully functional web applications with
            intuitive user interface. Currently I'm working on cool stuff like
            Progressive Web App, Service Workers, Push Notification etc.
          </p>
        </div>
      </TextContainer>
    </Container>
  );
};

export default AboutPage;
