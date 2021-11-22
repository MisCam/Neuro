import React from "react";

import PageLayout from "../PageLayout";
import Card from "./Card";
import { CARD_COLOR, CARD_BG } from "./Card/Card";

import Scheme from "../../assets/Scheme.png";
import Loading from "../../assets/Loading.png";
import Sun from "../../assets/Sun.png";
import SunAndLoading from "../../assets/SunAndLoading.png";

import styles from "./HowItWorks.module.css";

const HowItWorks = (): React.ReactElement => {
  return (
    <div className={styles.container}>
      <PageLayout>
        <div className={styles.our_product}>
          <label className={styles.title}>We get the mental game.</label>
          <label className={styles.discription}>
            That’s why we create products to help shift your mindset with ease
            and flow. Our functional gum and mints are shortcuts to the ideal
            state of mind, delivering just the right amount of what you need to
            energize, calm and focus your mind in the moment.
          </label>
        </div>
        <div className={styles.scheme}>
          <img src={Scheme} />
        </div>
        <div className={styles.products}>
          <label className={styles.title}>Shop by function</label>
          <label className={styles.find}>
            Find the right products for any situation.
          </label>
          <div className={styles.cards}>
            <Card
              image={Loading}
              color={CARD_COLOR.white}
              background_color={CARD_BG.blue}
              text={"Energy & Focus"}
            />
            <Card
              image={Sun}
              color={CARD_COLOR.body_color}
              background_color={CARD_BG.pink}
              text={"Calm & Clarity"}
            />
            <Card
              image={SunAndLoading}
              color={CARD_COLOR.blue}
              background_color={CARD_BG.light_blue}
              text={"Ideal State"}
            />
          </div>
        </div>
      </PageLayout>
    </div>
  );
};

export default HowItWorks;
