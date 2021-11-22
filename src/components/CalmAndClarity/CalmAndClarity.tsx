import React from "react";

import PageLayout from "../PageLayout";
import PageInfo from "../PageInfo";
import { TEXT_COLOR, TITLE_SIZE } from "../PageInfo/PageInfo";

import Photo from "../../assets/CalmAndClarity.png";
import Wave from "../../assets/PinkWave.png";

import styles from "./CalmAndClarity.module.css";

const CalmAndClarity = (): React.ReactElement => (
  <div className={styles.container}>
    <PageLayout>
      <div className={styles.wave}>
        <img src={Wave} />
      </div>
      <img className={styles.photo} src={Photo} />
      <PageInfo
        title={"Calm"}
        titleSize={TITLE_SIZE.font55px}
        subTitle={"& Clarity"}
        top={319}
        left={94}
        width={428}
        colorText={"Ginger Chai"}
        description={
          "Expertly developed with GABA, vitamin D3, and L-theanine to optimize composure and clarity of mind.*"
        }
        button_color={"body_color"}
        colors={"orange"}
        fontStyle={TEXT_COLOR.body_color_font}
        button_text={'SHOP'}
        size={'normal'}
      />
    </PageLayout>
  </div>
);

export default CalmAndClarity;
