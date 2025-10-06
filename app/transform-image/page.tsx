import React from "react";

const TransformImage = () => {
  return (
    <div className='h-screen bg-neutral-200/50 flex justify-center items-center'>
      <div className='h-[400px] w-[1000px] bg-neutral-200 flex justify-center items-center bg-[radial-gradient(black_1px,transparent_1px)] [background-size:20px_20px] rounded-2xl border border-neutral-200 group'>
        <div
          className='p-2  bg-[radial-gradient(black_1px,transparent_1px)] [background-size:20px_20px] rounded-xl shadow-2xl  
          perspective-[1000px] transform-3d size-60 
          '>
          {/* //will insert an image here */}
          <img
            src='https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=1064&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
            alt='image'
            className='w-full h-full object-cover transform rotate-x-30 -rotate-y-20 rotate-z-20 translate-z-22 rounded-2xl group-hover:scale-110 group-hover:rotate-x-0 group-hover:rotate-y-0 group-hover:rotate-z-0 group-hover:translate-z-0
            transition-all duration-100 ease-in-out'
          />
        </div>
      </div>
    </div>
  );
};

export default TransformImage;
