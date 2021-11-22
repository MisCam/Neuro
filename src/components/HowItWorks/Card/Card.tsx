import React from "react";

import cn from "clsx";
import Button from "../../Button";
import Icon from "../../Icon";
import { ICON_HEIGHT } from "../../Icon/Icon";
import {
  BUTTON_BACKGROUND,
  BUTTON_BORDER,
  BUTTON_BORDER_RADIUS,
  BUTTON_SIZE,
  BUTTON_FONT,
} from "../../Button/Button";

import styles from "./Card.module.css";

export const CARD_BG = {
  pink: styles.pink_bg,
  blue: styles.blue_bg,
  light_blue: styles.light_blue_bg,
} as const;

export const CARD_COLOR = {
    white: styles.white_color,
    blue: styles.blue_color,
    body_color: styles.body_color,
} as const;
  
type CardBg = typeof CARD_BG[keyof typeof CARD_BG];
type CardColor = typeof CARD_COLOR[keyof typeof CARD_COLOR];

type CardProps = {
  background_color: CardBg;
  color: CardColor;
  text: string;
  image: string;
};

const Card = (props: CardProps): React.ReactElement => {
  return (
    <div className={cn(styles.card, props.background_color)}>
      <Icon image={props.image} width={ICON_HEIGHT.h30}/>
      <label className={cn(styles.text, props.color)}>{props.text}</label>
      <Button
        text={"SHOP NOW"}
        background_color={BUTTON_BACKGROUND.white_solid}
        border_color={BUTTON_BORDER.black_border}
        border_radius={BUTTON_BORDER_RADIUS.b0px}
        font={BUTTON_FONT.black_font}
        size={BUTTON_SIZE.w182h36}
      />
    </div>
  );
};

export default Card;
