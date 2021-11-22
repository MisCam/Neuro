import React from "react";

import PageLayout from "../PageLayout";
import PageInfo from "../PageInfo";
import { TEXT_COLOR, TITLE_SIZE } from "../PageInfo/PageInfo";

import Photo from "../../assets/Bubbles.png";
import Wave from "../../assets/GreenWave.png";

import styles from "./HowWeDoIt.module.css";

const HowWeDoIt = (): React.ReactElement => (
  <div className={styles.container}>
    <PageLayout>
      <img className={styles.photo} src={Photo} />
      <div className={styles.wave}>
        <img src={Wave} />
      </div>
      <PageInfo
        titleSize={TITLE_SIZE.font40px}
        title={"There’s a science to the science."}
        top={198}
        left={120}
        width={440}
        description={
          'We have gone through dozens of formulations, processes and tests to ensure each gum and mint we make delivers on our promise of getting you in the right state at the right time.'
        }
        button_color={'bottom_green'}
        fontStyle={TEXT_COLOR.white_font}
        button_text={'How we do it'}
        size={'w150h40'}
      />
    </PageLayout>
  </div>
);

export default HowWeDoIt;