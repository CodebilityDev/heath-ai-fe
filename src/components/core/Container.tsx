import React from "react";
import { twMerge } from "tailwind-merge";

const Container = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div className={twMerge("w-full max-w-6xl mx-auto", className)}>
      {children}
    </div>
  );
};

export default Container;
