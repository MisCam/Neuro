import React from "react";

import PageLayout from "../PageLayout";

import styles from "./Share.module.css";

const Share = (): React.ReactElement => (
  <div className={styles.container}>
    <PageLayout>
      <main>
        <label className={styles.title}>Doing more with Neuro?</label>
        <label className={styles.text}>
          Share what you’ve accomplished with Neuro in your pocket and in your
          corner.
        </label>
      </main>
    </PageLayout>
  </div>
);

export default Share;
