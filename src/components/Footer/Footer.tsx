import React from "react";

import PageLayout from "../PageLayout";
import Button from "../Button";
import {
  BUTTON_BACKGROUND,
  BUTTON_BORDER,
  BUTTON_BORDER_RADIUS,
  BUTTON_SIZE,
  BUTTON_FONT
} from "../Button/Button";

import styles from "./Footer.module.css";

const Footer = (): React.ReactElement => (
  <div className={styles.container}>
    <PageLayout>
      <div className={styles.text_block}>
        <label className={styles.title}>
            Refresh your<div>state of mind.</div>
        </label>
        <Button
          size={BUTTON_SIZE.w260h52}
          font={BUTTON_FONT.white_font}
          border_radius={BUTTON_BORDER_RADIUS.b2px}
          border_color={BUTTON_BORDER.transparent}
          background_color={BUTTON_BACKGROUND.black_solid}
          text="Get Neuro"
        ></Button>
      </div>
    </PageLayout>
  </div>
);

export default Footer;
