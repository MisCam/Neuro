import React from "react";

import PageLayout from "../PageLayout";
import PageInfo from "../PageInfo";
import { BUTTON_FONT, BUTTON_BORDER } from "../Button/Button";
import { TEXT_COLOR, TITLE_SIZE } from "../PageInfo/PageInfo";

import Photo from "../../assets/Hand.png";

import styles from "./Mission.module.css";

const Mission = (): React.ReactElement => (
  <div className={styles.container}>
    <PageLayout>
      <img className={styles.photo} src={Photo} />
      <PageInfo
        titleSize={TITLE_SIZE.font40px}
        title={"Our Mission"}
        top={248}
        right={130}
        width={430}
        description={
          'We started Neuro out of a desire to do more and become the best versions of ourselves.'
        }
        button_color={'bottom_black'}
        fontStyle={TEXT_COLOR.black_font}
        button_text={'Our Story'}
        size={'w120h40'}
      />
    </PageLayout>
  </div>
);

export default Mission;