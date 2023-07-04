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

const FirstStep: React.FC<{}> = () => {
  return (
    <div className="flex flex-col gap-2">
      <h1 className="font-ubuntu-bold text-2xl text-custom-denim">
        Personal info
      </h1>
      <p className="text-custom-grey-500 font-ubuntu-regular text-base">
        Please provide your name, email address, and phone number.
      </p>
    </div>
  );
};

export default function Home() {
  const [number, setNumber] = useState(1);
  return (
    <main className="flex min-h-screen flex-col  items-center bg-mobile-background bg-top bg-no-repeat bg-contain sm:bg-none gap-9 sm:justify-center">
      <StepsIndicator className="sm:hidden">
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
      <div className="bg-white rounded-xl w-[90%] h-auto justify-center sm:justify-normal flex items-center py-6 px-4 sm:max-w-[960px] sm:max-h-[600px] sm:p-3">
        <div className="hidden sm:flex flex-col sm:bg-desktop-background sm:h-[568px] w-[274px]">
          <StepsIndicator className="hidden sm:flex sm:flex-col">
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
        </div>
        {number === 1 && <FirstStep />}
        {number === 2 && <div>2</div>}
        {number === 3 && <div>3</div>}
        {number === 4 && <div>4</div>}
      </div>
      <div className="fixed bottom-0 w-full h-[72px] bg-white sm:hidden"></div>
    </main>
  );
}
