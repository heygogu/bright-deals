import { cn } from "@/lib/utils";
import { Book, BrainIcon, TrendingDown } from "lucide-react";
import React from "react";

const BentoGrids = () => {
  //just make an array f card and their related content
  //then map over it and render the card
  //and the content
  //and then add the divider
  //start
  const cards = [
    {
      title: "LLM Integration",
      description:
        "LLM integration is a key feature of BentoGrids. It allows you to easily integrate your LLM models into your BentoGrids application.",
      icon: <BrainIcon className='h-8 w-8' />,
    },
    {
      title: "Model Management",
      description:
        "Model Management is a key feature of BentoGrids. This includes creating, updating, and deleting models, as well as managing model versions.",
      icon: <Book className='h-8 w-8' />,
    },
    {
      title: "Model Deployment",
      description:
        "Model Deployment is a key feature of BentoGrids. It allows you to easily deploy your LLM models to various platforms. This includes deploying to your own servers, as well as deploying to cloud platforms like AWS, GCP, and Azure.",
      icon: <TrendingDown className='h-8 w-8' />,
    },
  ];
  return (
    <div className='h-screen bg-neutral-100 flex justify-center items-center'>
      <div className='bg-neutral-50 max-w-5xl mx-auto rounded-lg'>
        <div className='grid grid-cols-1 md:grid-cols-2 divide-x divide-neutral-100 py-20 divide-y'>
          {cards.map((card, index) => (
            <Card key={index}>
              <CardHeader>
                {card.icon}
                <CardTitle>{"Tera kya jarha h "}</CardTitle>
              </CardHeader>
              <CardDescription>{card.description}</CardDescription>
              <CardBody className='bg-neutral-100'>
                <div className='flex gap-2 items-center'></div>
              </CardBody>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BentoGrids;

const Card = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return <div className={cn("bg-white  p-4", className)}>{children}</div>;
};

const CardHeader = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex gap-2 items-center", className)}>{children}</div>
  );
};

const CardTitle = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn(" text-lg font-bold tracking-tight", className)}>
      {children}
    </div>
  );
};

const CardDescription = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("text-base text-neutral-400", className)}>
      {children}
    </div>
  );
};

const CardBody = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return <div className={cn("min-h-40 mt-3", className)}>{children}</div>;
};
