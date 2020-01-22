import React from "react";
import "./homepage.styles.scss";
import Directory from "../../components/directory/directory.component";
import { HomePageContainer } from "./hompepage.styles";

const HomePage = () => {
  // throw Error;
  return (
    <HomePageContainer>
      <Directory />
    </HomePageContainer>
  );
};

export default HomePage;
