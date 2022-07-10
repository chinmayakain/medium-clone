import { get } from "lodash";
import Link from "next/link";
import React from "react";
import Moment from "react-moment";
import { urlFor } from "../sanity";

const BlogSection = ({ props }: any) => {
  return (
    <div className="flex justify-items-center px-4 py-5 max-w-7xl mx-auto ">
      <div className="grid grid-cols-2 gap-4 place-self-center w-auto mx-auto">
        <div>
          {props.map((post: any) => (
            <div className="flex justify-between py-10 w-120">
              <div>
                <Link key={post.id} href={`/post/${post.slug.current}`}>
                  <div className="">
                    <div className="flex space-x-3 items-center">
                      <img
                        className="h-5 w-5 rounded-full object-cover"
                        src={urlFor(get(post, "author.image", "")).url()!}
                        alt="author image"
                      />
                      <p className="font-medium text-xs">
                        {get(post, "author.name", "")}
                      </p>
                    </div>
                    <h1 className="font-sans font-bold text-lg">
                      {post.title}
                    </h1>
                    <h3>{post.body.children}</h3>
                    <Moment
                      className="text-gray-400 subpixel-antialiased text-base"
                      format="MMM Do"
                    >
                      {post.PublishedAt}
                    </Moment>
                  </div>
                </Link>
              </div>
              <div>
                <img
                  className="h-[134px] w-[200px]"
                  src={urlFor(post.mainImage).url()!}
                  alt=""
                />
              </div>
            </div>
          ))}
        </div>
        <div className=""> Fixed side</div>
      </div>
    </div>
  );
};

export default BlogSection;
