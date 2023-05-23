import { FC } from "react";
import blogs from "../../../assets/data/blogs.json";
import BlogsCard from "../../../components/BlogsCard";

const Blogs: FC = () => {
  return (
    <div className="container mx-auto lg:py-20 md:py-10 py-5">
      <h1 className="lg:text-6xl md:text-5xl text-4xl text-center font-bold uppercase my-5 md:mb-20 mb-10">
        Blogs
      </h1>
      <div className="md:grid lg:grid-cols-3 md:grid-cols-2 gap-5 py-4">
        {blogs.map((item: any, i: any) => (
          <BlogsCard key={i} blog={item} />
        ))}
      </div>
    </div>
  );
};

export default Blogs;
