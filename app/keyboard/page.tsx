"use client";
import React from "react";
//create a keyboard keys array row wise on macbook with their icons from lucide or svg icons

const KeyboardMac = () => {
  return (
    <div className='bg-neutral-900 h-screen w-screen text-center p-5'>
      <h1 className='text-6xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-b from-white to-neutral-500'>
        Mac Keyboard
      </h1>

      <div className='max-w-6xl w-full rounded-lg bg-neutral-700 mx-auto mt-10 min-h-[500px]'>
        {/* Keyboard skeleton */}
      </div>
    </div>
  );
};

export default KeyboardMac;
