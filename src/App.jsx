/**
 * Application
 */

import React from "react";

import About from "./Components/About";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Home from "./Components/Home";

import "./styles.css";

/**
 * Site properties
 */
const siteProps = {
  name: "Graeme Benson",
  title: "Data | Development | Stuff Doer",
  email: "hello@graeme.space",
  gitHub: "g-r-a-e-m-e",
  mastodon: "@g_r_a_e_m_e",
  bluesky: "graeme.space",
};

const primaryColor = "#000000";
const secondaryColor = "#000000";

/**
 * Build application
 */
const App = () => {
  return (
    <div id="main">
      <Header />
      <Home name={siteProps.name} title={siteProps.title} />
      <About />
      <Footer {...siteProps} primaryColor={primaryColor} secondaryColor={secondaryColor} />
    </div>
  );
};

export default App;
