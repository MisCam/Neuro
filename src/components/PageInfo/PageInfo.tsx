import React from "react";

import Button from "../Button";
import cn from "clsx";
import {
  BUTTON_BACKGROUND,
  BUTTON_BORDER,
  BUTTON_BORDER_RADIUS,
  BUTTON_SIZE,
  BUTTON_FONT,
} from "../Button/Button";

import styles from "./PageInfo.module.css";

export const TEXT_COLOR = {
  white_font: styles.white_font,
  black_font: styles.black_font,
  body_color_font: styles.body_color_font,
} as const;

export const TITLE_SIZE = {
  font55px: styles.font55px,
  font40px: styles.font40px,
} as const;

type TitleSize = typeof TITLE_SIZE[keyof typeof TITLE_SIZE];
type TextColor = typeof TEXT_COLOR[keyof typeof TEXT_COLOR];

type PageInfoProps = {
  title: string;
  titleSize: TitleSize;
  subTitle?: string;
  colorText?: string;
  fontStyle: TextColor;
  description: string;
  top: number;
  right?: number;
  left?: number;
  width: number;
  button_color:
    | "white"
    | "black"
    | "body_color"
    | "bottom_black"
    | "bottom_green";
  colors?: "red&blue" | "orange";
  size: "w150h40" | "w120h40" | "normal";
  button_text: string;
};

const PageInfo = (props: PageInfoProps): React.ReactElement => {
  let styleObject = {};
  if (props.right) {
    styleObject = {
      top: `${props.top}px`,
      right: `${props.right}px`,
      width: `${props.width}px`,
    };
  } else {
    styleObject = {
      top: `${props.top}px`,
      left: `${props.left}px`,
      width: `${props.width}px`,
    };
  }
  const size =
    props.size === "w150h40"
      ? BUTTON_SIZE.w150h40
      : props.size === "normal"
      ? BUTTON_SIZE.w260h52
      : BUTTON_SIZE.w120h40;
  const font =
    props.button_color === "white"
      ? BUTTON_FONT.white_font
      : props.button_color === "black"
      ? BUTTON_FONT.black_font
      : props.button_color === "bottom_black"
      ? BUTTON_FONT.black_font
      : props.button_color === "bottom_green"
      ? BUTTON_FONT.green_font
      : BUTTON_FONT.body_color_font;
  const border =
    props.button_color === "white"
      ? BUTTON_BORDER.white_border
      : props.button_color === "black"
      ? BUTTON_BORDER.black_border
      : props.button_color === "bottom_black"
      ? BUTTON_BORDER.black_bottom_border
      : props.button_color === "bottom_green"
      ? BUTTON_BORDER.green_bottom_border
      : BUTTON_BORDER.body_color_border;
  return (
    <div className={styles.text} style={styleObject}>
      <div className={cn(styles.title, props.fontStyle)}>
        {props.subTitle ? (
          <div className={props.titleSize}>
            {props.title}
            <div>{props.subTitle}</div>
          </div>
        ) : (
          <div className={props.titleSize}>{props.title}</div>
        )}
      </div>
      <div className={cn(styles.description, props.fontStyle)}>
        {props.description}
      </div>
      {props.colors ? (
        <div className={cn(styles.colors, props.fontStyle)}>
          {props.colors === "red&blue" ? (
            <div className={styles.blocks}>
              <div className={cn(styles.color_block1, styles.blue_block)}></div>
              <div className={cn(styles.color_block2, styles.red_block)}></div>
            </div>
          ) : (
            <div className={styles.blocks}>
              <div
                className={cn(styles.color_block1, styles.brown_block)}
              ></div>
              <div
                className={cn(styles.color_block2, styles.orange_block)}
              ></div>
            </div>
          )}
          <div className={props.fontStyle}>{props.colorText}</div>
        </div>
      ) : (
        <div></div>
      )}
      <Button
        background_color={BUTTON_BACKGROUND.transparent}
        border_color={border}
        border_radius={BUTTON_BORDER_RADIUS.b2px}
        size={size}
        font={font}
        text={props.button_text}
      ></Button>
    </div>
  );
};

export default PageInfo;
