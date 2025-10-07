import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const MasonaryGrid = () => {
  return (
    <div className='min-h-screen  max-w-4xl mx-auto pt-20 pb-10 px-4'>
      <Header />

      <div className='grid grid-cols-4 gap-4 my-10 border bg-neutral-100 backdrop-blur-3xl border-neutral-200 rounded-3xl px-2 mask-b-from-80%'>
        <Column>
          <Card
            src='/images/img1.png'
            className='rounded-tl-[calc(24px-8px)]'
            alt='Card1'
            href='https://www.v0.dev'
          />
          <Card
            src='/images/img2.png'
            alt='Card 2'
            href='https://www.adidas.com'
          />
          <Card
            src='/images/img3.png'
            alt='Card 3'
            href='https://www.resend.dev'
          />
        </Column>
        <Column>
          <Card
            src='/images/img4.png'
            alt='Card 4'
            href='https://www.producthogs.com'
          />
          <Card
            src='/images/img5.png'
            alt='Card 5'
            href='https://www.producthunt.com'
          />
          <Card
            src='/images/img6.png'
            alt='Card 6'
            href='https://www.redis.com'
          />
          <Card
            src='/images/img7.png'
            alt='Card 7'
            href='https://www.shadcn.com'
          />
        </Column>
        <Column>
          <Card
            src='/images/img8.png'
            alt='Card 8'
            href='https://www.tailwindcss.com'
          />
          <Card
            src='/images/img9.png'
            alt='Card 9'
            href='https://www.urbancompany.com'
          />
          <Card
            src='/images/img10.png'
            alt='Card 10'
            href='https://www.thefreeman.com'
          />
        </Column>
        <Column>
          <Card
            src='/images/img11.png'
            alt='Card 11'
            className='rounded-tr-[calc(24px-8px)]'
            href='https://www.nike.com'
          />
          <Card
            src='/images/img12.png'
            alt='Card 12'
            href='https://www.apple.com'
          />
          <Card
            src='/images/img13.png'
            alt='Card 13'
            href='https://www.appleairpodes.com'
          />
          <Card
            src='/images/img8.png'
            alt='Card 14'
            className='rounded-br-[calc(24px-8px)]'
            href='https://www.vercel.com'
          />
        </Column>
      </div>
    </div>
  );
};

export default MasonaryGrid;

const Column = ({ children }: { children: React.ReactNode }) => {
  return <div>{children}</div>;
};

const Card = ({
  src,
  alt,
  href,
  className,
}: {
  src: string;
  alt: string;
  href: string;
  className?: string;
}) => {
  return (
    <Link
      href={href}
      className={cn(
        'block relative rounded-md my-2 overflow-hidden shadow-lg after:content-[""] after:w-full after:bg-black after:absolute after:inset-0 after:opacity-5 after:transition-opacity hover:after:opacity-50 after:duration-300 after:ease-out group',
        className
      )}>
      <Image
        src={src}
        alt={alt}
        height={500}
        width={500}
        className={cn(
          "h-full transition-transform duration-200 ease-out group-hover:scale-105",
          className
        )}
      />
      <div className='flex items-center justify-center absolute inset-0 z-10 text-neutral-100 font-medium opacity-0 transition-opacity duration-300 ease-out group-hover:opacity-90'>
        {href.split(".")[1]}
      </div>
    </Link>
  );
};

const Header = () => {
  return (
    <>
      <h1 className='text-4xl tracking-tight font-bold  text-transparent  bg-clip-text bg-gradient-to-b from-neutral-700 to-neutral-500 '>
        Bento grids are cool, you should try it sometimes
      </h1>
      <p className='text-sm  tracking-tight leading-4 max-w-3xl mt-4 text-neutral-500'>
        Bento grids are a great way to display a collection of items in a grid
        layout. They are especially useful for displaying a collection of
        images, videos, or other media. You can customize the number of columns
        and the spacing between them to create a visually appealing layout.
      </p>
    </>
  );
};
