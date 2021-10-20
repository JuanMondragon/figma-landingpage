import React from "react";
import Image from "next/image";
import { Customerdata } from "./customerdata";
import { BadgeCheckIcon } from "@heroicons/react/outline";

function Customer() {
  return (
    <div className="capitalize">
      {Customerdata.map((post) => {
        return (
          <div className="responsive pb-8 pt-8">
            <Image
              className="rounded shadow-lg cursor-pointer"
              width={200}
              height={200}
              src={post.image}
            />
            <div className="pt-8 pr-5 pl-5 text-center font-new xl:text-xl ">
              
              <p className="">{post.review}</p>
              <div className="">
             
              <h4 className="pt-5 pr-3 inline">- {post.customer}</h4>
              <BadgeCheckIcon className="h-5 w-5 inline " />

              </div>

              
              
              
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Customer;
