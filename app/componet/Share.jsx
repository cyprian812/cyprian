import React from "react";
import { EmojiEmotions, Label, PermMedia, Room } from "@mui/icons-material";
import Image from "next/image";
// import assets from "@/dummyData";

export default function Share() {
  return (
    <div>
      <div className="share w-[100%] h-[170px] rounded-md shadow-md ">
        <div className="p-[10px]">
          <Image
            className="w-[50px] h-[50px] rounded-full object-cover mr-[10px]"
            src="/assets/team/girl.png"
            alt="a lady"
            width={50}
            height={50}
          />
          <input
            type="text"
            placeholder="What Are you thinking now?"
            className="focus:outline-none w-full font-semibold"
          />
          <hr className="m-[20px] border-black" />
          <div className="flex items-center justify-between px-6 gap-2">
            <label
              htmlFor="file"
              className="flex items-center mr-[15px] cursor-pointer"
            >
              <PermMedia htmlcolor="tomato" className="font-bold mr-3 " />
              <span className="text-[14px font-bold]">Photo and video</span>
              <input
                style={{ display: "none" }}
                type="file"
                id="file"
                accept=".png, .jpeg,jpg"
              />
            </label>
            <button className="border-none p-[7px] text-[12px] rounded-md text-white cursor-pointer mr-p[20px] bg-[green]">
              share
            </button>
            <div className="hidden sm:flex cursor-pointer">
              <Label htmlColor="green"/>
              <span>tag</span>
            </div>
            <div className="hidden sm:flex cursor-pointer">
              <Room htmlColor="blue"/>
              <span>Location</span>
            </div>
            <div className="hidden sm:flex cursor-pointer">
              <EmojiEmotions htmlColor="goldenrod"/>
              <span>Feelings</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
