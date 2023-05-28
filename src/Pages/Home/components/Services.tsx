import { FC } from "react";
import ServiceCard from "../../../components/ServiceCard";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/store/store";

const Services: FC = () => {
  const services = useSelector(
    (state: RootState) => state.portfolio.data.services
  );
  if (!services?.length) {
    return <h1>Loading</h1>;
  }
  return (
    <div className="container mx-auto lg:py-20 md:py-10 py-5">
      <h1 className="lg:text-6xl md:text-5xl text-4xl text-center font-bold uppercase my-5 md:mb-20 mb-10">
        Services
      </h1>
      <div className="md:grid lg:grid-cols-4 md:grid-cols-2 gap-5 py-4">
        {services.map((item: any, i: any) => (
          <ServiceCard item={item} key={i} />
        ))}
      </div>
    </div>
  );
};

export default Services;
