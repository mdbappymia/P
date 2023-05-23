import { Card } from "flowbite-react";
import { FC } from "react";
import { MdWeb } from "react-icons/md";

const ServiceCard: FC<any> = ({ item }) => {
  return (
    <div className="text-center">
      <Card>
        <div className="flex justify-center items-center">
          <MdWeb className="text-5xl" />
        </div>
        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {item.name}
        </h5>
        <p className="font-normal text-gray-700 dark:text-gray-400">
          Here are the biggest enterprise technology acquisitions of 2021 so
          far, in reverse chronological order.
        </p>
      </Card>
    </div>
  );
};

export default ServiceCard;
