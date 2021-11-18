import React from "react";

import PageLayout from "../PageLayout";
import Header from "./Header";
import Button from "../Button";
import {
  BUTTON_BACKGROUND,
  BUTTON_BORDER,
  BUTTON_BORDER_RADIUS,
  BUTTON_SIZE,
  BUTTON_FONT
} from "../Button/Button";

import styles from "./Intro.module.css";

const Intro = (): React.ReactElement => (
  <div className={styles.container}>
    <PageLayout>
      <Header></Header>
      <div className={styles.welcome_text}>
        <label className={styles.title}>
          Health in <div>your pocket.</div>
        </label>
        <label className={styles.text}>
          Functional gum and mints to energize, calm and focus you in the
          moment.
        </label>
        <Button
          size={BUTTON_SIZE.normal}
          font={BUTTON_FONT.white_font}
          border_radius={BUTTON_BORDER_RADIUS.b2px}
          border_color={BUTTON_BORDER.transparent}
          background_color={BUTTON_BACKGROUND.black_solid}
          text="SHOP"
        ></Button>
      </div>
    </PageLayout>
  </div>
);

export default Intro;
