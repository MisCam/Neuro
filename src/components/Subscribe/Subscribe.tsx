import React from "react";

import PageLayout from "../PageLayout";
import PageInfo from "../PageInfo";
import { TEXT_COLOR, TITLE_SIZE } from "../PageInfo/PageInfo";

import Photo from "../../assets/Woman.png";

import styles from "./Subscribe.module.css";

const Subscribe = (): React.ReactElement => (
  <div className={styles.container}>
    <PageLayout>
      <img className={styles.photo} src={Photo} />
      <PageInfo
        titleSize={TITLE_SIZE.font40px}
        title={"In the zone. Every day."}
        top={296}
        right={186}
        width={400}
        description={
          'Never run out of Neuro with a monthly subscription. Members get 10% off and free shipping straight to your door.'
        }
        button_color={'black'}
        fontStyle={TEXT_COLOR.black_font}
        button_text={'SUBSCRIBE'}
        size={'normal'}
      />
    </PageLayout>
  </div>
);

export default Subscribe;