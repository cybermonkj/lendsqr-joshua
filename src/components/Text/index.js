import React from "react";
const variantClasses = {
  h1: "font-bold sm:text-[21px] md:text-[27px] text-[40px]",
  h2: "sm:text-[20px] md:text-[22px] text-[24px]",
  h3: "font-medium sm:text-[18px] md:text-[20px] text-[22px]",
  h4: "font-normal text-[20px]",
  h5: "text-[16px]",
  h6: "text-[14px]",
  body1: "text-[12px]",
};
const Text = ({ children, className, variant, as, ...restProps }) => {
  const Component = as || "span";
  return (
    <Component
      className={`${className} ${variantClasses[variant]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
