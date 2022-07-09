import React, { useState, useEffect } from "react";
import moment from "moment";
import Link from "next/link";

import { getRecentPosts, getSimilarPosts } from "../services";

// This component is used for rendering either related posts or recent posts
const PostWidget = ({ categories, slug }) => {
  const [widgetPosts, setWidgetPosts] = useState([]);

  // if we have a slug, that means we're on the article page, if we don't, we are on the landing page
  useEffect(() => {
    if (slug) {
      getSimilarPosts(categories, slug).then((result) =>
        setWidgetPosts(result)
      );
    } else {
      getRecentPosts().then((result) => setWidgetPosts(result));
    }
  }, [slug]);

  console.log(widgetPosts);

  return (
    <div className="bg-white shadow-lg rounded-lg p-8 mb-8">
      <h3 className="text-xl mb-8 font-semibold border-b pb-4">
        {slug ? "Related Posts" : "Recent Posts"}
      </h3>

      {widgetPosts.map((post) => (
        <div key={post.title} className="flex items-center w-full">
          <div className="w-16 flex-none">
            <img
              src={post.featuredImage.url}
              className="align-middle rounded-full"
              alt={post.title}
              height="60px"
              width="60px"
            />
          </div>
          <div className="flex-grow ml-4">
            <p className="text-gray-500 font-xs">
              {moment(post.createdAt).format("MMM DD, YYYY")}
            </p>
            <Link href={`/post/${post.slug}`} key={post.title}>
              {post.title}
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PostWidget;
