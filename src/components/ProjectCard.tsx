import { Button, Card } from "flowbite-react";
import { FC } from "react";

const ProjectCard: FC<any> = ({ item }) => {
  return (
    <div className="max-w-sm">
      <Card
        imgAlt="Meaningful alt text for an image that is not purely decorative"
        imgSrc="https://flowbite.com/docs/images/blog/image-1.jpg"
      >
        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {item.name?.length < 20
            ? item.name
            : item.name?.slice(0, 19) + " ..."}
        </h5>
        <p className="font-normal text-gray-700 dark:text-gray-400">
          {item.subtitle?.length < 40
            ? item.subtitle
            : item.subtitle?.slice(0, 39) + " ..."}
        </p>
        <div>
          <Button outline={true} gradientDuoTone="purpleToPink">
            View Details
          </Button>
        </div>
      </Card>
    </div>
  );
};

export default ProjectCard;
