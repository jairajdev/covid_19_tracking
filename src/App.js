import React, { useState, lazy, Suspense, useCallback } from "react";
import { Router } from "@reach/router";
import { ThemeProvider } from "emotion-theming";
import { Helmet } from "react-helmet";
import Spinner from "./Containers/Spinner/index";
import NavBar from "./Containers/NavBar/index";

const Covid = lazy(() => import("./Containers/CovidPage/index"));

const Global = lazy(() => import("./Containers/GlobalPage/index"));

const About = lazy(() => import("./Containers/AboutPage/index"));

const CovidPage = () => (
  <Suspense fallback={<Spinner />}>
    <Covid />
  </Suspense>
);

const GlobalPage = () => (
  <Suspense fallback={<Spinner />}>
    <Global />
  </Suspense>
);

const AboutPage = () => (
  <Suspense fallback={<Spinner />}>
    <About />
  </Suspense>
);

const App = () => {
  const LightTheme = {
    bg: "#e5e5e5",
    fontColor: "#464646",
    accentColor: "#0bceaf",
    projectColor: "#ffffff",
    projectShadow: "#00000015",
    projectShadowHover: "#b8b8d9",
  };

  const DarkTheme = {
    bg: "#100e17",
    fontColor: "#ffffff",
    accentColor: "#0bceaf",
    projectColor: "#202026",
    projectShadow: "#000",
    projectShadowHover: "#000100",
  };
  const [isDarkTheme, setDarkTheme] = useState(
    localStorage.getItem("isDarkTheme") === "true"
  );
  const ThemeHandler = useCallback(
    (event) => {
      event.preventDefault();
      setDarkTheme(!isDarkTheme);
      localStorage.setItem("isDarkTheme", !isDarkTheme);
    },
    [isDarkTheme]
  );

  return (
    <ThemeProvider theme={isDarkTheme ? DarkTheme : LightTheme}>
      <div className="App">
        <Helmet>
          <meta charSet="utf-8" />
          <title>Covid 19 Tracking</title>
          <meta name="description" content="Covid 19 Tracking" />
        </Helmet>
        <NavBar {...{ isDarkTheme, ThemeHandler }} />
        <Router>
          <CovidPage path="/" />
          <GlobalPage path="/global" />
          <AboutPage path="/about" />
        </Router>
      </div>
    </ThemeProvider>
  );
};

export default App;
