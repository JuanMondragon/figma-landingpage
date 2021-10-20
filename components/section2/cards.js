import React from "react";
import Image from "next/image";
import { data } from "./data";

function Cards() {
  return (
    <div className=" bg-contrast lg:-mt-5">
      <h1 className="pt-10 pb-10 uppercase bg-primary text-white underline font-black text-4xl text-montse  ">New Arrivals</h1>
      
      {data.map((post) => {
        return (
          <div className="responsive pb-8 pt-8 border-b border-gray-900 ">
            
            <div className="flex flex-col">
              
              <p className="font-montse text-2xl text-button md:text-3xl font-black">{post.band}:</p>
              <p className="text-lg text-highlight md:text-2xl font-bold pt-2 pb-3">{post.title}</p>
            </div>
            <Image
              className="rounded shadow-xl cursor-pointer"
              width={300}
              height={300}
              src={post.image}
            />
            <p className="text-xl font-bold oldstyle-nums py-3">{post.price}</p>
            <button className="bg-transparent font-new hover:bg-button text-button font-semibold hover:text-white py-2 px-8 md:px-10 lg:px-20 xl:px-28 border border-button hover:border-transparent rounded ">Buy Now</button>
            
          </div>
        );
      })}
    </div>
  );
}

export default Cards;
