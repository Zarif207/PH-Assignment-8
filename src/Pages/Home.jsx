import React from "react";
import Banner from "./Banner";
import { Link } from "react-router";
import Products from "./Products";
import ProductCard from "../Components/ProductCard";
import useProducts from "../Hooks/useProducts";

const Home = () => {

  const { apps, loading, error } = useProducts();

  const featuredProducts = apps.slice(0,8)

  
  return (
    <div>
      <Banner></Banner>

      <div>
        <div>
          <div className="justify-center text-center pt-20">
            <h2 className="text-4xl font-semibold">Trending Apps</h2>
            <p className="text-[#637382] pt-4">
              Explore All Trending Apps on the Market developed by us
            </p>
          </div> 

          

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 px-20 py-10">
            {featuredProducts.map((app) => (
              <ProductCard key={app.id} app={app}></ProductCard>
            ))}
          </div>

          <div className="flex justify-center items-center pt-2 pb-17">
            <Link to='/products' className="btn rounded-[4px] bg-[linear-gradient(125.07deg,rgba(99,46,227,1),rgba(159,98,242,1)100%)] text-white px-4 flex justify-center items-center gap-2 w-[140px]">See All</Link>
          </div>
 
        </div> 
      </div>
    </div>
  );
};

export default Home;
