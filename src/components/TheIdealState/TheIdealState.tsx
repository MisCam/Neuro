import React from "react";

import PageLayout from "../PageLayout";
import PageInfo from "../PageInfo";
import { TEXT_COLOR, TITLE_SIZE } from "../PageInfo/PageInfo";

import Photo from "../../assets/Pills.png";

import styles from "./TheIdealState.module.css";

const TheIdealState = (): React.ReactElement => (
  <div className={styles.container}>
    <PageLayout>
      <img className={styles.photo} src={Photo} />
      <PageInfo
        titleSize={TITLE_SIZE.font40px}
        title={"The Ideal State"}
        top={261}
        right={186}
        width={418}
        description={
          'Some days, getting in the zone requires a boost – other days, we need to take it down a notch. Balance the ups and downs of your ambition with a combo pack of Energy & Focus and Calm & Clarity.'
        }
        button_color={'black'}
        fontStyle={TEXT_COLOR.black_font}
        button_text={'SHOP NOW'}
        size={'normal'}
      />
    </PageLayout>
  </div>
);

export default TheIdealState;

