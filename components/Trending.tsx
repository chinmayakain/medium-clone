import Link from "next/link";
import React from "react";
import IconTrending from "../assets/icons/01_Black/Symbol/SVG/increase-up-profit.svg";

const Trending = ({ props }: any) => {
  return (
    <div className="flex flex-col justify-between max-w-7xl mx-auto py-[40px]">
      <div className="flex  items-center space-x-4 py-4">
        <IconTrending height={10} fill={"black"} />
        <div className="font-medium">Trending on medium</div>
      </div>

      <div className="grid grid-cols-3 gap-10 cursor-pointer">
        {props.map((post: any) => (
          <Link key={post._id} href={`/post/${post.slug.current}`}>
            <div>
              <h1 className="font-sans font-bold">{post.title}</h1>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Trending;
