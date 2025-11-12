import {RssFeed,Chat,PlayCircleFilledOutlined,Group,Bookmark, HelpOutline, WorkOutline,School,Event,Videos,} from "@mui/icons-material";
import { Video } from "lucide-react";
import React from "react";
import "./Sidebar.css"
import { Users } from "@/dummyData";
import CloseFriend from "../CloseFriend";

export default function Sidebar() {
  return (
    <div className="sidebar hidden md:block w-[25vw] px-5 py-3 font-semibold">
      <div className="">
        <ul>
          <li className="flex items-center my-4 gap-2 cursor-pointer">
            <RssFeed sx={{ fontSide: 25 }} />
            <span>Feed</span>
          </li>
          <li className="flex items-center my-4 gap-2 cursor-pointer">
            <Chat sx={{ fontSide: 25 }} />
            <span>Chat</span>
          </li>
          <li className="flex items-center my-4 gap-2 cursor-pointer">
            <PlayCircleFilledOutlined sx={{ fontSide: 25 }} />
            <span>Videos</span>
          </li>
          <li className="flex items-center my-4 gap-2 cursor-pointer">
            <Group sx={{ fontSide: 25 }} />
            <span>Groups</span>
          </li>
          <li className="flex items-center my-4 gap-2 cursor-pointer">
            <Bookmark sx={{ fontSide: 25 }} />
            <span>BookMark</span>
          </li>
          <li className="flex items-center my-4 gap-2 cursor-pointer">
            <HelpOutline sx={{ fontSide: 25 }} />
            <span>Help</span>
          </li>
          <li className="flex items-center my-4 gap-2 cursor-pointer">
            <School sx={{ fontSide: 25 }} />
            <span>Courses</span>
          </li>
          <li className="flex items-center my-4 gap-2 cursor-pointer">
            <Event sx={{ fontSide: 25 }} />
            <span>Event</span>
          </li>
        </ul>
        <button className="mb-4 mt-2 border border-black bg-[#F0F0F0] px-10 py-2 text-sm font-semibold rounded-md ">
          Readmore
        </button>
        <hr />
        <ul className="mb-3 mt-6">
{Users.map(u => (
  <CloseFriend key={u.id} user={u}/>

))}
        </ul>
      </div>
    </div>
  );
}
