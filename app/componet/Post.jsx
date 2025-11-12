"use client";

import React from "react";
import { Morevert } from "@mui/icons-material";
import { useState } from "react";
import { Users } from "@/dummyData";
import Image from "next/image";

export default function Post({ post }) {
  const [Like, setlike] = useState(post.like);
  const [islike, setisliked] = useState(false);
  const likeHandler = () => {
    setLike(isliked ? like - 1 : like + 1);
    setIsliked(!isliked);
  };

  return (
    <div className="post w-[100%] rounded-md hover:scale-[1.025]">
      User Posts
      <div className="p-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Image
              src={Users.filter((u) => u.id == post.userId)[0].profilePicture}
              alt="our member"
              width={32}
              height={32}
              className="w-[32px] h-[32px] rounded-full object-cover mr[10px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
