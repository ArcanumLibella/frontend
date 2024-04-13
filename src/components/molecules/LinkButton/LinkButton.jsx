import React from 'react';
import { ArrowLeftIcon, ArrowRightIcon } from "../../../assets/icons";
import { Text } from "../../atoms/Text";
import { COLORS } from "../../../constants/Colors";
import { Link } from "gatsby";

export const LinkButton = ({
  side = "right",
  label,
  path,
  className: additionalStyle,
}) => {
  const handleSideArrow = () => {
    if (side === "left") {
      return (
        <ArrowLeftIcon
          fill={COLORS.white.DEFAULT}
          className="mr-2 transition-all group-hover:-translate-x-1"
        />
      );
    }
    return (
      <ArrowRightIcon
        fill={COLORS.white.DEFAULT}
        className="ml-2 transition-all group-hover:translate-x-1"
      />
    );
  };

  return (
    <Link
      to={path}
      className={`
        flex items-center z-30 group 
        ${side === "left" && "flex-row-reverse"}
        ${additionalStyle}
      `}
    >
      <Text type="h6" className="font-bold text-white uppercase">
        {label}
      </Text>
      {handleSideArrow()}
    </Link>
  );
};
