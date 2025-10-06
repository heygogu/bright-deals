import { cn } from "@/lib/utils";
import { div } from "framer-motion/client";
import React from "react";

export default function BestForm() {
  return (
    <div className='h-screen bg-gray-50 max-w-5xl mx-auto px-4'>
      <div className=' flex flex-col h-full items-center justify-center'>
        <h1 className='text-5xl tracking-tight p-2 bg-clip-text text-transparent font-bold text-center bg-gradient-to-b from-neutral-800 to-neutral-500 text-shadow-neutral-200'>
          This is a
          <span className="after:content-[''] relative after:absolute after:w-full after:bg-red-500 after:inset-0 p-1 mx-2 px-1 z-10 after:-z-1 text-white after:-skew-3 ">
            crazy
          </span>
          good form
        </h1>
        <div className=' mt-10 space-y-8 border mx-auto w-full max-w-2xl rounded-lg p-15'>
          {/* create form with email, name,password and descrition(input only) using group label and input */}
          <Group>
            <Label htmlFor='email'>Email</Label>
            <Input id='email' />
          </Group>

          <Group>
            <Label htmlFor='name'>Name</Label>
            <Input id='name' />
          </Group>

          <Group>
            <Label htmlFor='password'>Password</Label>
            <Input id='password' />
          </Group>

          <Group>
            <Label htmlFor='description'>Description</Label>
            <Input id='description' />
          </Group>

          <button
            className='relative w-full px-4 py-3 rounded-lg bg-neutral-900 text-neutral-50 font-medium text-center
            overflow-hidden cursor-pointer transition-all duration-300 ease-out
            hover:-translate-y-1 active:scale-95
            after:content-[""] after:absolute after:inset-0 after:w-[150%] after:h-full
            after:bg-neutral-700/50 after:rotate-[25deg] after:-translate-x-[120%]
            after:transition-all after:duration-500 after:ease-out
            hover:after:translate-x-[100%]'>
            Click here to submit
          </button>
        </div>
      </div>
    </div>
  );
}

const Group = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='flex flex-col gap-2 items-start w-full'>{children}</div>
  );
};

const Label = ({
  children,
  className,
  ...props
}: React.LabelHTMLAttributes<HTMLLabelElement> & {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <label
      {...props}
      className={cn(
        "relative font-medium flex flex-col items-center justify-center after:content-['*'] after:absolute after:text-red-500 after:-right-3 text-md",
        className
      )}>
      {children}
    </label>
  );
};

const Input = ({
  className,
  ...props
}: React.InputHTMLAttributes<HTMLInputElement> & {
  className?: string;
}) => {
  return (
    <input
      {...props}
      className={cn(
        "relative focus:outline-none border  border-neutral-200 p-2 focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 w-full rounded-md placeholder:text-gray-200 text-black text-md",
        className
      )}></input>
  );
};
