import React, { Profiler } from "react";
import "./homepage.styles.scss";
import Directory from "../../components/directory/directory.component";
import { HomePageContainer } from "./hompepage.styles";

const HomePage = () => {
  // throw Error;
  return (
    <HomePageContainer>
      <Profiler
        id="Directory"
        onRender={(id, phase, actualDuration) => {
          console.log({
            id,
            phase,
            actualDuration
          });
        }}
      >
        <Directory />
      </Profiler>
    </HomePageContainer>
  );
};

export default HomePage;
