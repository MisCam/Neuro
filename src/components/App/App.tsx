import React from "react";

import "../../styles/fonts.css";
import "../../styles/common.css";

import Button from "../Button";
import {
  BUTTON_BACKGROUND,
  BUTTON_BORDER,
  BUTTON_BORDER_RADIUS,
  BUTTON_SIZE,
  BUTTON_FONT,
} from "../Button/Button";

import Intro from "../Intro";
import HowItWorks from "../HowItWorks";
import EnergyAndFocus from "../EnergyAndFocus";
import CalmAndClarity from "../CalmAndClarity";
import TheIdealState from "../TheIdealState";
import Subscribe from "../Subscribe";
import Mission from "../Mission";
import HowWeDoIt from "../HowWeDoIt";
import Share from "../Share";
import Footer from "../Footer";

function App() {
  return (
    <div>
      <Intro />
      <div className="empty_space"></div>
      <HowItWorks />
      <EnergyAndFocus />
      <CalmAndClarity />
      <TheIdealState />
      <Subscribe />
      <Mission />
      <HowWeDoIt />
      <Share />
      <Footer />
      <div className="cookies">
        <div className="text">
          <label>
            We use cookies to enhance your experience on our website. By using
            our website, you agree to our privacy policy.
          </label>
          <a>Learn more</a>
        </div>
        <Button
          size={BUTTON_SIZE.w167h40}
          font={BUTTON_FONT.black_font}
          border_radius={BUTTON_BORDER_RADIUS.b5px}
          border_color={BUTTON_BORDER.transparent}
          background_color={BUTTON_BACKGROUND.white_solid}
          text="Get Neuro"
        ></Button>
      </div>
    </div>
  );
}

export default App;
