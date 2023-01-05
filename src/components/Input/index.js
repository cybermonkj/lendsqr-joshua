import { ErrorMessage } from "../../components/ErrorMessage";
import React from "react";
import PropTypes from "prop-types";

const variants = {
  OutlineIndigo8006c:
    "bg-white_A700_6c border border-indigo_800_6c border-solid",
  OutlineBluegray60026:
    "bg-white_A700 border-2 border-bluegray_600_26 border-solid",
};
const shapes = {
  RoundedBorder8: "rounded-radius8",
  RoundedBorder5: "rounded-radius5",
};
const sizes = {
  sm: "sm:pb-[11px] md:pb-[15px] pb-[22px] md:pt-[11px] pt-[16px] sm:pt-[8px] md:px-[11px] sm:px-[15px] px-[16px]",
  md: "md:p-[11px] p-[16px] sm:px-[15px] sm:py-[8px]",
};

const Input = React.forwardRef(
  (
    {
      wrapClassName = "",
      className = "",
      name,
      placeholder,
      type = "text",
      children,
      errors = [],
      label = "",
      prefix,
      suffix,
      shape,
      variant,
      size,
      ...restProps
    },
    ref
  ) => {
    return (
      <>
        <div
          className={`${wrapClassName} ${shapes[shape] || ""} ${
            variants[variant] || ""
          } ${sizes[size] || ""}`}
        >
          {!!label && label}
          {!!prefix && prefix}
          <input
            ref={ref}
            className={`${className} bg-transparent border-0`}
            type={type}
            name={name}
            placeholder={placeholder}
            {...restProps}
          />
          {!!suffix && suffix}
        </div>
        {!!errors && <ErrorMessage errors={errors} />}
      </>
    );
  }
);

Input.propTypes = {
  wrapClassName: PropTypes.string,
  className: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  shape: PropTypes.oneOf(["RoundedBorder8", "RoundedBorder5"]),
  variant: PropTypes.oneOf(["OutlineIndigo8006c", "OutlineBluegray60026"]),
  size: PropTypes.oneOf(["sm", "md"]),
};
Input.defaultProps = {
  wrapClassName: "",
  className: "",
  name: "",
  placeholder: "",
  type: "text",
  shape: "RoundedBorder8",
  variant: "OutlineIndigo8006c",
  size: "sm",
};

export { Input };
