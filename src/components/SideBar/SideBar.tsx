"use client";

import { ThemeContext } from "@/context/ThemeContext";
import Image from "next/image";
import { useContext, useState } from "react";

const SideBar = () => {
  const [dark, setDark] = useState(false);
  const { state, dispatch } = useContext(ThemeContext);
  return (
    <div className="absolute bottom-0 w-80 h-full bg-red-200  items-start justify-center">
      <div className="bg-blue-300 w-full h-40  ">
        <div className="flex items-center gap-5 justify-between pr-5">
          <div className="relative m-4">
            <Image
              src="/noavatar.png"
              alt="pic"
              width={60}
              height={60}
              className="rounded-full"
            ></Image>
          </div>
          <div
            onClick={
              // () => { setDark((prev) => !prev);
              () => dispatch({ type: "CHANGE_THEME" })
              // }
            }
          >
            {state.theme === "light" ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 -960 960 960"
                width="24px"
                fill="white"
              >
                <path d="M480-360q50 0 85-35t35-85q0-50-35-85t-85-35q-50 0-85 35t-35 85q0 50 35 85t85 35Zm0 80q-83 0-141.5-58.5T280-480q0-83 58.5-141.5T480-680q83 0 141.5 58.5T680-480q0 83-58.5 141.5T480-280ZM200-440H40v-80h160v80Zm720 0H760v-80h160v80ZM440-760v-160h80v160h-80Zm0 720v-160h80v160h-80ZM256-650l-101-97 57-59 96 100-52 56Zm492 496-97-101 53-55 101 97-57 59Zm-98-550 97-101 59 57-100 96-56-52ZM154-212l101-97 55 53-97 101-59-57Zm326-268Z" />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 -960 960 960"
                width="24px"
                fill="white"
              >
                <path d="M480-120q-150 0-255-105T120-480q0-150 105-255t255-105q14 0 27.5 1t26.5 3q-41 29-65.5 75.5T444-660q0 90 63 153t153 63q55 0 101-24.5t75-65.5q2 13 3 26.5t1 27.5q0 150-105 255T480-120Zm0-80q88 0 158-48.5T740-375q-20 5-40 8t-40 3q-123 0-209.5-86.5T364-660q0-20 3-40t8-40q-78 32-126.5 102T200-480q0 116 82 198t198 82Zm-10-270Z" />
              </svg>
            )}
          </div>
        </div>
        <div className="flex justify-between pr-4 pl-2">
          <div className="flex flex-col">
            <h1 className="font-bold text-lg text-white">Jems</h1>
            {/* less white color */}
            <h2 className="text-semibold text-slate-200">0912234567</h2>
          </div>
          <svg
            className="active:translate-y-1"
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 -960 960 960"
            width="24px"
            fill="white"
          >
            <path d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z" />
          </svg>
        </div>
      </div>
      <div className="bg-slate-100 flex flex-col h-[calc(100vh-10rem)]">
        <div className="flex flex-start gap-4 p-5">
          svg
          <h1 className="text-semibold text-slate-500">Home</h1>
        </div>
        <div className="flex flex-start gap-4 p-5">
          svg
          <h1 className="text-semibold text-slate-500">Home</h1>
        </div>
        <div className="flex flex-start gap-4 p-5">
          svg
          <h1 className="text-semibold text-slate-500">Home</h1>
        </div>
      </div>
    </div>
  );
};
export default SideBar;
