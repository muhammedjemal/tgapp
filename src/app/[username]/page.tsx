"use client";

import Link from "next/link";
import { useState } from "react";

// import { usePathname } from "next/navigation";

// const pathname = usePathname();
const Profile = ({ params }: { params: any }) => {
  const { username } = params;
  let [services, setServices] = useState(false);
  let [products, setProducts] = useState(false);

  return (
    <>
      <div className="p-4 bg-pink-50">
        <h1 className="text-xl font-bold">ex permarket</h1>
        <h1>@{username}</h1>
        <h2 className="text-gray-700 mt-5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, ratione
          et? Commodi dolore ut corrupti, ipsum nesciunt, maxime beatae,
          temporibus deserunt obcaecati perspiciatis quos illum! Impedit magnam
          quibusdam doloremque perspiciatis.
        </h2>
      </div>
      <div className="p-4 bg-blue-50 ">
        <div className="flex gap-5 mb-3">
          <h1
            className="font-bold bg-slate-50 rounded-md p-2 cursor-pointer"
            onClick={() => {
              setServices((prev) => !prev);
              if (products) {
                setProducts(false);
              }
            }}
          >
            products
          </h1>
          <h1
            className="font-bold bg-slate-50 rounded-md p-2 cursor-pointer"
            onClick={() => {
              setProducts((prev) => !prev);
              if (services) {
                setServices(false);
              }
            }}
          >
            services
          </h1>
        </div>
        {services && (
          <div className="bg-slate-600 flex flex-wrap gap-2 flex-col justify-center items-start rounded-md p-2">
            <div className="bg-pink-50 w-full pl-2 pt-2 pr-2 pb-8 cursor-pointer">
              chocolate
            </div>
            <div className="bg-pink-50 w-full pl-2 pt-2 pr-2 pb-8 cursor-pointer">
              chocolate
            </div>
            <div className="bg-pink-50 w-full pl-2 pt-2 pr-2 pb-8 cursor-pointer">
              chocolate
            </div>
            <div className="bg-pink-50 w-full pl-2 pt-2 pr-2 pb-8 cursor-pointer">
              chocolate
            </div>
            <div className="bg-pink-50 w-full pl-2 pt-2 pr-2 pb-8 cursor-pointer">
              chocolate
            </div>
            <div className="bg-pink-50 w-full pl-2 pt-2 pr-2 pb-8 cursor-pointer">
              chocolate
            </div>
            <div className="bg-pink-50 w-full pl-2 pt-2 pr-2 pb-8 cursor-pointer">
              chocolate
            </div>
            <div className="bg-pink-50 w-full pl-2 pt-2 pr-2 pb-8 cursor-pointer">
              chocolate
            </div>
            <div className="bg-pink-50 w-full pl-2 pt-2 pr-2 pb-8 cursor-pointer">
              chocolate
            </div>
            <div className="bg-pink-50 w-full pl-2 pt-2 pr-2 pb-8 cursor-pointer">
              chocolate
            </div>
            <div className="bg-pink-50 w-full pl-2 pt-2 pr-2 pb-8 cursor-pointer">
              chocolate
            </div>
            <div className="bg-pink-50 w-full pl-2 pt-2 pr-2 pb-8 cursor-pointer">
              chocolate
            </div>
          </div>
        )}
        {products && (
          <div className="bg-slate-600 flex flex-wrap gap-2 flex-col justify-center items-start rounded-md p-2">
            <Link className="w-full" href={`/${username}/product/product_id_1`}>
              <div className="bg-pink-50 w-full pl-2 pt-2 pr-2 pb-8 cursor-pointer">
                servicing
              </div>
            </Link>
            <div className="bg-pink-50 w-full pl-2 pt-2 pr-2 pb-8 cursor-pointer">
              servicing
            </div>
            <div className="bg-pink-50 w-full pl-2 pt-2 pr-2 pb-8 cursor-pointer">
              servicing
            </div>
            <div className="bg-pink-50 w-full pl-2 pt-2 pr-2 pb-8 cursor-pointer">
              servicing
            </div>
            <div className="bg-pink-50 w-full pl-2 pt-2 pr-2 pb-8 cursor-pointer">
              servicing
            </div>
            <div className="bg-pink-50 w-full pl-2 pt-2 pr-2 pb-8 cursor-pointer">
              servicing
            </div>
            <div className="bg-pink-50 w-full pl-2 pt-2 pr-2 pb-8 cursor-pointer">
              servicing
            </div>
            <div className="bg-pink-50 w-full pl-2 pt-2 pr-2 pb-8 cursor-pointer">
              servicing
            </div>
            <div className="bg-pink-50 w-full pl-2 pt-2 pr-2 pb-8 cursor-pointer">
              servicing
            </div>
            <div className="bg-pink-50 w-full pl-2 pt-2 pr-2 pb-8 cursor-pointer">
              servicing
            </div>
            <div className="bg-pink-50 w-full pl-2 pt-2 pr-2 pb-8 cursor-pointer">
              servicing
            </div>
            <div className="bg-pink-50 w-full pl-2 pt-2 pr-2 pb-8 cursor-pointer">
              servicing
            </div>
          </div>
        )}
      </div>
    </>
  );
};
export default Profile;
