import { FC } from "react";
import service from "../../../assets/data/service.json";
import ServiceCard from "../../../components/ServiceCard";

const Services: FC = () => {
  return (
    <div className="container mx-auto lg:py-20 md:py-10 py-5">
      <h1 className="lg:text-6xl md:text-5xl text-4xl text-center font-bold uppercase my-5 md:mb-20 mb-10">
        Services
      </h1>
      <div className="md:grid lg:grid-cols-4 md:grid-cols-2 gap-5 py-4">
        {service.map((item, i) => (
          <ServiceCard item={item} key={i} />
        ))}
      </div>
    </div>
  );
};

export default Services;
