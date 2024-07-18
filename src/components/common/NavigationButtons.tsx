import React from "react";
import { twMerge } from "tailwind-merge";
import { Button } from "../ui/button";

const NavigationButtons = ({
  children,
  type = "link",
  onClick,
  linkProps,
  disabled,
}: {
  children: React.ReactNode;
  type: "link" | "btn";
  onClick?: () => void;
  linkProps?: any;
  disabled?: boolean;
}) => {
  const { to, pathname } = linkProps;
  if (type === "link") {
    return (
      <a
        href={to}
        className={twMerge(
          "flex items-center hover:bg-black/5 rounded-lg py-2 px-4",
          pathname === to && "bg-primary-light"
        )}
      >
        {children}
      </a>
    );
  }

  if (type === "btn") {
    return (
      <Button
        className="w-full justify-start bg-transparent hover:bg-black/5 text-black"
        onClick={onClick}
        disabled={disabled}
        aria-disabled={disabled}
      >
        {children}
      </Button>
    );
  }

  return null;
};

export default NavigationButtons;
