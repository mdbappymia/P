import { Card } from "flowbite-react";
import { FC } from "react";

const ServiceCard: FC<any> = ({ item }) => {
  return (
    <div className="text-center">
      <Card className="h-72 hover:scale-105 transition-all">
        <div className="flex justify-center items-center">
          <h1 className="text-4xl">
            <i className={item.icon}></i>
          </h1>
        </div>
        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {item.name}
        </h5>
        <p className="font-normal text-gray-700 dark:text-gray-400">
          {item.description}
        </p>
      </Card>
    </div>
  );
};

export default ServiceCard;
