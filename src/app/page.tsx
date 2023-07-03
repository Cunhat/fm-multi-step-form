"use client";
import { cn } from "@/lib/utils";
import { cva } from "class-variance-authority";
import React, { useState } from "react";

const ItemStyles = cva(
  "h-[33px] w-[33px] flex justify-center items-center border border-white rounded-full text-white",
  {
    variants: {
      active: {
        true: "bg-custom-lightBlue border-0 text-custom-denim",
      },
    },
  }
);

interface StepItemProps extends React.HTMLAttributes<HTMLDivElement> {
  active?: boolean;
}

const StepItem: React.FC<StepItemProps> = ({ active, className, ...props }) => (
  <div className={ItemStyles({ active: active })} {...props} />
);

const StepsIndicator = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn("flex gap-4 justify-center items-center pt-8", className)}
    {...props}
  />
);

export default function Home() {
  const [number, setNumber] = useState(1);
  return (
    <main className="flex min-h-screen flex-col items-center bg-mobile-background bg-top bg-no-repeat bg-contain sm:bg-none gap-9">
      <StepsIndicator>
        <StepItem onClick={() => setNumber(1)} active={number === 1}>
          1
        </StepItem>
        <StepItem onClick={() => setNumber(2)} active={number === 2}>
          2
        </StepItem>
        <StepItem onClick={() => setNumber(3)} active={number === 3}>
          3
        </StepItem>
        <StepItem onClick={() => setNumber(4)} active={number === 4}>
          4
        </StepItem>
      </StepsIndicator>
      <div className="bg-white rounded-xl w-[90%] h-[376px] justify-center flex items-center">
        {number}
      </div>
      <div className="fixed bottom-0 w-full h-[72px] bg-white sm:hidden"></div>
    </main>
  );
}
