import { Avatar, Card, Rating } from "flowbite-react";
import { FC } from "react";

const ReviewCard: FC<any> = ({ item }) => {
  return (
    <Card className="">
      <div className="flex flex-col items-center pb-10">
        <Avatar rounded />
        <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white capitalize">
          {item.name}
        </h5>
        <div>
          <Rating>
            {Array.from({ length: item.rate }).map((e: any, i: any) => (
              <span className="busterCards" key={i}>
                <Rating.Star />
              </span>
            ))}
          </Rating>
        </div>
        <div className="mt-4 flex space-x-3 lg:mt-6 text-xs h-20 overflow-scroll review-message">
          <p>{item.message}</p>
        </div>
      </div>
    </Card>
  );
};

export default ReviewCard;
