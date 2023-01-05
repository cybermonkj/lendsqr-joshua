import React from "react";
import PropTypes from "prop-types";

const shapes = {
  RoundedBorder15: "rounded-radius1554",
  RoundedBorder6: "rounded-radius6",
  icbCircleBorder20: "rounded-radius20",
};
const variants = {
  FillBluegray6005f: "bg-bluegray_600_5f text-bluegray_600",
  OutlineLightblue100:
    "bg-light_blue_900 border border-light_blue_100 border-solid text-gray_51",
  FillCyan400: "bg-cyan_400 text-white_A700",
  FillLightblue900: "bg-light_blue_900 text-gray_51",
  FillAmber60063: "bg-amber_600_63 text-amber_600",
  FillPinkA40063: "bg-pink_A400_63 text-pink_A400",
  FillGreen5005f: "bg-green_500_5f text-green_500",
  FillIndigo80019: "bg-indigo_800_19 text-indigo_800",
  OutlineBluegray600:
    "border border-bluegray_600 border-solid text-bluegray_600",
  OutlineCyan400:
    "bg-cyan_400 border border-cyan_400 border-solid text-white_A700",
  OutlinePinkA400: "border border-pink_A400 border-solid text-pink_A400",
  OutlineCyan400_1: "border border-cyan_400 border-solid text-cyan_400",
  icbFillPurpleA40063: "bg-purple_A400_63",
  icbFillDeeppurpleA40063: "bg-deep_purple_A400_63",
  icbFillRed40063: "bg-red_400_63",
};
const sizes = {
  sm: "sm:p-[3px] md:p-[4px] p-[7px]",
  md: "p-[11px] sm:p-[5px] md:p-[7px]",
  lg: "md:p-[10px] p-[15px] sm:p-[7px]",
  xl: "md:p-[13px] p-[20px] sm:px-[15px] sm:py-[10px]",
  smIcn: "sm:p-[4px] md:p-[6px] p-[9px]",
};

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape,
  variant,
  size,
  ...restProps
}) => {
  return (
    <button
      className={`${className} ${shapes[shape] || ""} ${
        variants[variant] || ""
      } ${sizes[size] || ""} `}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  shape: PropTypes.oneOf([
    "RoundedBorder15",
    "RoundedBorder6",
    "icbCircleBorder20",
  ]),
  variant: PropTypes.oneOf([
    "FillBluegray6005f",
    "OutlineLightblue100",
    "FillCyan400",
    "FillLightblue900",
    "FillAmber60063",
    "FillPinkA40063",
    "FillGreen5005f",
    "FillIndigo80019",
    "OutlineBluegray600",
    "OutlineCyan400",
    "OutlinePinkA400",
    "OutlineCyan400_1",
    "icbFillPurpleA40063",
    "icbFillDeeppurpleA40063",
    "icbFillRed40063",
  ]),
  size: PropTypes.oneOf(["sm", "md", "lg", "xl", "smIcn"]),
};
Button.defaultProps = { className: "", shape: "", variant: "", size: "" };

export { Button };
