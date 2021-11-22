import React from "react";

import PageLayout from "../PageLayout";
import PageInfo from "../PageInfo";
import { TEXT_COLOR, TITLE_SIZE } from "../PageInfo/PageInfo";

import Photo from "../../assets/EnergyAndFocus.png";
import Wave from "../../assets/BlueWave.png";

import styles from "./EnergyAndFocus.module.css";

const EnergyAndFocus = (): React.ReactElement => (
  <div className={styles.container}>
    <PageLayout>
      <div className={styles.wave}>
        <img src={Wave} />
      </div>
      <img className={styles.photo} src={Photo} />
      <PageInfo
        title={"Energy"}
        titleSize={TITLE_SIZE.font55px}
        subTitle={"& Focus"}
        top={319}
        right={122}
        width={410}
        colorText={"Peppermint"}
        description={
          'Specially formulated with natural caffeine, L-theanine and B-vitamins to sustain the mental endurance necessary to maintain your focus.*'
        }
        button_color={'white'}
        colors={'red&blue'}
        fontStyle={TEXT_COLOR.white_font}
        button_text={'SHOP'}
        size={'normal'}
      />
    </PageLayout>
  </div>
);

export default EnergyAndFocus;
