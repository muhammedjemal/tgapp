"use client";

import NavButton from "@/components/NavButton/NavButton";
import { SearchResult } from "@/components/SearchResult/SearchResult";
import SideBar from "@/components/SideBar/SideBar";
import Image from "next/image";
import { useContext, useEffect, useState } from "react";
import notFound from "../../public/notfound.webp";
import { ThemeContext } from "@/context/ThemeContext";
import { log } from "console";

export default function Home() {
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState(false);

  // console.log("home: ", state.theme);
  // create sample data

  return (
    <div>
      <div>
        <div className=" bg-blue-300 flex -mb-1">
          <div className="m-4 flex items-center justify-between w-full pr-4">
            <div className="w-full h-10 flex gap-5  items-center ">
              <div
                className="active:translate-x-1"
                onClick={() => setOpen((prev: any) => !prev)}
              >
                <NavButton />
              </div>
              <h1 className="text-white font-bold dark:bg-slate-950">
                Marketplace
              </h1>
            </div>
            <svg
              onClick={() => setSearch((prev) => !prev)}
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 -960 960 960"
              width="24px"
              fill="white"
            >
              <path d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z" />
            </svg>
          </div>
        </div>
        <div className="bg-slate-200 w-full h-9 ">
          <h1 className="text-sm text-slate-600 p-2 font-bold">Businesses</h1>
        </div>
        <SearchResult />
        <SearchResult />
        <SearchResult />
      </div>
      {open && <SideBar />}
      {open && (
        <div
          className="absolute bottom-0 right-0 w-[calc(100VW-20rem)] h-full bg-slate-600/70"
          onClick={() => setOpen(false)}
        />
      )}

      {/* client side searching */}

      {search && (
        <div className="absolute bottom-0 right-0 w-screen h-screen bg-white dark:bg-slate-950">
          <div className="flex flex-start gap-8 m-5">
            <svg
              onClick={() => setSearch((prev) => !prev)}
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 -960 960 960"
              width="24px"
              fill="#5f6368"
            >
              <path d="m313-440 224 224-57 56-320-320 320-320 57 56-224 224h487v80H313Z" />
            </svg>
            <input
              autoFocus
              type="text"
              placeholder="Search"
              className=" rounded-none outline-none bg-transparent placeholder:font-semibold placeholder:text-md placeholder:text-slate-400 w-full"
            />
          </div>
          <div className="w-screen h-[100vh-20rem] flex flex-col gap-5 justify-center items-center">
            <Image
              className="flex justify-center"
              src={notFound}
              alt="Not Found"
              width={200}
              height={100}
            />
            <h1 className="font-bold text-lg">No Results</h1>
          </div>
        </div>
      )}
    </div>
  );
}
