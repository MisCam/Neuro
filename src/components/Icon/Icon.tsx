import React from "react";

import styles from "./Icon.module.css";

export const ICON_HEIGHT = {
    h25: styles.h20,
    h30: styles.h32,
    original: ''
} as const;

type IconHeight = typeof ICON_HEIGHT[keyof typeof ICON_HEIGHT];

type IconProps = {
    width: IconHeight;
    image: string;
}

const Icon = (props : IconProps): React.ReactElement => (
  <div className={props.width}>
      {
          console.log(props.width)
          
      }
    <img src={props.image}/>
  </div>
);

export default Icon;
