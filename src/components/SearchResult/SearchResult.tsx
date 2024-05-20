"use client";
import Image from "next/image";
import Link from "next/link";

export const SearchResult = () => {
  return (
    <Link href="/example_supermarket" className="w-full ">
      <div className="flex m-1 p-2 gap-2">
        <div className="relative h-50 w-50">
          <Image
            alt="pic"
            width={50}
            height={50}
            src="/noavatar.png"
            className="rounded-full "
          />
        </div>

        <div className="flex flex-col gap-3  border-b border-slate-200 w-full">
          <h1 className="text-xl ">Example Supermarket</h1>
          <div className="flex flex-row gap-8 relative">
            <h5>5 star</h5>
            <h5>2.5 km away</h5>
          </div>
        </div>
      </div>
    </Link>
  );
};
