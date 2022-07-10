import Link from "next/link";
import React from "react";
import Moment from "react-moment";
import { get } from "lodash";

import IconTrending from "../assets/icons/01_Black/Symbol/SVG/increase-up-profit.svg";
import { urlFor } from "../sanity";

const Trending = ({ props }: any) => {
  const renderNumbers = (i: any) => {
    const num = props.indexOf(i);
    return `0${num + 1}`;
  };
  return (
    <div className="flex flex-col justify-between max-w-max mx-auto pt-[30px] pb-[16px]">
      <div className="flex  items-center space-x-4 py-4">
        <IconTrending height={10} fill={"black"} />
        <div className="font-medium">Trending on medium</div>
      </div>

      <div className="grid grid-cols-1 items-center sm:grid-cols-2 lg:grid-cols-3 gap-0 cursor-pointer font-sans">
        {props.map(
          (post: any) => (
            console.log(post),
            (
              <div className="flex flex-grow basis-3/7 space-x-3 mr-[16px] flex-basis-auto pl-[16px] pr-[16px] mb-[24px]">
                <div className="font-bold leading-9 mr-[10px] text-3xl text-gray-300">
                  <span>{renderNumbers(post)}</span>
                </div>
                <Link key={post._id} href={`/post/${post.slug.current}`}>
                  <div>
                    <div className="flex space-x-3 items-center">
                      <img
                        className="h-5 w-5 rounded-full"
                        src={urlFor(get(post, "author.image", "")).url()!}
                        alt="author image"
                      />
                      <p className=" font-medium text-xs">
                        {get(post, "author.name", "")}
                      </p>
                    </div>
                    <h1 className="font-sans font-bold text-lg">
                      {post.title}
                    </h1>
                    <Moment
                      className="text-gray-400 subpixel-antialiased  text-sm"
                      format="MMM Do"
                    >
                      {post.publishedAt}
                    </Moment>
                  </div>
                </Link>
              </div>
            )
          )
        )}
      </div>
    </div>
  );
};

export default Trending;
