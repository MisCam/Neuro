import React from "react";

import cn from "clsx";

import styles from "./Button.module.css";

export const BUTTON_BACKGROUND = {
  black_solid: styles.black_solid,
  white_solid: styles.white_solid,
  transparent: styles.transparent_button,
  border_bottom: styles.border_bottom,
} as const;

export const BUTTON_BORDER = {
  white_border: styles.white_border,
  black_border: styles.black_border,
  green_bottom_border: styles.green_bottom_border,
  black_bottom_border: styles.black_bottom_border,
  transparent: styles.transparent_border,
  body_color_border: styles.body_color_border,
} as const;

export const BUTTON_FONT = {
    white_font: styles.white_font,
    black_font: styles.black_font,
    green_font: styles.green_font,
    body_color_font: styles.body_color_font,
  } as const;

export const BUTTON_BORDER_RADIUS = {
  b5px: styles.normal_border_radius,
  b2px: styles.small_border_radius,
  b0px: styles.no_border_radius,
} as const;

export const BUTTON_SIZE = {
    w260h52: styles.w260h52,
    w182h36: styles.w182h36,
    w167h40: styles.w167h40,
    w150h40: styles.w150h40,
    w120h40: styles.w120h40,
} as const;

type ButtonBackground = typeof BUTTON_BACKGROUND[keyof typeof BUTTON_BACKGROUND];
type ButtonBorder = typeof BUTTON_BORDER[keyof typeof BUTTON_BORDER];
type ButtonFont = typeof BUTTON_FONT[keyof typeof BUTTON_FONT];
type ButtonBorderRadius = typeof BUTTON_BORDER_RADIUS[keyof typeof BUTTON_BORDER_RADIUS];
type ButtonSize = typeof BUTTON_SIZE[keyof typeof BUTTON_SIZE];

type ButtonProps = {
  text: string;
  background_color: ButtonBackground;
  border_color: ButtonBorder;
  border_radius: ButtonBorderRadius;
  size: ButtonSize;
  font: ButtonFont;
};

const Button = (props: ButtonProps): React.ReactElement => (
  <button
    className={cn(
      props.background_color,
      props.border_color,
      props.border_radius,
      props.size,
      props.font
    )}
  >
    {props.text}
  </button>
);

export default Button;
